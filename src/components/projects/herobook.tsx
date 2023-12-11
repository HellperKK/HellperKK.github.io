import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function Herobook() {
    return (<div>
        <div className='text-center'>
            <h2>Herobook</h2>
            <StaticImage className='w-6/12 text-center'
                    alt="Editeur herobook"
                    src="../../images/Herobook.jpg"
                />
        </div>
        
        <p>
            Herobook est un moteur de jeu textuel permettant de réaliser des histoires à embranchement
            ou des romans dont vous êtes les héros. Son dévelopement à débuté en avril 2014 et est toujours
            actif. Il est composé en deux parties : un éditeur pour d'écrire ses histoires et les exporter dans un zip et un interpréteur
            pour tranformer le zip en un jeu.
        </p>
        <p>
            Durant toute ces années, herobook à parcouru un long chemin, partant d'un programme en ligne de commande pour devenir un moteur riche de
            fonctionnalités, comme la possibilité de voir son histoire sous forme de graphe, d'ajouter des images et de choisir les couleurs de son jeu.
        </p>
        <p><a href="https://hellper.itch.io/herobook-simple-version">En savoir plus</a></p>
    </div>)
}