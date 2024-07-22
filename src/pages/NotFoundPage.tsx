import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
      <>
        <h1>404 Not Found</h1>
        <h1>This page was not found.</h1>
        <Link 
          to='/'
          className="text-white bg-red-700 hover:bg-red-900 rounded px-3 py-2 mt-4"
        > Go Back </Link>
      </>
    )
  }
  
  export default NotFoundPage