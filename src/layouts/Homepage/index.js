import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import PagesList from "../../components/PagesList"
import ProfileImage from "../../components/ProfileImage"
import SkillSet from "../../components/SkillSet"

const numberOfLatestPosts = 6

const Homepage = (props, { collection }) => {
  const latestPosts = enhanceCollection(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  })
  .slice(0, numberOfLatestPosts)

  return (
    <Page { ...props }>
      <ProfileImage />
      <h2>{ "Latest Posts" }</h2>
      <PagesList pages={ latestPosts } />
      <SkillSet />
    </Page>
  )
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Homepage
