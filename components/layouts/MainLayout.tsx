import Head from 'next/head';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';
import * as React from 'react';

type Props = {
  children?: React.ReactNode
};


export const MainLayout: React.FC<Props>  = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Jose Regalado</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>

        { children }

      </main>
    </div>
  )
}
