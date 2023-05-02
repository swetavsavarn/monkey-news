import axios from "axios"
import { useState, useEffect } from 'react'
function NewsItems(props) {
    const [news, setNews] = useState(null)
    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=fc50408656014dd8ac252dd5a7d1346b').then((res) => setNews(res.data.articles))
    }, [])
    let { title, content, imageUrl } = props
    return (
        <div class="card" style={{ width: "18rem" }}>
            <img src={imageUrl} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{content}</p>

            </div>
        </div>
    )
}
export default NewsItems