import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [hello, setHello] = useState('Hello')
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js!
        </h1>

        <button className={styles.description}
          onClick={async () => {
            var res = await fetch('/api/hello',
              {
                method: "GET"
              })
            var response = await res.json();
            console.log(response)
            setHello(response.name)
          }}>
          Call Backend
        </button>
        <button className={styles.description}
          onClick={ () => {
            setHello('Hello')
          }}>
          Reset
        </button>
        <div>{hello}</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
