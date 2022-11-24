import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Container from "../components/Container";
import Seo from "../components/SEO";

const Projecten = ({data}) => {

    const headline = data.wpPage.paginas?.headline
    const desc = data.wpPage.paginas?.description
    const posts = data.allWpProject

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
            <Container styles={`grid grid-cols-2 gap-16 py-24`}>
                {
                    posts?.edges.map((p)=>{
                        let img = getImage(p.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData)
                        
                        const months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni",
                        "Juli", "Augustus", "September", "Oktober", "November", "December"
                        ];

                        const date = new Date(p.node.date)
                        const dateString = date.getDay() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear()

                        return(
                            <Link to={p.node.uri} key={p.node.id} className="border border-lightGray rounded-xl p-8 grid grid-cols-5 gap-8">
                                <GatsbyImage className="rounded-xl object-cover col-span-2 h-full" image={img}></GatsbyImage>
                                <div className="col-span-2">
                                    <span className="text-green">{dateString}</span>
                                    <h2 className="font-bold mt-3">{p.node.title}</h2>
                                </div>
                            </Link>
                        )
                    })
                }
            </Container>
        </div>
    )
}

export default Projecten;

export const postQuery = graphql`
    query MyQuery {
        wpPage(slug: {eq: "projecten"}) {
        paginas {
            headline
            description
        }
    }
    allWpProject {
        edges {
            node {
            title
            uri
            id
            date
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