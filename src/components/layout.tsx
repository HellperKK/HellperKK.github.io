import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Menu from './menu'

interface Props {
    pageTitle: string,
    children: React.ReactElement | React.ReactElement[]
}

const Layout = ({ pageTitle, children }: Props) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`)

    return (
        <div className='bg-[#5c5d9c] text-white h-full min-h-screen' id='top'>
            <Menu className="bg-[#3d3d5e] text-2xl py-4 sticky top-0 z-10">
                <div className='mx-2'>
                    <Link to="/">
                        <span>Accueil</span>
                    </Link>
                </div>
                <span>|</span>
                {/*
                <div className='mx-2'>
                    <Link to="/about">
                        À propos
                    </Link>
                </div>
                <span>|</span>
                */}
                <div className='mx-2'>
                    <Link to="/blog">
                        <span>Blog</span>
                    </Link>
                </div>
                <span>|</span>
                <div className='mx-2'>
                    <Link to="/projects">
                        <span>Projets</span>
                    </Link>
                </div>
            </Menu>
            <header className='bg-[#5c5d9c] p-4 text-center text-2xl'>{data.site.siteMetadata.title}</header>
            <main className='p-4 bg-[#5c5d9c] md:px-24 xl:px-80 2xl:px-96'>
                <h1 className='text-center'>{pageTitle}</h1>
                {children}
            </main>
        </div >
    )
}

export default Layout