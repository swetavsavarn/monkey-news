import NewsItems from "./Newsitems"
import axios from "axios"
import { useState, useEffect } from 'react'
import Loading from "./Loading";
import InfiniteScroll from 'react-infinite-scroll-component'

function News(props) {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1)
    const [resultSize, setResultSize] = useState(0)




    useEffect(() => {
        async function fetchData() {

            const res = await axios.get(
                `https://newsapi.org/v2/${props.category}?country=${props.country}&apiKey=fc50408656014dd8ac252dd5a7d1346b&page=${page}`
            );
            setResultSize(res.data.articles.length)
            setNews(prevNews => [...prevNews ?? [], ...res.data.articles]);

        }
        fetchData()
    }, [page, props.category,props.country]);
  
    useEffect(() => {
        setNews([])
        setPage(1)
    }, [props.country, props.category])

    async function fetchMoreData() {
        setPage(page + 1)
    }
    console.log(page)

    return (
        <>
        <div className="container my-3 bg-dark">
                <InfiniteScroll
                    dataLength={resultSize}
                    next={fetchMoreData}
                    hasMore={ true  }
                    loader={<Loading></Loading>}
                />

            <h2 style={{ textAlign: "center" }}>Top Headlines</h2>
                {/* {loading && <Loading />} */}
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
        </div>
        </>
    )


}
News.defaultProps={
    category:'top-headlines',
    country:'in'
}


export default News;
