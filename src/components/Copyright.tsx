const Copyright = () => {
    var yrDisp = new Date().getFullYear();

    return (
        <div className="text-center w-full h-8 bg-indigo-100 align-middle">Benajmin Helgeson &copy; {yrDisp}</div>
    );
}

export default Copyright