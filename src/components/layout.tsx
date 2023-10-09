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
        <div className='bg-indigo-600 text-white h-full min-h-screen'>
            <header className='bg-indigo-950 p-4 text-center text-2xl'>{data.site.siteMetadata.title}</header>
            <Menu className="bg-indigo-950">
                <div className='mx-2'>
                    <Link to="/">
                        Accueil
                    </Link>
                </div>
                <div className='mx-2'>
                    <Link to="/about">
                        À propos
                    </Link>
                </div>
                <div className='mx-2'>
                    <Link to="/blog">
                        Blog
                    </Link>
                </div>
                <div className='mx-2'>
                    <Link to="/blog">
                        Projets
                    </Link>
                </div>
            </Menu>
            <main className='p-4'>
                <h1 className='text-center'>{pageTitle}</h1>
                {children}
            </main>
        </div >
    )
}

export default Layout