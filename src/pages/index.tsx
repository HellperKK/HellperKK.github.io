import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <Layout pageTitle="Adrien Baudet : Développeur">
            <div className='w-full flex flex-col items-center my-4'>
                <StaticImage className='rounded-full w-96 text-center'
                    alt="Pourtrait de l'auteur"
                    src="../images/portrait-link-square2.jpg"
                />
                <div className='px-10'>
                    <p className='my-4'>
                        Passionné par la création sous toutes ses formes depuis 2008, je me suis investi dans plusieurs domaines créatifs
                        tels que l'écriture, la composition et le pixel-art.
                    </p>
                    <p className='my-4'>
                        Développeur de formation, j'ai commencé la programmation en 2012 au cours d'un DUT. Depuis, je n'ai cessé de faire des projets
                        variés pour continuer à m'autoformer. J'ai aussi obtenu en 2020 le titre de développeur web et web mobile (bac+2), validant et renforçant mes compétences
                        dans le développement informatique.
                    </p>
                    <p className='my-4'>
                        Si je devais citer un élément qui me distingue, c'est ma capacité d'adaptation à différentes technologies. <br /> J'ai profité de mon apprentissage en
                        autodidacte pour explorer de nombreux langages de programmation et technologies et cette variété a profondément et durablement nourri ma
                        façon de faire. <Link to="/blog">Voir mes expérimentations</Link>. J'ai ainsi utilisé une vingtaine de langages différents, des plus mainstreams (PHP, Java, Python...) à des moins répandus
                        (Elm, Haxe, Reasonml...).
                        <Link to="/projects">
                            Voir mes projets
                        </Link>
                    </p>
                    <p className='my-4'>
                        La variété de mes compétences dans divers domaines créatifs vient du fait de mon entrée dans le monde de l'informatique par le domaine de la
                        création de jeux vidéo. Je me suis formé tel un couteau suisse, afin de communiquer plus aisément avec les collaborateurs d'autres disciplines.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="À propos" />

export default AboutPage