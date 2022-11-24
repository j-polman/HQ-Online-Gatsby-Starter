import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Container from "../components/Container";
import Button from "../components/cta";
import Seo from "../components/SEO";

const Oplossing = ({data}) => {

    const headline = data.wpOplossing.title
    const desc = data.wpOplossing.excerpt
    const content = data.wpOplossing.content
    const img = getImage(data.wpOplossing.featuredImage.node.localFile.childImageSharp.gatsbyImageData)

    const blok1Headline = data.wpOplossing.singleProject.blok1Headline
    const blok1Desc = data.wpOplossing.singleProject.blok1Omschrijving
    const usps = data.wpOplossing.singleProject.usps
    const uspIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    const cta = data.wpOplossing.singleProject.cta
    const ctaTarget = data.wpOplossing.singleProject.ctaTarget

    const blok2Headline = data.wpOplossing.singleProject.blok2Headline
    const blok2Desc = data.wpOplossing.singleProject.blok2Omschrijving
    const blok2Image = getImage(data.wpOplossing.singleProject.blok2Afbeelding.localFile.childImageSharp.gatsbyImageData)
    const blok2Name = data.wpOplossing.singleProject.blok2Naam
    const blok2Function = data.wpOplossing.singleProject.blok2Functie


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
                <div>
                    <h2 className="text-5xl font-bold text-text">{blok1Headline}</h2>
                    <p className="my-12">{blok1Desc}</p>
                    <ul className="mb-12">
                        {
                            usps.map((u, i)=>{
                                return(
                                    <li key={i} className="flex my-3 text-lg font-bold items-center">
                                        <span className="text-green mr-2 ">{uspIcon}</span>{u.usp}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Button target={`/${ctaTarget}`}>{cta}</Button>
                </div>
                <div className="flex items-center">
                    <GatsbyImage className="rounded-xl" image={img}></GatsbyImage>
                </div>
            </Container>
            <Container styles={`w-1/2 py-24`}>
                <p dangerouslySetInnerHTML={{__html: content}}></p>
            </Container>
            <Container styles={`grid grid-cols-2 gap-16 py-24`}>
                <div>
                    <span>"</span>
                    <h2 className="text-3xl font-medium text-text">{blok2Headline}</h2>
                    <p className="my-12">{blok2Desc}</p>
                </div>
                <div className="flex items-center">
                    <div className="relative">
                        <GatsbyImage className="rounded-xl" image={blok2Image}></GatsbyImage>
                        <div className="bg-gradient-to-b from-transparent via-transparent to-gray absolute h-full w-full top-0 left-0 flex flex-col justify-end rounded-xl p-8 text-white">
                            <span className="font-bold text-lg mb-1">{blok2Name}</span>
                            <span className="font-light text-base">{blok2Function}</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Oplossing;

export const postQuery = graphql`
query($id: Int!){
    wpOplossing(databaseId: {eq: $id}){
        title
        excerpt
        content
        singleProject {
            blok1Headline
            blok1Omschrijving
            blok2Functie
            blok2Headline
            blok2Naam
            blok2Omschrijving
            cta
            ctaTarget
            usps {
              usp
            }
            blok2Afbeelding {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
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