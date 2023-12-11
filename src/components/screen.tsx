import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ current: number; max: number }>

export default function Screen({ current, max, children }: Props) {
    return (<div className="flex flex-col justify-between items-center py-4 min-h-screen snap-always snap-center" id={`screen-${current}`}>
        <div>
            {current !== 0 &&
                <a href={`#screen-${current - 1}`}>projet précédent</a>
            }
        </div>
        <div>
            {children}
        </div>
        <div>
            {current !== (max - 1) &&
                <a href={`#screen-${current + 1}`}>projet suivant
                    {" | "}
                </a>
            }
            <a href="#top">remonter</a>
        </div>
    </div>)
}