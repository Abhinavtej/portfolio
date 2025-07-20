"use client";
import Head from 'next/head';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Education from '@/app/components/Education';
import Skills from '@/app/components/Skills';
import Projects from '@/app/components/Projects';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhinavtej Reddy | Founder & CEO, Unifesto</title>
        <meta 
          name="description" 
          content="Abhinavtej Reddy – Founder & CEO of Unifesto, building student-first event tech. Explore my journey, projects, and startup experience." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Abhinavtej Reddy" />
        <meta 
          name="keywords" 
          content="Abhinavtej Reddy, Unifesto, startup founder, event tech, student events, developer portfolio, Next.js, React" 
        />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Abhinavtej Reddy | Founder & CEO, Unifesto" />
        <meta 
          property="og:description" 
          content="Founder & CEO of Unifesto – a platform built for managing student events. Check out the projects and vision driving the future of campus experiences." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://founder.unifesto.app" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abhinavtej Reddy | Founder & CEO, Unifesto" />
        <meta 
          name="twitter:description" 
          content="Building Unifesto – the all-in-one student event platform. See my work, journey, and projects." 
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects showAll={false} />
          <Education />
        </main>
        <Footer />
      </div>
    </>
  );
}