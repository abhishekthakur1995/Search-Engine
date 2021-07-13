import ResultItem from "./ResultItem"

const ResultList = ({ results }) => {
    return (
        <>
            {
                results.map((result, index) => (
                    <ResultItem key={index} result={result} />
                ))
            }
        </>
    )
}

export default ResultList
