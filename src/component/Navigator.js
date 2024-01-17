import "../css/Navigator.css"

export default function Navigator() {
	return (
		<div className="navigator">
			<h1>My Blog</h1>
			<nav>
				<a>Tech</a>
				<a>Book</a>
				<a>Life</a>
				<a>Portpolio</a>
				<button>Black / White</button>
			</nav>
		</div>
	);
}