function NewsItems(props) {
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