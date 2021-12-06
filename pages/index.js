import Head from 'next/head';
import Header from '../components/Header/header';
import Hero from '../components/Hero/Hero';
import Line from '../components/Line';
import Section2 from '../components/section2/Section2';
import Section3 from '../components/section3/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6/Section6';
import Section7 from '../components/section7/Section7';

export default function Home() {
  return (
    <div className="flex flex-col bg-main items-center justify-start min-h-screen py-2">
      <Head>
        <title>Mistfits copy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Section2 />
      <Section3 />
      <Line />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  )
}


