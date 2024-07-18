import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

interface Props {
    title: string
}

const Seo = ({ title }: Props) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

    return (
      <>
        <html lang="fr" />
        <title>{title} | {data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </>
    )
}

export default Seo