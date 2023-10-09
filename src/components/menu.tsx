import React, { ReactElement, useState } from "react"

interface Props {
    children: ReactElement | ReactElement[];
    className: string;
}

export default function Menu({ children, className }: Props) {
    const [hamburgerIsOpen, setSamburgerIsOpen] = useState(false);

    return (
        <div className={className}>
            <div className="md:hidden">
                <div className="text-xl text-center" onClick={() => setSamburgerIsOpen(isOpen => !isOpen)}>
                    <span className="px-4 text-2xl">
                        ☰
                    </span>
                </div>
                {hamburgerIsOpen &&
                    <nav className="flex flex-col">
                        {children}
                    </nav>
                }
            </div>
            <div className="hidden md:flex flex-row">
                {children}
            </div>
        </div>
    )
}