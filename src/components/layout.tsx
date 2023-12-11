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
        <div className='bg-indigo-500 text-white h-full min-h-screen' id='top'>
            <Menu className="bg-indigo-900 text-2xl py-4">
                <div className='mx-2'>
                    <Link to="/">
                        <span className='underline'>Accueil</span>
                    </Link>
                </div>
                {/*
                <div className='mx-2'>
                    <Link to="/about">
                        À propos
                    </Link>
                </div>
                */}
                <div className='mx-2'>
                    <Link to="/projects">
                        <span className='underline'>Blog</span>
                    </Link>
                </div>
                <div className='mx-2'>
                    <Link to="/projects">
                    <span className='underline'>Projets</span>
                    </Link>
                </div>
            </Menu>
            <header className='bg-indigo-500 p-4 text-center text-2xl'>{data.site.siteMetadata.title}</header>
            <main className='p-4 bg-indigo-500 md:px-24 xl:px-80'>
                <h1 className='text-center'>{pageTitle}</h1>
                {children}
            </main>
        </div >
    )
}

export default Layout