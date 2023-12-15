import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function Stoicos() {
    return (<div>
        <div className='text-center'>
            <h2>Stoicos</h2>
            <StaticImage className='w-6/12 text-center'
                    alt="Editeur herobook"
                    src="../../images/Stoicos.png"
                />
        </div>
        <p>
            Le Stoicos est un langage de programmation que j'ai commencé à développer fin 2015 et qui s'est peu à peu approché
            de la famille des lisps. Il s'agit d'un langage jouet dont le but est la promotion de la programmation fonctionnelle.
        </p>
    </div>)
}