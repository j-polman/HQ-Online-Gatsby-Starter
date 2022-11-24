import React, { useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const LogoOne = ({menuHandler}) => {

    const data = useStaticQuery(graphql`
    query LogoQuery{
        wp {
            siteLogo {
                localFile {
                    childImageSharp {
                        gatsbyImageData(width: 200, quality: 50, formats: NO_CHANGE)
                    }
                }
            }
        }
    }
    `)

    const logo = getImage(data.wp.siteLogo.localFile.childImageSharp)

    return(
        <div className="lg:w-1/5 w-full flex flex-row justify-between items-center logo__container z-20 lg:p-0 p-5 lg:bg-transparent bg-white">
            <Link to="/"><GatsbyImage image={logo}></GatsbyImage></Link>
            <FontAwesomeIcon className="mr-2 lg:hidden" icon={faBars} size={"lg"} onClick={menuHandler}></FontAwesomeIcon>
        </div>
    )
}

export default LogoOne;