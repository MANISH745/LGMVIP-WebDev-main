const Loader = ({ show }) => {
    return (
        (show) ?
            <div className="loader"></div> : <h1>Lost city of Gold!</h1>
    )
}
export default Loader;