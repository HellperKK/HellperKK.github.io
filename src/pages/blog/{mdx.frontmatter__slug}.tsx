import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import './syntax.css'
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'

interface Props {
  data: any;
  children: any;
}

const BlogPost = ({ data, children }: Props) => {
  const image = getImage(data.mdx.frontmatter.hero_image) as IGatsbyImageData

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <hr />
      <div className='flex flex-row justify-center'>
        <div>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          {data.mdx.frontmatter.hero_image_credit_link !== "" && <p>
            Photo Credit:{" "}
            <a href={data.mdx.frontmatter.hero_image_credit_link}>
              {data.mdx.frontmatter.hero_image_credit_text}
            </a>
          </p>}
        </div>
      </div>
      <div>
        {children}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }: any) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost