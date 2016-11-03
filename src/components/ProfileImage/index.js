import React from "react"
import styles from "./index.css"

const ProfileImage = () => (
  <div className={ styles.imagewrap }>
    <img
      src={ "https://avatars1.githubusercontent.com/u/2557813" }
      alt={ "Naohiro Terakawa" }
    />
  </div>
)

export default ProfileImage
