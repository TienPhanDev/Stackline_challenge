import Head from 'next/head'
import Footer from '../components/Footer'
import CardLineChart from "../components/CardLineChart.js";
import Example from '../components/Header.js';
import Container from '../components/Container';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container/>
      </main>
    </div>
  )
}
