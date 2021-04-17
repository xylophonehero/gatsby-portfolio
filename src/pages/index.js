import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Name from "../components/Name"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout location={"Home"}>
    <Seo title="Home" />
    <Name />
  </Layout>
)

export default IndexPage
