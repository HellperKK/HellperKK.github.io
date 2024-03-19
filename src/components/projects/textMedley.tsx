import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function TextMedley() {
    return (<div>
        <div className='text-center'>
            <h2>Text-meldey</h2>
            <StaticImage className='w-6/12 text-center'
                alt="Code text-medley"
                src="../../images/text-medley.png"
            />
        </div>
        <p>
            Le text-medley est un langage de programmation dédié à la génération de textes aléatoires. Il peut être
            interprété ou compilé dans un autre langage pour être intégré dans quasiment n'importe quel type de projet.
        </p>
        <p><a href="https://github.com/HellperKK/text-medley">En savoir plus</a></p>
    </div>)
}