import * as React from "react"
import Header from "../Headers/HeaderOne"
import Footer from "../Footers/FooterOne"
import { AnimatePresence } from "framer-motion"

const Layout = ({ children }) => {

  return (
      <>
      <Header></Header>
        <AnimatePresence exitBeforeEnter>
            <main>{children}</main>
        </AnimatePresence>
      <Footer></Footer>
      </>
  )
}

export default Layout
