import clsx from "clsx";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import * as ReactDom from "react-dom";

export interface TooltipProps {
  children: ReactNode;
  tooltip: ReactNode;
  position?: "left" | "right" | "top" | "bottom";
  tooltipIsOpen?: boolean;
  hoverDisable?: boolean;
}

const ToolTip: React.FC<TooltipProps> = ({
  children,
  tooltip,
  position = "bottom",
  tooltipIsOpen,
  hoverDisable,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  const [showTooltip, setShowTooltip] = useState(false);
  const [coords, setCoords] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  const getCoords = useCallback(
    (position: "left" | "right" | "top" | "bottom") => {
      if (!container.current || !tooltipRef.current) return;

      const { width, height, top, left, right, bottom } =
        container.current.getBoundingClientRect();

      const { width: tooltipWidth, height: tooltipHeight } =
        tooltipRef.current.getBoundingClientRect();

      const positions = {
        left: {
          x: left - (tooltipWidth + width * 0.25),
          y: top - tooltipHeight / 2 + height / 2,
        },
        top: {
          x: left + width / 2 - tooltipWidth / 2,
          y: top - tooltipHeight,
        },
        right: {
          x: right,
          y: top - tooltipHeight / 2 + height / 2,
        },
        bottom: {
          x: left + width / 2 - tooltipWidth / 2,
          y: bottom,
        },
      };

      setCoords(positions[position]);
    },
    []
  );

  useEffect(() => {
    if (showTooltip || tooltipIsOpen) {
      getCoords(position);
    }
  }, [position, showTooltip, getCoords, tooltipIsOpen]);

  return (
    <div
      ref={container}
      onMouseEnter={() => {
        !hoverDisable && setShowTooltip(true);
      }}
      onMouseLeave={() => {
        setShowTooltip(false);
      }}
      className="group/tooltip relative"
    >
      {children}
      {(showTooltip || tooltipIsOpen) &&
        tooltip &&
        ReactDom.createPortal(
          <span
            ref={tooltipRef}
            style={{
              left: coords.x,
              top: coords.y,
            }}
            className={clsx(
              "group-hover/tooltip:opacity-100 z-[1000] transition tooltip-theme w-auto font-semibold h-auto text-theme px-2 py-1.5 rounded fixed whitespace-pre-wrap",
              {
                "mr-2": position === "left",
                "mt-2": position === "bottom",
                "-mt-2": position === "top",
                "ml-2": position === "right",
              }
            )}
          >
            {tooltip}
          </span>,
          document.body
        )}
    </div>
  );
};

export { ToolTip };
