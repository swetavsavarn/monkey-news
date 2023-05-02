function NewsItems(props) {
    let { title, content, imageUrl, url } = props
    console.log(url)
    return (
        <div class="card" style={{ width: "18rem" }}>
            <img src={imageUrl} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{content}</p>
                <a href={url} target="_blank" class="btn btn-primary btn-sm">Read more</a>


            </div>
        </div>
    )
}
export default NewsItems