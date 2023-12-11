import * as React from 'react'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../../components/seo'
import Screen from '../../components/screen'
import Herobook from '../../components/projects/herobook'

const Projects = () => {
  const projects = [<Herobook />]

  return (
    <Layout pageTitle="Mes projets">
      <div>
        <div className='text-center py-4'>
          <a href={`#screen-0`} className='' >commencer la visite</a>
        </div>
        <div className='snap-y snap-mandatory'>
          {projects.map((project, index, projects) => <Screen current={index} max={projects.length}>
            {project}
          </Screen>)}
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Mes projets" />

export default Projects