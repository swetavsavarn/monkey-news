import NewsItems from "./Newsitems"
import axios from "axios"
import { useState, useEffect } from 'react'
import Loading from "./Loading";
import PageSize from "./PageSize";

function News(props) {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1)
    const [disabledPButton, setDisabledPButton] = useState(false)
    const [disabledNButton, setDisabledNButton] = useState(false)
    const [totatlArticles, setTotalArticles] = useState(0)
    const [loading, setLoading] = useState(false)
    const [resultSize, setResultSize] = useState(10)



    { loading && <Loading></Loading> }
    useEffect(() => {
        async function fetchData() {
            setLoading(true)

            const res = await axios.get(
                `https://newsapi.org/v2/${props.category}?country=${props.country}&apiKey=bda26b48238a4a969772d21a00c908bd&page=${page}&pagesize=${resultSize}`
            );
            // setLoading(false)

            setTotalArticles(res.data.totalResults) 
            setNews(res.data.articles);
            // totalArticles=
        }
        fetchData()
    }, [page, resultSize,props.category,props.country]);



    return (
        <>
            <div className="text-end">
                <PageSize onChange={ResultSize}></PageSize>
            </div>
        <div className="container my-3 bg-dark">
            <h2 style={{ textAlign: "center" }}>Top Headlines</h2>
                {loading && <Loading />}
            <div className="row my-3">
                {news.map((newsItem, index) => (
                    <div key={index} className="col-md-4">
                        <NewsItems
                            title={newsItem.title}
                            content={" "}
                            imageUrl={
                                newsItem.urlToImage ??
                                "https://static.toiimg.com/thumb/msid-99913129,width-1070,height-580,imgsize-8578,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
                            }
                            url={newsItem.url}
                        />
                    </div>
                ))}
            </div>
            <div className="container d-flex justify-content-between"> {/* Add the "col-md-12" class to make the button take the full width of the row */}
                <button type="button" className="btn btn-light" onClick={previousButton} disabled={disabledPButton}>
                    Previous
                </button>
                <button type="button" className="btn btn-light" onClick={nextButton} disabled={disabledNButton} >
                    Next
                </button>


            </div>
        </div>
        </>
    )
    function previousButton() {
        if (page === 1) {
            setDisabledPButton(true)
            setDisabledNButton(false)
        }
        else {
            let tempPage = page - 1
            setPage(tempPage)
            setDisabledNButton(false)
        }
    }
    function nextButton() {
        let tempSum = Math.ceil(totatlArticles / resultSize)
        console.log("tempsum", tempSum, page, totatlArticles)
        if (tempSum === page && tempSum !== 1) {
            setDisabledPButton(false)
            setDisabledNButton(true)
        }
        else if (tempSum === 1) {
            setDisabledPButton(true)
            setDisabledNButton(true)
        }
        else {
            let tempPage = page + 1
            setPage(tempPage)
            setDisabledPButton(false)
        }
        console.log(page)
    }
    function ResultSize(pageSize) {
        setResultSize(pageSize)

        let tempSum = Math.ceil(totatlArticles / resultSize)
        if (tempSum <= page) {
            setPage(1)
        }

    }

}
News.defaultProps={
    category:'top-headlines',
    country:'in'
}


export default News;
