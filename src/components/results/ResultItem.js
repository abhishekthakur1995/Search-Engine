const ResultItem = ({result}) => {
    return (
        <>
            <div className="search-result">
                <h3><a href="#">{result.dbName}</a></h3>
                <p>
                    {result.path}
                </p>
            </div>
            <div className="hr-line-dashed"></div>
        </>
    )
}

export default ResultItem
