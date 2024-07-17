import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import d from "../assets/d.png";
import e from "../assets/e.png";

import pep from "../assets/pep.png";
import ic1 from "../assets/ic1.png";
import ic2 from "../assets/ic2.png";
import ic3 from "../assets/ic3.png";
import pes from "../assets/pes.jpg";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Navbar />
      <section className='py-40 body'>
        <h1 className='text-center text-white text-5xl font-semibold mb-3'>About Us</h1>
        <p className='text-gray-300 text-lg text-center w-11/12 md:w-8/12 lg:w-7/12 mx-auto'>
          GenVid is at the forefront of AI-powered video generation, transforming how content is created and consumed. We leverage cutting-edge technology to bring innovative video solutions that cater to diverse needs, ensuring high-quality and engaging content every time.
        </p>
      </section>

      <section>
        <main className='flex flex-col lg:flex-row items-center justify-between px-10 md:px-20 py-20'>
          <div className="w-full lg:w-6/12 mb-10 lg:mb-0">
            <h1 className='text-3xl font-bold mb-5'>About GenVid</h1>
            <p className='text-lg text-gray-500 mb-10'>
              At GenVid, we specialize in generating dynamic and immersive video content using advanced AI technologies. Our platform allows businesses and creators to produce high-quality videos quickly and efficiently, saving time and resources. Our mission is to revolutionize the video creation process and provide tools that make video production accessible to everyone.
            </p>
            <Link to="/login" className='text-white bg-indigo-600 px-6 py-2 rounded'>Get Started</Link>
          </div>
          <div className="w-full lg:w-5/12">
            <img src={pep} alt="GenVid Preview" className="w-full" />
          </div>
        </main>
      </section>

      <section>
        <main className='flex flex-col lg:flex-row items-center justify-between px-10 md:px-20 py-20'>
          <div className="w-full lg:w-5/12 mb-10 lg:mb-0">
            <img src={pes} alt="Life at GenVid" className="w-full" />
          </div>
          <div className="w-full lg:w-6/12">
            <h1 className='text-3xl font-bold mb-5'>Life at GenVid</h1>
            <p className='text-lg text-gray-500 mb-10'>
              Life at GenVid is vibrant and collaborative. We foster a culture of innovation and creativity, encouraging our team to push the boundaries of what's possible with AI and video technology. Our diverse and talented team is dedicated to creating impactful video content that drives engagement and delivers results.
            </p>
            <Link to="/login" className='text-white bg-indigo-600 px-6 py-2 rounded'>Join Us</Link>
          </div>
        </main>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-between px-10 md:px-32 py-20 bg-violet-50">
          <div className="flex justify-center flex-col items-center mb-10 md:mb-0">
            <span className='text-4xl font-bold text-indigo-950'>200+</span>
            <span className='font-semibold text-indigo-950'>Projects</span>
          </div>
          <div className="flex justify-center flex-col items-center mb-10 md:mb-0">
            <span className='text-4xl font-bold text-indigo-950'>200M</span>
            <span className='font-semibold text-indigo-950'>Project Views</span>
          </div>
          <div className="flex justify-center flex-col items-center mb-10 md:mb-0">
            <span className='text-4xl font-bold text-indigo-950'>500K</span>
            <span className='font-semibold text-indigo-950'>Total Hours</span>
          </div>
          <div className="flex justify-center flex-col items-center">
            <span className='text-4xl font-bold text-indigo-950'>100</span>
            <span className='font-semibold text-indigo-950'>Clients</span>
          </div>
        </div>
      </section>
      <hr />
      <section className='min-h-screen'>
  <main className='py-16'>
    <h1 className='text-center font-semibold text-4xl text-violet-950'>Latest Integrations</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-20 px-5 md:px-24">
      <div className="p-10 rounded-3xl border shadow-lg">
        <div className="flex items-center justify-between mb-5">
          <img className='w-12' src={ic1} alt="Automation Icon" />
          <h1 className='text-indigo-950 font-medium'>Connected</h1>
        </div>
        <div>
          <h1 className='text-2xl mb-2 font-semibold text-indigo-950'>Automation</h1>
          <p className='mb-3'>Search Engine Integration</p>
        </div>
        <p className='text-gray-700'>Our automation tools seamlessly integrate with leading search engines, enhancing your search capabilities and optimizing your workflow for better efficiency.</p>
      </div>
      <div className="p-10 rounded-3xl border shadow-lg">
        <div className="flex items-center justify-between mb-5">
          <img className='w-12' src={ic2} alt="Orbitc Icon" />
          <h1 className='text-indigo-950 font-medium'>Connected</h1>
        </div>
        <div>
          <h1 className='text-2xl mb-2 font-semibold text-indigo-950'>Orbitc</h1>
          <p className='mb-3'>Communication Enhancement</p>
        </div>
        <p className='text-gray-700'>Orbitc integration ensures smooth and efficient communication across all your platforms, providing robust tools for collaboration and information sharing.</p>
      </div>
      <div className="p-10 rounded-3xl border shadow-lg">
        <div className="flex items-center justify-between mb-5">
          <img className='w-12' src={ic3} alt="Volume Icon" />
          <h1 className='text-indigo-950 font-medium'>Connected</h1>
        </div>
        <div>
          <h1 className='text-2xl mb-2 font-semibold text-indigo-950'>Volume</h1>
          <p className='mb-3'>Streaming Services</p>
        </div>
        <p className='text-gray-700'>Volume integration enhances your streaming experience, providing high-quality video and audio streaming capabilities that are reliable and scalable.</p>
      </div>
    </div>
  </main>
</section>
<section className="body py-32">
  <h1 className="text-white text-4xl font-semibold text-center mb-5">Enhance Your Media Experience</h1>
  <p className="text-gray-300 text-center w-11/12 md:w-8/12 lg:w-7/12 mx-auto">
    Discover the power of AI-driven video solutions that elevate your media experience. Our platform offers cutting-edge technology to transform how you create and consume video content, ensuring unparalleled quality and engagement.
  </p>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-10">
    <Link to="/login" className="py-4 px-6 font-semibold border border-indigo-700 text-indigo-700 hover:bg-indigo-700 hover:text-white rounded transition duration-300">
      Get Started
    </Link>
    <Link to="/login" className="py-4 px-6 bg-transparent border border-white text-white hover:bg-white hover:text-black rounded transition duration-300">
      Sign Up
    </Link>
  </div>
</section>
<div className="w-full flex flex-wrap items-center justify-around gap-4 py-32">
      <img className="w-24 sm:w-32" src={a} alt="" />
      <img className="w-24 sm:w-32" src={b} alt="" />
      <img className="w-24 sm:w-32" src={c} alt="" />
      <img className="w-24 sm:w-32" src={d} alt="" />
      <img className="w-24 sm:w-32" src={e} alt="" />
    </div>
      <Footer />
    </>
  );
};

export default About;
