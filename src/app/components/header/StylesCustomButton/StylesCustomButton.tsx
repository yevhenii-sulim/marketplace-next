import { ReactNode } from "react";
import { stylesHeaderButton } from "../native-styles/native-styles";

function StylesCustomButton({
  children,
  styles,
  classStyle,
}: {
  children: ReactNode;
  styles: { [key: string]: string | { [key: string]: string } };
  classStyle: string;
}) {
  return (
    <button style={{ ...stylesHeaderButton, ...styles }} className={classStyle}>
      {children}
    </button>
  );
}

export default StylesCustomButton;
