import {CSSProperties, ReactElement} from "react";

type PaperProps = {
    children: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
}

const Paper = function({children, className, style}: PaperProps): ReactElement {
    return (
        <div className={`artboard ${className}`} style={style}>
            {children}
        </div>
    );
}

export default Paper;
