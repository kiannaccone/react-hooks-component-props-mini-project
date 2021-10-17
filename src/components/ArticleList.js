import Article from "./Article";

function ArticleList ({posts}) {

// function renderArticles () {
//     return
// }

const renderArticles = posts.map(({id, title, date, preview, minutes}) => (
<Article key={id} title={title} date= {date} preview= {preview} minutes= {minutes}/> 
))


    return(
        <main>{renderArticles}</main>
    )
}

export default ArticleList;