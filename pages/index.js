// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Layout from "../components/layout"
import { getSortedPostsData } from "../lib/posts"
import Link from "next/link"
import Date from "../components/date"

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <div>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <div>
                <Date dateString={date} />
              </div>
            </li>
          ))}
        </ul>
      </div>

    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
