import React from 'react'

// Install and import all needed fonts and font-styles here from https://fontsource.org/
// Run npm i @fontsource/[DESIRED_FONT]
// import "@fontsource/[DESIRED_FONT]"; This defaults to 400 font-weight
// For other font-weights import "@fontsource/[DESIRED_FONT]/[FW_NUMBER].css";

import "@fontsource/poppins"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"

import './src/style/style.css'
import Layout from './src/components/Layout'


export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
  }
