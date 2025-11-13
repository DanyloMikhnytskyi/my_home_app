import React from "react";

export interface AppProductFromProps
  extends React.FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
}

export const AppProductFrom = React.forwardRef<
  HTMLFormElement,
  AppProductFromProps
>(function AppProductFrom({ children, className, ...rest }, ref) {
  return (
    <form ref={ref} className={className} {...rest}>
      {children}
    </form>
  );
});
