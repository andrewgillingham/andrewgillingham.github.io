import React from "react"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Main = ({ children }) => <main className={`main`}>{children}</main>
const Section = ({ id, children }) => (
  <section id={id} className={`section`}>
    {children}
  </section>
)
const SectionRow = ({ children }) => (
  <div className={`section__row`}>{children}</div>
)

export default function Home() {
  return (
    <Main>
      <Section id={`intro`}>
        <SectionRow>
          <h1>
            Hi, I'm{" "}
            <span style={{ fontWeight: "bold", color: "var(--blue)" }}>
              Andrew Gillingham
            </span>
          </h1>
          <h2 style={{ fontWeight: "bold" }}>Web Developer</h2>
          <h3>JavaScript (ES6), Angular, Node.js, PHP</h3>
        </SectionRow>
        <SectionRow>
          <a
            className={"socialLink socialLink--github"}
            target="blank"
            href="https://github.com/andrewgillingham/"
          >
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </a>
          <a
            className={"socialLink socialLink--twitter"}
            target="blank"
            href="https://twitter.com/adgillingham"
          >
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </a>
        </SectionRow>
      </Section>
    </Main>
  )
}
