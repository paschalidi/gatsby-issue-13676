import React from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <React.StrictMode>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div>
        <Link to="/page-2/">Navigate with `Link`</Link>
      </div>
      <div>
        <button onClick={() => navigate(`/page-2/`)}>
          Navigate with `@reach/router`
        </button>
      </div>
    </Layout>
  </React.StrictMode>
)

export default IndexPage
