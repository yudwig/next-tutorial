import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout";
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from "../lib/posts";
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Nullam hendrerit faucibus arcu nec viverra. Mauris scelerisque arcu eget neque tincidunt, id vestibulum odio convallis. </p>
        <p>
          Vestibulum quis malesuada enim. Vestibulum sollicitudin dignissim magna, vel euismod tellus auctor eu. Integer tellus elit, mollis in nulla eget, placerat congue ex. Nullam dignissim arcu magna, tincidunt fermentum nisl pulvinar interdum. In posuere, nulla et cursus auctor, mauris lorem sagittis erat, nec convallis nibh tortor at tellus.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
         ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}