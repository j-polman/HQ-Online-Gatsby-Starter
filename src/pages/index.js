import React, { useEffect } from "react"
import Seo from "../components/SEO"
import Container from "../components/Container"
import Button from "../components/cta"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const IndexPage = ({data}) => {

  const headline = data?.wpPage.paginas?.headline
  const desc = data?.wpPage.paginas?.description
  const cta = data?.wpPage.homepagina.cta
  const ctaTarget = data?.wpPage.homepagina.ctatarget
  const ctaSub = data?.wpPage.homepagina.callToActionSubtekst
  const video = data?.wpPage.homepagina.video

  const highlightHeadline = data.wpPage.homepagina.blok1Headline
  const highlightedPosts = data.wpPage.homepagina.blok1Posts

  const uspHeadline = data.wpPage.homepagina.blok2Headline
  const uspDesc = data.wpPage.homepagina.blok2Description
  const usps = data.wpPage.homepagina.usps
  const uspImage = getImage(data.wpPage.homepagina.blok2Afbeelding.localFile.childImageSharp.gatsbyImageData)

  const recentPostsHeadline = data.wpPage.homepagina.recentePostsHeadline
  const recentPosts = data.wpPage.homepagina.recentePosts

  const playIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" /></svg>

  return(
    <div>
      <div className="bg-gray h-3/6">
        <Container styles={`pt-24 pb-72 flex flex-col justify-center items-center relative`}>

          <h1 className="uppercase text-4xl text-white">{headline}</h1>

          <p className="text-white my-8 text-xl w-1/2 text-center">
            {desc}
          </p>

          <Button target={`/${ctaTarget}`}>{cta}</Button>
          <span className="my-8 text-white opacity-40">{ctaSub}</span>

          <div className="absolute -bottom-72 rounded-3xl">
            <div className="h-full w-full relative">
            <iframe className="rounded-3xl" src={video} width="1000" height="563" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              <div className="h-full w-full absolute top-0 left-0 flex flex-row justify-center items-center">
                <span className="border-2 border-white px-5 py-3 rounded-2xl text-white flex flex-row items-center bg-white bg-opacity-40 backdrop-blur-lg cursor-pointer"><span className="mr-2">{playIcon}</span> <span>Speel video af</span></span>
              </div>
            </div>
          </div>

        </Container>
      </div>
      <Container styles={`pb-40 pt-96`}>
        <h2 className="text-5xl font-bold text-center text-text">{highlightHeadline}</h2>
        <div className="w-3/4 mx-auto grid grid-cols-3 gap-8 my-12">
          {
            highlightedPosts.map((p)=>{
              
              const img = getImage(p.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData)

              return(
              <Link to={p.uri} key={p.id}>
                <div className="h-full">
                  <GatsbyImage image={img} className="rounded-xl object-cover h-3/4"></GatsbyImage>
                  <h3 className="mt-5 text-text font-bold">{p.title}</h3>
                </div>
              </Link>
            )})
          }
        </div>
      </Container>
      <div className="bg-lightGray">
          <div className="flex flex-col max-w-6xl gap-12 mx-auto lg:items-center lg:justify-between lg:flex-row py-28 relative">
                    <div className="lg:max-w-md xl:max-w-xl">
                        <h2 className="text-5xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl">
                            {uspHeadline}
                        </h2>
                        <p className="mt-4 text-base font-normal leading-7 text-text lg:text-lg lg:mt-6 lg:leading-8">
                            {uspDesc}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 w-1/3">
                        {
                          usps.map((u, i)=>{
                            console.log(i % 2)
                            return(
                            <div className={`${i % 2 !== 0 ? 'lg:pl-8 border-l border-lightBlue' : 'lg:pr-8'} ${i < 2 ? 'lg:pt-4 lg:pb-8' : 'lg:pt-8 lg:pb-4 border-t border-lightBlue'}  sm:pr-12 sm:pb-12 sm:pl-4`} key={i}>
                              <p className="text-5xl font-semibold tracking-tight text-text">
                                {u.usp.aantal}{u.usp.eenheid}
                              </p>
                              <h3 className="mt-3 text-sm font-semibold text-green">
                                {u.usp.label}
                              </h3>
                            </div>
                          )})
                        }
                    </div>
                    <GatsbyImage image={uspImage} className="absolute w-1/3 -bottom-12 right-0"></GatsbyImage>
            </div>
        </div>
        <Container styles={`py-24`}>
          <h2 className="text-center text-5xl font-bold text-text">{recentPostsHeadline}</h2>
          <div className="grid grid-cols-2 gap-8 my-24">
            {
              recentPosts.map((p)=>{

                const img = getImage(p.featuredImage.node.localFile.childImageSharp.gatsbyImageData)

                const months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni",
                "Juli", "Augustus", "September", "Oktober", "November", "December"
                ];

                const date = new Date(p.date)
                const dateString = date.getDay() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear()

                return( 
                <Link to={p.uri} key={p.id} className="border border-lightGray rounded-xl p-8 grid grid-cols-5 gap-8">
                  <GatsbyImage className="rounded-xl object-cover col-span-2 h-full" image={img}></GatsbyImage>
                  <div className="col-span-2">
                    <span className="text-green">{dateString}</span>
                    <h2 className="font-bold mt-3">{p.title}</h2>
                  </div>
                </Link>
                )
              })
            }
          </div>
        </Container>
    </div>
)}

export default IndexPage

export const postQuery = graphql`
query MyQuery {
    wpPage(slug: {eq: "home"}) {
      paginas {
        headline
        description
      }
      homepagina{
        cta
        ctatarget
        callToActionSubtekst
        video
        blok1Headline
        blok1Posts {
          ... on WpOplossing {
            id
            uri
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            title
          }
        }
        blok2Headline
        blok2Description
        usps {
          usp {
            aantal
            eenheid
            label
          }
        }
        blok2Afbeelding {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        recentePostsHeadline
        recentePosts {
          ... on WpProject {
            id
            uri
            title
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
  }
`