import React from "react"
import styles from "./index.css"

const SkillSet = () => (
  <div className={
    styles.skillSet
  }>
    <div className={ styles.skillList }>
      <div className={ styles.skillItem }>
        <h2>{ "Front-end" }</h2>
        <p>
        { "HTML" }
        </p>
        <progress max= { "100" } value={ "90" } className={ styles.progress, styles.html5 }>
          <div className={ styles.progressBar }>
            <span>{ "80%" }</span>
          </div>
        </progress>
        <p>
        { "CSS" }
        </p>
        <progress max= { "100" } value={ "60" } className={ styles.progress, styles.html5 }>
          <div className={ styles.progressBar }>
            <span>{ "80%" }</span>
          </div>
        </progress>
        <p>
        { "JavaScript" }
        </p>
        <progress max= { "100" } value={ "90" } className={ styles.progress, styles.html5 }>
          <div className={ styles.progressBar }>
            <span>{ "80%" }</span>
          </div>
        </progress>
      </div>
      <div className={ styles.skillItem }>
        <h2>{ "Back-end" }</h2>
        <p>
        { "Node.js" }
        </p>
        <progress max= { "100" } value={ "80" } className={ styles.progress, styles.html5 }>
          <div className={ styles.progressBar }>
            <span>{ "80%" }</span>
          </div>
        </progress>
        <p>
        { "Python" }
        </p>
        <progress max= { "100" } value={ "50" } className={ styles.progress, styles.html5 }>
          <div className={ styles.progressBar }>
            <span>{ "80%" }</span>
          </div>
        </progress>
        <p>
        { "Go" }
        </p>
        <progress max= { "100" } value={ "20" } className={ styles.progress, styles.html5 }>
          <div className={ styles.progressBar }>
            <span>{ "80%" }</span>
          </div>
        </progress>
      </div>
    </div>
  </div>
)

export default SkillSet
