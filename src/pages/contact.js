import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Container from "../components/Container";
import Seo from "../components/SEO";

const Contact = ({data}) => {

    const headline = data.wpPage.paginas?.headline
    const desc = data.wpPage.paginas?.description
    const img = getImage(data.wpPage.contact?.afbeelding.localFile.childImageSharp.gatsbyImageData)
    const textArea = data.wpPage.contact?.paragraaf
    const openingHours = data.wpPage.contact?.openingstijden
    const address = data.wpPage.contact?.adres
    const email = data.wpPage.contact?.emailadres
    const phone = data.wpPage.contact?.telefoonnummer

    const clockIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    const mapIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
    const emailIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>
    const phoneIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
  

    return(
        <div>
            <Seo title={data.wpPage.title} />
            <div className="bg-gray h-3/6">
                <Container styles={`py-24 flex flex-col justify-center items-center relative`}>

                <h1 className="uppercase text-4xl text-white">{headline}</h1>

                <p className="text-white my-8 text-xl w-1/2 text-center">
                    {desc}
                </p>

                </Container>
            </div>
            <Container styles={`py-24 grid grid-cols-2 gap-32`}>
                <div>
                    <GatsbyImage className="rounded-2xl" image={img}></GatsbyImage>
                </div>
                <div>
                    <p className="text-gray">{textArea}</p>
                    <div className="grid grid-cols-2 gap-16 mt-16">
                        <div className="flex">
                            <span className="text-green mr-3">{clockIcon}</span>
                            <div>
                                <span className="text-lg font-medium flex items-start">Openingstijden</span>
                                <p dangerouslySetInnerHTML={{__html: openingHours}} className="my-2 text-gray"></p>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="text-green mr-3">{mapIcon}</span>
                            <div>
                                <span className="text-lg font-medium flex items-start">Ons adres</span>
                                <p dangerouslySetInnerHTML={{__html: address}} className="my-2 text-gray"></p>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="text-green mr-3">{emailIcon}</span>
                            <div>
                                <span className="text-lg font-medium flex items-start">Mail ons op</span>
                                <p className="my-2 text-gray"><a href={`mailto:${email}`}>{email}</a></p>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="text-green mr-3">{phoneIcon}</span>
                            <div>
                                <span className="text-lg font-medium flex items-start">Bel ons op</span>
                                <p className="my-2 text-gray"><a href={`tel:${phone}`}>{phone}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact;

export const postQuery = graphql`
query MyQuery {
    wpPage(slug: {eq: "contact"}) {
      title
      paginas {
        headline
        description
      }
      contact {
          adres
          emailadres
          openingstijden
          paragraaf
          telefoonnummer
          afbeelding {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
  }
}
`