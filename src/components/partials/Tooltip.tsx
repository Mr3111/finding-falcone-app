import {ReactElement} from "react";

type TooltipProps = {
  children?: ReactElement;
  text?: string;
  position?: "top" | "bottom" | "left" | "right";
};

function Tooltip({text, children, position="left"}: TooltipProps) {
    return (
        <div data-tip={text} className={`tooltip tooltip-${position}`}>
            {children}
        </div>
    );
}

export default Tooltip;
