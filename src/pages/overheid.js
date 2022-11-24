import { graphql } from "gatsby";
import React from "react";
import Container from "../components/Container";
import Seo from "../components/SEO";

const Overheid = ({ data }) => {

    const headline = data?.wpPage.paginas?.headline
    const desc = data?.wpPage.paginas?.description
    const content = data?.wpPage.content

    console.log(data)

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
            <Container styles={`py-12 w-1/2`}>
                <p dangerouslySetInnerHTML={{__html: content}}></p>
            </Container>
        </div>
        
    )
}

export default Overheid;

export const postQuery = graphql`
    query MyQuery {
        wpPage(slug: {eq: "overheid"}) {
        paginas {
            headline
            description
        }
        content
    }
    }
`