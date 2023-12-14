import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ current: number; max: number }>

export default function Screen({ current, max, children }: Props) {
    return (<div className="py-4" id={`screen-${current}`}>
        <div className="text-center">
            {/*current !== 0 &&
                <a href={`#screen-${current - 1}`}>projet précédent</a>
*/}
        </div>
        <div>
            {children}
        </div>
        <div className="text-center">
            {/*current !== (max - 1) &&
                <a href={`#screen-${current + 1}`}>projet suivant
                    {" | "}
                </a>
            <a href="#top">remonter</a>
*/}
        </div>
    </div>)
}