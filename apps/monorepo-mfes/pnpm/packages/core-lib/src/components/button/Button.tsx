import Button from "@mui/material/Button";
import { type ButtonProps } from "./Button.interface";

export default function UIButton() {
  const style: ButtonProps = {
    className: "style",
  };
  return (
    <Button variant="contained" className={style.className}>
      Click Me!!!
    </Button>
  );
}
