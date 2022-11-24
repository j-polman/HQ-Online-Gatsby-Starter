import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Container from "../components/Container";
import Seo from "../components/SEO";

const Oplossingen = ({data}) => {

    const headline = data.wpPage.paginas?.headline
    const desc = data.wpPage.paginas?.description
    const posts = data.allWpOplossing

    return(
        <div>
            <Seo title="Pagina 2" />
            <div className="bg-gray h-3/6">
                <Container styles={`py-24 flex flex-col justify-center items-center relative`}>

                <h1 className="uppercase text-4xl text-white">{headline}</h1>

                <p className="text-white my-8 text-xl w-1/2 text-center">
                    {desc}
                </p>

                </Container>
            </div>
            <Container styles={`grid grid-cols-3 gap-x-16 gap-y-32 py-24`}>
                {
                    posts?.edges.map((p)=>{
                        let img = getImage(p.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData)

                        return(
                            <Link to={p.node.uri} key={p.node.id}>
                                <div className="h-full">
                                <GatsbyImage image={img} className="rounded-xl object-cover h-3/4"></GatsbyImage>
                                <h3 className="mt-5 text-text font-bold">{p.node.title}</h3>
                                </div>
                            </Link>
                        )
                    })
                }
            </Container>
        </div>
    )
}

export default Oplossingen;

export const postQuery = graphql`
    query MyQuery {
        wpPage(slug: {eq: "oplossingen"}) {
        paginas {
            headline
            description
        }
    }
    allWpOplossing {
        edges {
            node {
            title
            uri
            id
            featuredImage {
                node {
                localFile {
                    childImageSharp {
                    gatsbyImageData
                    }
                }
                }
            }
            }
        }
        }
    }
`