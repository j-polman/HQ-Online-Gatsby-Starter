import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import Container from "../../Container"
import LogoOne from "./Logo";
import Navigation from "./Navigation";
const HeaderOne = () => {

    const [menuState, setMenuState] = useState(false)
    const [width, setWidth] = useState()

    useEffect(()=>{
        setWidth(window.innerWidth)
    })
    const menuClickHandler = () => {
        setMenuState((prevState)=>(prevState ? false : true))
    }
    
    return(
        <div className="w-full lg:py-0 p-0 bg-gray sticky z-20">
            <Container styles={`flex lg:flex-row flex-col justify-between lg:items-center`}>
                <LogoOne menuHandler={menuClickHandler}></LogoOne>
                <Navigation menuState={menuState} deviceWidth={width} menuHandler={menuClickHandler}></Navigation>
                <div className="flex flex-row justify-end w-1/5"><Link to="/contact" className="border-2 border-white text-white px-5 py-3 rounded-full">Neem contact op</Link></div>
            </Container>        
        </div>
    )
}

export default HeaderOne;