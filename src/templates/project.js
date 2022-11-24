import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Container from "../components/Container";
import Seo from "../components/SEO";

const Project = ({data}) => {

    const headline = data.wpProject.title
    const desc = data.wpProject.excerpt
    const content = data.wpProject.content
    const img = data.wpProject.featuredImage.node.localFile.childImageSharp.gatsbyImageData
    
    return(
        <div>
            <Seo title="Pagina 2" />
            <div className="bg-gray h-3/6">
                <Container styles={`py-24 flex flex-col justify-center items-center relative`}>

                <h1 className="uppercase text-4xl text-white">{headline}</h1>

                <p className="text-white my-8 text-xl w-1/2 text-center" dangerouslySetInnerHTML={{__html: desc}}></p>

                </Container>
            </div>
            <Container styles={`grid grid-cols-2 gap-16 py-24`}>
                <div></div>
                <div><GatsbyImage className="rounded-xl" image={img}></GatsbyImage></div>
            </Container>
        </div>
    )
}

export default Project;

export const postQuery = graphql`
query($id: Int!){
    wpProject(databaseId: {eq: $id}){
        title
        excerpt
        content
        featuredImage{
            node{
                localFile{
                    childImageSharp{
                        gatsbyImageData
                    }
                }
            }
        }
    }
}
`