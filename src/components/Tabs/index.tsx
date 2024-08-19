import clsx from "clsx";
import {
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface TabsData {
  setCurrentTab: (value: SetStateAction<number>) => void;
  currentTab: number;
  isLazy: boolean;
}

const TabsDataContext = createContext<TabsData>({} as TabsData);

export interface TabsProps {
  className?: string;
  children?: ReactNode;
  tabs?: string[];
  panels?: ReactNode[];
  isLazy?: boolean;
  initialIndex?: number;
}

const TabsRoot: FC<TabsProps> = ({
  children,
  className,
  tabs,
  panels,
  isLazy = false,
  initialIndex = 0,
}) => {
  const [currentTab, setCurrentTab] = useState(initialIndex);

  return (
    <TabsDataContext.Provider value={{ currentTab, setCurrentTab, isLazy }}>
      <div className={clsx("flex flex-col gap-2", className)}>
        {children ? (
          children
        ) : (
          <>
            <TabsTabList tabs={tabs} />
            <TabsPanels panels={panels} />
          </>
        )}
      </div>
    </TabsDataContext.Provider>
  );
};

interface TabsTabListProps {
  className?: string;
  children?: ReactNode;
  tabs?: string[];
}

const TabsTabList: FC<TabsTabListProps> = ({ children, tabs, className }) => {
  return (
    <div className={clsx(className)}>
      <ul className="flex gap-2 text-center overflow-x-auto scrollbar pb-1">
        {children ? (
          children
        ) : (
          <>
            {tabs?.map((tab, index) => (
              <TabsTabItem key={index} index={index}>
                {tab}
              </TabsTabItem>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

interface TabsTabItemProps {
  index: number;
  children: ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
}

const TabsTabItem: FC<TabsTabItemProps> = ({
  children,
  index,
  isDisabled,
  onClick,
}) => {
  const { setCurrentTab, currentTab } = useContext(TabsDataContext);

  return (
    <li className="">
      <button
        onClick={() => {
          setCurrentTab(index);
          onClick && onClick();
        }}
        className={clsx(
          "flex items-center gap-2 p-2 px-4 border-b-2 rounded-t-md hover:bg-[#f2f2f2] disabled:cursor-not-allowed  transform duration-500",
          {
            "border-violet-500 bg-[#f0f0f0]": currentTab === index,
          }
        )}
        type="button"
        disabled={isDisabled}
      >
        {children}
      </button>
    </li>
  );
};

interface TabsPanelsProps {
  children?: ReactNode;
  panels?: ReactNode[];
}

const TabsPanels: FC<TabsPanelsProps> = ({ children, panels }) => {
  return (
    <div className="w-full">
      {children ? (
        children
      ) : (
        <>
          {panels?.map((panel, index) => (
            <TabsPanel key={index} index={index}>
              {panel}
            </TabsPanel>
          ))}
        </>
      )}
    </div>
  );
};

interface TabsPanelProps {
  index: number;
  children: ReactNode;
  className?: string;
}

const TabsPanel: FC<TabsPanelProps> = ({ children, index, className }) => {
  const { currentTab, isLazy } = useContext(TabsDataContext);

  const Comp = (
    <div
      className={clsx(className, {
        hidden: index !== currentTab,
      })}
    >
      {children}
    </div>
  );

  if (isLazy) {
    if (index !== currentTab) {
      return null;
    }
    return Comp;
  }
  return Comp;
};

export const Tabs = {
  Root: TabsRoot,
  List: TabsTabList,
  Tab: TabsTabItem,
  Panels: TabsPanels,
  Panel: TabsPanel,
};
