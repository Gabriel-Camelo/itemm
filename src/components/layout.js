import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import Head from "./head"
import "../styles.css"
import { Box } from "./ui"

const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <Box background="muted">
        <Header />
      </Box>
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
