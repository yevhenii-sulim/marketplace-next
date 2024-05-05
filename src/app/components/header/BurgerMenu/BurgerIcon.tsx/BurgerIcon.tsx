"use client"

import { useState } from "react"

function BurgerIcon() {
    const [activateBurgerIcon, setActivateBurgerIcon] = useState(false)

    const toggleIcon = () => {
        setActivateBurgerIcon((prev) => !prev)
    }

    return (
        <div
            className="flex h-full cursor-pointer flex-col"
            onClick={() => toggleIcon()}
        >
            <span
                className={`${
                    activateBurgerIcon
                        ? "before:rotate-135 before:top-m1px after:bottom-m1px smooth_animation h-0  after:rotate-45"
                        : "h-1 "
                } before:top-8px after:bottom-8px smooth_animation relative  my-auto flex w-9 rounded-3xl bg-white before:absolute   before:h-1 before:w-9 before:rounded-3xl before:bg-white after:absolute after:block after:h-1 after:w-9 after:rounded-3xl after:bg-white md:hidden`}
            ></span>
        </div>
    )
}

export default BurgerIcon
