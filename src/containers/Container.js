import React from "react";
const Container = ({ page, children }) => (
    <div className={`Container page-${page}`}>{children}</div>
)

export default Container;