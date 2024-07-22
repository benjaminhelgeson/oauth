import ListLink from "../components/ListLink"
import Hero from "../components/Hero"

const AboutPage = () => {
    var gitHubRepo = "http://www.google.com";

    return (
      <div className="text-base text-center py-5">
        <Hero title="oAuth Stub" subtitle="An example of Vite, React, and oAuth"></Hero>
        <>This was done simply to get familiar with oAuth and it's implementation. It uses the following tech stack:</>
        <ul>
          <ListLink href="https://vitejs.dev" display="Vite.js" />
          <ListLink href="https://expressjs.com" display="Express.js" />
          <ListLink href="https://react.dev" display="React" />
          <ListLink href="https://aws.amazon.com" display="AWS" />
          <ListLink href="https://auth0.com" display="auth0" />
        </ul>

        <div className="p-1">The code for this project can be found at <a href={gitHubRepo} className="font-bold">{ gitHubRepo }</a></div>
      </div>
    )
  }
  
  export default AboutPage