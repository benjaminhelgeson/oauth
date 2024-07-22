import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const NotFoundPage = () => {
    return (
      <>
        <Hero title="oAuth Stub" subtitle="An example of Vite, React, and oAuth"></Hero>
        <div className="text-base text-center py-5">
          <div className="text-6xl font-bold"><span className="text-red-600">404</span> - Not Found</div>
          <div className="min-h-64 content-center">
            <div className="m-3 text-xl">This page was not found.</div>
            <Link 
              to='/'
              className="font-bold py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700"
            > Go Back </Link>
          </div>
        </div>
      </>
    )
  }
  
  export default NotFoundPage