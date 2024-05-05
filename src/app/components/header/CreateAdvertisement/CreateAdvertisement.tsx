import StylesCustomButton from "../StylesCustomButton/StylesCustomButton";
import { FaPlus } from "react-icons/fa6";

function CreateAdvertisement() {
  return (
    <StylesCustomButton
      styles={{
        height: "48px",
        margin: "auto 0",
        display: "flex",
        alignItems: "center",
        fontWeight: "700",
        whiteSpace: "nowrap",
        fontSize: "1.1rem",
      }}
      classStyle={"addAdvertisementButton"}
    >
      <div className="flex  items-center justify-center text-sm lg:text-base">
        <span className="mr-2 hidden lg:inline">Створити </span>
        <span className="mr-0 inline scale-110 md:mr-2 md:scale-100 lg:hidden">
          <FaPlus />
        </span>
        <span className="hidden md:inline"> Оголошення</span>
      </div>
    </StylesCustomButton>
  );
}

export default CreateAdvertisement;
