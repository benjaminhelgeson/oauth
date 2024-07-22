import ListLink from "../components/ListLink"
import Hero from "../components/Hero"

const AboutPage = () => {
    var gitHubRepo = "https://github.com/benjaminhelgeson/oauth";

    return (
      <div className="text-base text-center bg-white pb-5">
        <Hero title="oAuth Stub" subtitle="An example of Vite, React, and oAuth"></Hero>
        <>This was done simply to get familiar with oAuth and it's implementation in Vite.js. It uses the following technologies:</>
        <ul>
          <ListLink href="https://vitejs.dev" display="Vite.js" />
          <ListLink href="https://react.dev" display="React" />
          <ListLink href="https://auth0.com" display="auth0" />
          <ListLink href="https://tailwindcss.com/" display="Tailwind" />
          <ListLink href="https://aws.amazon.com/amplify/" display="AWS Amplify" />
        </ul>

        <div className="p-1">The code for this project can be found at <a href={gitHubRepo} 
          className="font-bold text-blue-500" target="_blank" rel="noopener noreferrer">{ gitHubRepo }</a></div>
      </div>
    )
  }
  
  export default AboutPage