import { default as MuiBox } from "@mui/material/Box";
import { forwardRef } from "react";

const Box = forwardRef(({ children, ...props }, ref) => {
  return (
    <MuiBox ref={ref} {...props}>
      {children}
    </MuiBox>
  );
});

Box.defaultProps = {};

export default Box;
