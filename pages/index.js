import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout";
import utilStyles from '../styles/utils.module.css';

export default function Home() {
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
    </Layout>
  )
}
