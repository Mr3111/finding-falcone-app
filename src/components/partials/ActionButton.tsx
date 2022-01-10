import {ReactElement} from "react";
import Tooltip from "@components/Tooltip";

type ActionButtonProps = {
    className?: string;
    onClick?: () => void;
    text?: string;
    disabled?: boolean;
    loading?: boolean;
    icon?: ReactElement;
    tooltip?: string;
};

function Button({onClick, text, disabled, loading, icon, className}: Omit<ActionButtonProps, "tooltip">): ReactElement {
    return (
        <button className={`btn btn-sm flex ${ className}`}
                onClick={onClick}>
            {icon}
            {text}
        </button>
    );
}

function ActionButton(props: ActionButtonProps) {
    const {tooltip} = props;
    if (tooltip) {
        return (
            <Tooltip text={tooltip}><Button {...props} /></Tooltip>
        )
    }
    return (
        <Button {...props} />
    );
}

export default ActionButton;
