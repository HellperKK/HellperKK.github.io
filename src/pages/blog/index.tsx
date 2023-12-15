import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }: any) => {
  console.log(data.allMdx.nodes[0].frontmatter)
  return (
    <Layout pageTitle="Mon blog">
      <div>
        {
          data.allMdx.nodes.map((node: any) => (
            <article key={node.id} className='my-4 p-2 rounded-md bg-[#7f81e9] shadow-lg shadow-indigo-900/40'>
              <Link to={`/blog/${node.frontmatter.slug}`} className='text-2xl'>
                {node.frontmatter.title}
              </Link>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          ))
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}, filter: {frontmatter: { published: {eq: true} }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          published
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="Mon blog" />

export default BlogPage