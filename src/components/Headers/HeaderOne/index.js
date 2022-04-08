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
        <div className="w-full lg:p-8 p-0 bg-white sticky z-20">
            <Container styles={`flex lg:flex-row flex-col justify-between lg:items-center`}>
                <LogoOne menuHandler={menuClickHandler}></LogoOne>
                <Navigation menuState={menuState} deviceWidth={width} menuHandler={menuClickHandler}></Navigation>
            </Container>        
        </div>
    )
}

export default HeaderOne;