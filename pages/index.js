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
			{allPostsData.map(({ id, date, title }) => (
				<h3 key={id} className="c-flex">
					<div className="date">
						<Date dateString={date} />
					</div>
					<div className="title">
						<Link href={`/posts/${id}`}>
							<a>{title}</a>
						</Link>
					</div>
				</h3>
			))}
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
