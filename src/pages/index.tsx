import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <Layout pageTitle="Présentation">
            <div className='w-full flex flex-col items-center my-4'>
                <StaticImage className='rounded-full w-96 text-center'
                    alt="Pourtrait de l'auteur"
                    src="../images/portrait-link-square2.jpg"
                />
                <div className='px-10'>
                    <p className='my-4'>
                        Passionné par la création sous toutes formes depuis 2008, je me suis investi dans plusieurs domaines créatifs
                        tels que l'écriture, la composition et le pixel-art.
                    </p>
                    <p className='my-4'>
                        Développeur de formation, j'ai commencé la programmation en 2012 durant une année de DUT. Depuis, je n'ai cessé de faire des projets
                        variés pour continuer à m'autoformer. J'ai aussi obtenu en 2020 le titre de développeur web et web mobile, validant et renforçant mes compétences
                        dans le développement informatique.
                    </p>
                    <p className='my-4'>
                        Si je devais citer un élément qui me distingue, c'est ma capacité d'adaptation à différentes technologies. <br /> J'ai profité de mon apprentissage en
                        autodidacte pour explorer de nombreux langages de programmation et technologies et cette variété à profondément et durablement nourri ma
                        façon de faire. J'ai ainsi utilisé une vingtaine de langages différents, des plus mainstreams (php, java, python...) à des moins répandus
                        (elm, haxe, reasonml...).
                        <Link to="/projects">
                            <span className='underline'>Voir mes projets</span>
                        </Link>
                    </p>
                    <p className='my-4'>
                        La variété de mes compétences dans divers domaines créatifs vient du fait de mon entrée dans le monde de l'informatique par le domaine de la
                        création de jeux vidéo. Je me suis formé tel un couteau suisse, afin de plus aisément communiquer avec les collaborateurs d'autres disciplines.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="À propos" />

export default AboutPage