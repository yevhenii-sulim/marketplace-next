import { IoSearch } from "react-icons/io5";

function SearchField() {
  return (
    <div className="lg:w-31 sx:px-4 mx-2 my-auto flex h-10 w-9/12 items-center rounded bg-white px-1 text-lg shadow-2xl md:mx-0 md:w-40">
      <input
        type="text"
        className=" w-11/12 focus:outline-none"
        placeholder="Я шукаю..."
      />
      <button className=" sx:px-4 rounded-50 xs:rounded-lg relative flex h-8 items-center justify-between  bg-green px-2 text-base text-white">
        <span className="scale-130 xs:mr-2 mr-0">
          <IoSearch />
        </span>
        <span className="xs:inline hidden text-base"> Пошук</span>
      </button>
    </div>
  );
}

export default SearchField;
