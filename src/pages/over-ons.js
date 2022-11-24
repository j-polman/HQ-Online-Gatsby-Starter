import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Container from "../components/Container";
import Seo from "../components/SEO";

const OverOns = ({data}) => {

    const headline = data.wpPage.paginas?.headline
    const desc = data.wpPage.paginas?.description
    const content = data.wpPage.content

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
            <Container styles={`w-1/2 py-24`}>
                <p dangerouslySetInnerHTML={{__html: content}}></p>
            </Container>
        </div>
    )
}

export default OverOns;

export const postQuery = graphql`
    query MyQuery {
        wpPage(slug: {eq: "over-ons"}) {
        paginas {
            headline
            description
        }
        content
    }
    }
`