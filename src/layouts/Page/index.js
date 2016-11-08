import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import { BodyContainer, joinUri } from "phenomic"

import styles from "./index.css"

const Page = (
  {
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children,
  },
  {
    metadata: { pkg },
  }
) => {
  invariant(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ pkg.twitter }` },
    { name: "twitter:description", content: head.description },
    { name: "theme-color", content: "#ffffff"},
  ]

  const link = [
    { rel: "apple-touch-icon", size: "180x180", href: "/assets/favicon/apple-icon.png" },
    { rel: "icon", size: "32x32", type: "image/png", href: "/assets/favicon/favicon-32x32.png" },
    { rel: "icon", size: "16x16", type: "image/png", href: "/assets/favicon/favicon-16x16.png" },
    { rel: "manifest", href: "/assets/favicon/manifest.json" },
    { rel: "mask-icon", href: "/assets/favicon/safari-pinned-tab.svg", color: "#5bbad5" },
  ]

  return (
    <div className={ styles.page }>
      <Helmet
        title={ metaTitle }
        meta={ meta }
        link={ link }
      />
      {
        head.title &&
        <h1 className={ styles.heading }>{ head.title }</h1>
      }
      { header }
      <BodyContainer>{ body }</BodyContainer>
      { children }
      { footer }
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  __filename: PropTypes.string.isRequired,
  __url: PropTypes.string.isRequired,
  head: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
