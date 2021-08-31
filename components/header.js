import Link from "next/link"

const Header = (props) => {
	const siteTitle = "python and gamble"
	return ( 
		<div className="header-line">
			<svg width="64" height="64" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" version="1.1" >
				<g className="icon-rect">
					<rect x="16" y="16" width="96" height="96" stroke="none"/>
					<g className="icon-glass">
						<path d="M 40.36 81.87 C 36.51 95.33 74.96 106.35 78.82 92.89 L 84.07 52.79 L 56.2 44.8 L 40.36 81.87" />
					</g>
					<g className="icon-liquid">
						<path d="M 44.76 81.05 C 43.11 86.82 73.87 95.64 75.52 89.87 L 80.09 55.81 L 55.78 55.81 L 44.76 81.05" />
				</g>
				</g>
			</svg>
			<h1>
				<Link href="/">
					<a>{siteTitle}</a>
				</Link>
			</h1>
		</div>
	)
}

export default Header