import Head from 'next/head'
import Container from '../components/Container';

export default function Home() {
  return (
    <div>
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