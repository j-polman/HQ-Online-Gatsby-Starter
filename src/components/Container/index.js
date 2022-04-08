import React from "react";

const Container = ({children, styles}) => {

    return(
        <div className={`container mx-auto 2xl:max-w-screen-xl ${styles}`}>
            {children}
        </div>
    )
}

export default Container;