import React, { ReactNode } from "react";

const Button: React.FC<{ children: ReactNode | ReactNode[] }> = ({
    children,
}) => {
    return <button style={{ padding: "1em" }}>{children}</button>;
};

export default Button;
