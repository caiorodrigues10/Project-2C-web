"use client";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import {
  createContext,
  FC,
  Fragment,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import * as ReactDom from "react-dom";

interface ItemsProps {
  children: ReactNode;
  onClick: boolean;
}

interface PopoverData {
  container: MutableRefObject<any>;
  popoverRef: MutableRefObject<any>;
  position: "bottomLeft" | "bottomCenter" | "bottomRight" | "leftTop";
  visible: boolean;
  onHandlePopover: (args: any) => void;
  setVisible?: (value: SetStateAction<boolean>) => void;
}

const PopoverContext = createContext<PopoverData>({} as PopoverData);

export interface PopoverProps {
  position?: "bottomLeft" | "bottomCenter" | "bottomRight" | "leftTop";
  onVisible?: boolean;
  children: ReactNode;
  setOnVisible?: (value: SetStateAction<boolean>) => void;
  onClose?: (value: SetStateAction<boolean>) => void;
  onHover?: boolean;
}

type AnyEvent = MouseEvent | TouchEvent;

const PopoverRoot: FC<PopoverProps> = ({
  children,
  position = "bottomCenter",
  onVisible = false,
  setOnVisible,
  onClose,
  onHover,
}) => {
  const [visible, setVisible] = useState(
    onVisible !== undefined ? onVisible : false
  );
  const popoverRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const containerElement = container?.current;
      const popoverElement = popoverRef?.current;

      if (
        !containerElement ||
        containerElement.contains(event.target as Node) ||
        !popoverElement ||
        popoverElement.contains(event.target as Node)
      ) {
        return;
      }
      setOnVisible && setOnVisible(false);
      setVisible(false);
      onClose && onClose(false);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [setOnVisible, onClose]);

  const onHandlePopover = () => {
    setVisible((prevState) => {
      if (!prevState) {
        return true;
      } else if (prevState) {
        return false;
      }
      return false;
    });

    onClose &&
      onClose((prevState) => {
        if (prevState) {
          return false;
        }
        return false;
      });

    setOnVisible &&
      setOnVisible((prevState) => {
        if (!prevState) {
          return true;
        } else if (prevState) {
          return false;
        }
        return false;
      });
  };

  const handleMouseEnter = () => {
    if (onHover) {
      setVisible(true);
      setOnVisible && setOnVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (onHover) {
      setVisible(false);
      setOnVisible && setOnVisible(false);
    }
  };

  useEffect(() => {
    setVisible(onVisible);
  }, [onVisible]);

  return (
    <PopoverContext.Provider
      value={{
        visible,
        container,
        popoverRef,
        position,
        onHandlePopover,
        setVisible,
      }}
    >
      <div
        ref={container}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

interface PopoverToggleProps {
  children: ReactNode;
}

const PopoverToggle: FC<PopoverToggleProps> = ({ children }) => {
  const { onHandlePopover } = useContext(PopoverContext);

  return <Slot onClick={onHandlePopover}>{children}</Slot>;
};

const PopoverItem: FC<ItemsProps> = ({ children, onClick = false }) => {
  const { setVisible, visible } = useContext(PopoverContext);

  return (
    <div
      className="w-full"
      onClick={() => {
        if (onClick && visible) {
          setVisible && setVisible(false);
        }
      }}
    >
      {children}
    </div>
  );
};

interface PopoverContentProps {
  children: ReactNode;
  className?: string;
}

const PopoverContent: FC<PopoverContentProps> = ({ children, className }) => {
  const { visible, popoverRef, container, position } =
    useContext(PopoverContext);

  return (
    <Fragment>
      {visible &&
        (ReactDom.createPortal(
          (
            <div
              className={clsx("flex flex-col", {
                "items-end": position === "bottomLeft",
                "items-center": position === "bottomCenter",
                "items-start": position === "bottomRight",
              })}
            >
              <div
                ref={popoverRef}
                className={clsx(
                  `absolute z-[1000] flex flex-col rounded-lg border-2 border-slate-200 bg-white shadow-md`,
                  {
                    "animate-PopoverBottomOpen": visible,
                    "-bottom-1 right-[75%]": position === "leftTop",
                    "right-[40%]": position === "bottomLeft",
                    "left-[40%]": position === "bottomRight",
                  },
                  className
                )}
              >
                {children}
              </div>
            </div>
          ) as any,
          container.current
        ) as ReactNode)}
    </Fragment>
  );
};

export const Popover = {
  Root: PopoverRoot,
  Content: PopoverContent,
  Toggle: PopoverToggle,
  Item: PopoverItem,
};
