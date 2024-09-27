import React from "react";

export const withOptional =
  (WrappedComponent) =>
  ({ data, children, ...rest }) => {
    const notEmpty = Array.isArray(data) ? data.length > 0 : data;

    return notEmpty ? (
      <WrappedComponent {...rest} data={data}>
        {children}
      </WrappedComponent>
    ) : null;
  };
