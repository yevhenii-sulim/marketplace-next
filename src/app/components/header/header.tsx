import BurgerIcon from "./BurgerMenu/BurgerIcon.tsx/BurgerIcon"
import BurgerMenu from "./BurgerMenu/BurgerMenu"
import ButtonCategories from "./ButtonCategories/ButtonCategories"
import CreateAdvertisement from "./CreateAdvertisement/CreateAdvertisement"
import Logo from "./Logo/Logo"
import SearchField from "./SearchField/SearchField"
import UserBlock from "./UserBlock/UserBlock"

export default function Header() {
    return (
        <header className="flex  w-dvw  bg-green h-40">
            <article className="2xl:w-10/12 lg:w-98 mx-auto flex w-full justify-between   px-2 lg:px-5  ">
                <Logo />
                <ButtonCategories />
                <SearchField />
                <UserBlock />
                <CreateAdvertisement />
                <BurgerIcon />
                {/* <BurgerMenu /> */}
            </article>
        </header>
    )
}
