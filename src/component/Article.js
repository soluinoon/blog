import "../css/Article.css";

export default function Article() {
	return (
		<div className="article">
			<ArticleInfo />
			<h1 className="title">Title</h1>
			<div className="contents">
				contents
			</div>
		</div>
	);
}

function ArticleInfo() {
	return (
		<div className="articleInfo">
			<a className="publishDate">publishDate</a>
			<a>Category</a>
		</div>
	);
}