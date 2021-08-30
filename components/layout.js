import Head from "next/head"
import Link from "next/link"
// import styles from '../styles/Home.module.css'

const Layout = (props) => {
  const { title, children } = props
  const siteTitle = "next site"

  return (
    <div className="page">
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="site-title">
          <Link href="/">
            <a>{siteTitle}</a>
          </Link>
        </h1>
      </header>

      <main>
        {title ? <h1 className="page-title">{title}</h1> : ``}
        <div className="page-main">
          {children}
        </div>
      </main>

      <footer>
        &copy; {siteTitle}
      </footer>

      {/* <style jsx>{`
        （ここに CSS を記述します）
      `}</style>

      <style jsx global>{`
        （ここに CSS を記述します）
      `}</style> */}
    </div>
  )
}

export default Layout