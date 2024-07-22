const Error = ({ errorMsg = 'There was an error' }) => {
    var error = false;

    if (error) {
        return (
            <div className="text-sm bg-red-100 rounded-lg shadow-md h-8 align-middle">{ errorMsg }</div>
        );
    }
  }
  
  export default Error