import { LuMessageSquare, LuHeart, LuUser2 } from "react-icons/lu";

import StylesCustomButton from "../StylesCustomButton/StylesCustomButton";
function UserBlock() {
  return (
    <div className="hidden w-28 items-center justify-between px-2 md:flex lg:w-36">
      <StylesCustomButton styles={{ padding: "0" }} classStyle={""}>
        <LuMessageSquare className=" text-2xl text-white" />
      </StylesCustomButton>
      <StylesCustomButton styles={{ padding: "0" }} classStyle={""}>
        <LuHeart className=" text-2xl text-white" />
      </StylesCustomButton>
      <StylesCustomButton styles={{ padding: "0" }} classStyle={""}>
        <LuUser2 className="text-2xl text-white" />
      </StylesCustomButton>
    </div>
  );
}

export default UserBlock;
