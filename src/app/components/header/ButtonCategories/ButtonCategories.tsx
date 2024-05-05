import StylesCustomButton from "../StylesCustomButton/StylesCustomButton";

function ButtonCategories() {
  return (
    <div className="hidden items-center justify-center pl-0 sm:pl-4 md:flex">
      <div className="2xl:w-8 w-5 pl-1">
        <img src="./images/logo_icon.png" alt="logo" className="block" />
      </div>
      <StylesCustomButton
        styles={{ padding: "12px 24px 12px 4px" }}
        classStyle={""}
      >
        <span className="text-nowrap text-xl font-bold text-white">
          Категорії <span className="hidden lg:inline">Товарів</span>
        </span>
      </StylesCustomButton>
    </div>
  );
}

export default ButtonCategories;
