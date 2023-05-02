import NewsItems from "./Newsitems"
function News() {
    return (
        <>
            <div className="container my-3">
                <h2 style={{ "text-align": "center" }}>Top Headlines</h2>
                <div className="row my-3">
                    <div className="col-md-4 ">
                        <NewsItems title="Gordon Lightfoot, Canadian folk musician, dies at 84 - The Washington Post" content="Lightfoot, known for his poetic lyrics and reserved disposition, died in Toronto, his publicist confirmed." imageUrl="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EMVQHHHIR4I63BU6TBW5K4J3ZA.jpg&w=1440" />
                    </div>
                    <div className="col-md-4">
                        <NewsItems title="Lawrence: Supreme Court 'is in crisis' over lack of ethics rules - MSNBC" content="MSNBC's Lawrence O'Donnell says a recent spate of exposés around alleged ethical misconduct by Supreme Court justices and their spouses has thrusted the Cour..." imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/160F4/production/_129565309_gettyimages-1244101892-594x594.jpg" />
                    </div>
                    <div className="col-md-4">
                        <NewsItems title="Serena Williams: Tennis legend reveals second pregnancy at Met Gala" content="Speaking to reporters alongside her husband, Williams says there are three of us on the red carpet." imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/D8A0/production/_129565455_gettyimages-1486930424.jpg" />
                    </div>
                </div>

            </div>

        </>
    )
}
export default News