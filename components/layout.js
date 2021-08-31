import Head from "next/head"
import Link from "next/link"
// import styles from '../styles/Home.module.css'
import Header from "./header"

const Layout = (props) => {
  const { title, children } = props
  const siteTitle = "next site"

  return (
		<div>
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
			{/* <body> */}
				<header>
					<Header />
				</header>

				<main>
					<div>{children}</div>
				</main>

				<footer>
					&copy; {siteTitle}
				</footer>

			{/* </body> */}
		</div>
  )
}

export default Layout