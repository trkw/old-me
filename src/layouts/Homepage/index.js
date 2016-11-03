import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import TopPage from "../TopPage"
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
    <TopPage { ...props }>
      <ProfileImage />
      <SkillSet />
      <h2>{ "Latest Posts" }</h2>
      <PagesList pages={ latestPosts } />
    </TopPage>
  )
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Homepage
