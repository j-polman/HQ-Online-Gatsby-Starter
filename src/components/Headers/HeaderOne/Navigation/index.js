import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import './navigation.css'
const NavigationOne = ({menuState, deviceWidth, menuHandler}) => {

    const data = useStaticQuery(graphql`
        query MenuQuery {
            wpMenu(locations: {eq: PRIMARY}) {
                menuItems {
                  nodes {
                    label
                    url
                    childItems {
                      nodes {
                        label
                        url
                      }
                    }
                    parentDatabaseId
                  }
                }
              }
        }      
    `)

    const menu = data.wpMenu.menuItems.nodes.map((item)=>(
        item.parentDatabaseId === 0 ?
            <li className={`mx-5 lg:mt-0 mt-4 text-white lg:text-base text-lg py-5 relative item`}>
                <Link to={item.url} className={`py-5`} onClick={menuHandler} >
                    {item.label}
                    {item.childItems.nodes.length > 0 ? 
                        <FontAwesomeIcon icon={faChevronDown} className="ml-3" size={"sm"}></FontAwesomeIcon>
                    :
                        null
                    }
                </Link>
                
                {item.childItems.nodes.length > 0 ? 
                <>
                    <div className="absolute left-0 transition-all ease-in duration-150 top-full subItem bg-black">
                        <ul className="text-white ml-5 mr-12 py-5">
                            {item.childItems.nodes.map((subItem)=>(
                                <Link to={subItem.url}><li>{subItem.label}</li></Link>
                            ))}
                        </ul>
                    </div>
                </>
                :
                null
                }

            </li>

       :
       null
    ))
        
    return(
        <>
            <div className={`w-3/5 flex flex-row lg:justify-center justify-start transition-all duration-200 ease-in-out lg:overflow-visible overflow-hidden lg:relative fixed lg:bg-transparent top-0 lg:h-auto h-screen z-10  ${menuState && deviceWidth < 800 ? `left-0` : deviceWidth < 800 ? `-left-full` : ``}`}>
                <ul className="flex lg:flex-row flex-col w-full lg:items-start items-start lg:justify-center justify-start lg:pt-0 pt-28 lg:px-0 px-8">{menu}</ul>
            </div>
            {/* <div onClick={menuHandler} className={`h-screen w-screen bg-overlay z-0 transition-all ease-in duration-200 fixed ${menuState && deviceWidth < 800 ? `opacity-100` : `opacity-0`} `}></div> */}
        </>
    )
}

export default NavigationOne;