import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function ClikerProject() {
    return (<div>
        <div className='text-center'>
            <h2>Clicker project</h2>
            <StaticImage className='w-6/12 text-center'
                alt="Le projet"
                src="../../images/cliker-project.png"
            />
        </div>
        <p>
            Le Cliker projet est un projet ayant pour but d'implémenter le même cliker dans plusieurs technologies (react,
            vuejs, angular, elm...) dans le but de voir les différences, points faibles et forts de chacune.
        </p>
        <p><a href="https://github.com/HellperKK/clicker-project">En savoir plus</a></p>
    </div>)
}