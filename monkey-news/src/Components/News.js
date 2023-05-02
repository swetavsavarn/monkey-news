import NewsItems from "./Newsitems"
import axios from "axios"
import { useState, useEffect } from 'react'

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(
                "https://newsapi.org/v2/top-headlines?country=in&apiKey=fc50408656014dd8ac252dd5a7d1346b"
            );
            console.log(res)
            setNews(res.data.articles);
        }
        fetchData()
    }, []);



    return (
            <div className="container my-3">
            <h2 style={{ textAlign: "center" }}>Top Headlines</h2>
                <div className="row my-3">
                {news.map((newsItem, index) => (
                    <div key={index} className="col-md-4">
                        <NewsItems
                            title={newsItem.title}
                            content={newsItem.content?.split('[')[0]}
                            imageUrl={newsItem.urlToImage ?? "https://static.toiimg.com/thumb/msid-99913129,width-1070,height-580,imgsize-8578,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"}
                            url={newsItem.url}
                        />
                    </div>
                ))}
            </div>
        </div>

    );
}

export default News;
