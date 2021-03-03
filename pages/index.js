import Head from 'next/head'
import Footer from '../src/Footer/Footer'
import Header from '../src/Header/Header'
import Banner from '../src/Widgets/banner'
import Property from '../src/Widgets/property'
import Landmark from '../src/Widgets/Landmark'
import Layout from '../src/Widgets/Layout'

import Location from '../src/Widgets/Location'
import Price from '../src/Widgets/Price'
import Gallery from '../src/Widgets/Gallery'
import Video from '../src/Widgets/Video'
import Brand from '../src/Widgets/Brand'
import From from '../src/Widgets/from'
import Svgcol from '../src/Widgets/Svgcol'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sawasdee JLG Galleria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <Property />

      <Landmark />

      <Svgcol /> 

      <Layout />

      <Location />

      <Price />

      <Gallery />

      <Video />

      <Brand />

      <From />

      <Footer />



      <style jsx global>{`
      .t-center{
        text-align: center;
      }
      body {
        font-family: "Muli",Helvetica,Arial,sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: #575a7b;
        background: #fff;
        overflow-x: hidden;
    }
      .w-50{
        width :50%;
      }
        .container {
          width: 1140px;
          margin: 0 auto;
        }
        .d-flex{
          display: flex;
      }
      li{
          list-style: none;
      }
      .align-item{
        align-items: center;
      }
      .p-15{
        padding: 15px;
      }
      .justify-content-space{
        justify-content: space-between;
      }
      *{
        margin: 0px;
        padding: 0px;
      }
      `}</style>
    </>
  )
}
