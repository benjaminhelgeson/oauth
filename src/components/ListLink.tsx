import { FaLink } from "react-icons/fa";

const ListLink = ({ href = 'http://www.google.com', display = 'Link Display' }) => {
    return (
        <li className="flex justify-center">
            <div className="flex-col p-2 content-center">
            <FaLink />
            </div>
            <div className="flex-col p-2 content-center">
              <a href={href} target="_blank" rel="noopener noreferrer">{display}</a>
            </div>
          </li>
    );
}

export default ListLink