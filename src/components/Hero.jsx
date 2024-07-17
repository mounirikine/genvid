import img from "../assets/her.png";
import sec from "../assets/sec.png";
import secc from "../assets/secc.png";
import seccc from "../assets/seccc.png";
import big from "../assets/big.jpg";

import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import d from "../assets/d.png";
import e from "../assets/e.png";

import aa from "../assets/aa.png";
import bb from "../assets/bb.png";
import cc from "../assets/cc.png";
import dd from "../assets/dd.png";
import ee from "../assets/ee.png";
import ff from "../assets/ff.png";

import aaa from "../assets/aaa.jpg";
import bbb from "../assets/bbb.jpg";
import ccc from "../assets/ccc.jpg";
import { Link } from "react-router-dom";
const Hero = () => {


  const blog = [
    {
      id: 1,
      img: aaa,
      title: "Real experiences with GENVID's AI-powered",
      date: "May 30, 2024",
      time: "10 min read",
      des: "Explore how real users are leveraging GENVID's AI technology to enhance their media experiences."
    },
    {
      id: 2,
      img: bbb,
      title: "A closer look at the GENVID's technology",
      date: "May 30, 2024",
      time: "10 min read",
      des: "Dive deep into the innovative technology behind GENVID and discover its transformative potential."
    },
    {
      id: 3,
      img: ccc,
      title: "AI-driven advancements in media",
      date: "May 30, 2024",
      time: "10 min read",
      des: "Learn about the latest AI-driven advancements in media and how they are reshaping the industry."
    },
  ];
  const data_services = [
    {
      id: 1,
      img: aa,
      title: "AI video editing",
      desc: "Harness the power of AI to seamlessly edit your videos with precision and ease."
    },
    {
      id: 2,
      img: bb,
      title: "Video resizer",
      desc: "Effortlessly resize your videos to fit any platform or screen size."
    },
    {
      id: 3,
      img: cc,
      title: "Screen recorder",
      desc: "Capture your screen activities with high-quality video output."
    },
    {
      id: 4,
      img: dd,
      title: "Trim video",
      desc: "Quickly trim and cut your videos to perfection."
    },
    {
      id: 5,
      img: ee,
      title: "Text to video",
      desc: "Convert your text content into engaging video formats."
    },
    {
      id: 6,
      img: ff,
      title: "Subtitle generator",
      desc: "Automatically generate accurate subtitles for your videos."
    },
  ];

  return (
    <>
<section className="text-gray-600 body-font  pt-32 lg:pt-24 body min-h-screen">
  <div className="container mx-auto flex flex-col lg:flex-row items-center">
    <div className="lg:w-1/2 lg:pr-4 md:pr-6 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="sm:text-5xl text-3xl mb-4 font-medium text-white">
        Generate AI videos with just text
      </h1>
      <p className="mb-8 leading-relaxed text-gray-300 text-sm lg:text-base">
        Experience the future of video creation with our AI-driven platform. Transform your ideas into stunning videos with ease and efficiency.
      </p>
      <div className="flex justify-center gap-2 flex-col lg:flex-row">
        <Link to="/login" className="bg-indigo-600 text-white px-6 py-2 rounded mb-2 lg:mb-0 lg:mr-2">Get Started</Link>
        <Link to="/login" className="bg-white text-black px-6 py-2 rounded border border-gray-300">Try For Free</Link>
      </div>
    </div>
    <div className="lg:w-1/2 w-full lg:mt-0 mt-12">
      <img className="object-cover object-center rounded w-full" alt="hero" src={img} />
    </div>
  </div>
</section>

<section className="min-h-screen">
  <div className="flex items-center justify-between py-10 px-4 sm:px-10">
    <div className="w-full flex flex-wrap items-center justify-around gap-4">
      <img className="w-24 sm:w-32" src={a} alt="" />
      <img className="w-24 sm:w-32" src={b} alt="" />
      <img className="w-24 sm:w-32" src={c} alt="" />
      <img className="w-24 sm:w-32" src={d} alt="" />
      <img className="w-24 sm:w-32" src={e} alt="" />
    </div>
  </div>

  <main className="py-12 sm:py-24 bg-slate-100">
    <div className="container mx-auto px-4 sm:px-10">
      <div className="flex flex-col items-center justify-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-semibold mb-3 text-indigo-700 text-center">
          What We Offer
        </h1>
        <p className="text-sm sm:text-base w-full sm:w-8/12 text-center text-gray-500">
          Discover our range of AI-driven video solutions designed to elevate your media content. From advanced video editing to seamless subtitle generation, we provide the tools you need to create outstanding videos effortlessly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data_services.map((item, index) => (
          <div
            className="bg-white px-5 py-8 rounded-3xl border-2 border-indigo-600 transition-all"
            key={index}
          >
            <img src={item.img} alt={item.title} className="w-20 mb-4 mx-auto" />
            <h1 className="text-lg sm:text-xl font-semibold mb-2 text-center">
              {item.title}
            </h1>
            <p className="text-sm text-gray-500 text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </main>
</section>
<div className="min-h-screen">
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Enhance your audio with AI-powered improvements
        </h1>
        <p className="mb-8 leading-relaxed">
          Experience crystal-clear sound quality like never before with our advanced AI technology. From noise reduction to audio enhancement, transform your audio recordings into professional-grade masterpieces effortlessly.
        </p>
        <div className="flex justify-center">
          <Link to="/login" className="bg-indigo-800 text-white px-6 py-2 rounded">
            Get Started for Free
          </Link>
        </div>
      </div>
      <div className="lg:max-w-xl lg:w-full md:w-1/2 w-6/6">
        <img className="object-cover object-center rounded" alt="hero" src={sec} />
      </div>
    </div>
  </section>

  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
      <div className="lg:max-w-xl lg:w-full md:w-1/2 w-6/6 mb-10 md:mb-0">
        <img className="object-cover object-center rounded" alt="hero" src={secc} />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Enhance your audio with our noise reduction feature
        </h1>
        <p className="mb-8 leading-relaxed">
          Experience crystal-clear sound with our advanced noise reduction feature. Whether you're recording podcasts, lectures, or music, our technology ensures that unwanted background noise is minimized, delivering superior audio quality every time.
        </p>
        <div className="flex justify-center">
          <Link to="/login" className="bg-indigo-800 text-white px-6 py-2 rounded">
            Get Started for Free
          </Link>
        </div>
      </div>
    </div>
  </section>

  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Unlock limitless creativity with watermark-free videos
        </h1>
        <p className="mb-8 leading-relaxed">
          Elevate your video production with our watermark-free editing capabilities. Whether you're creating professional content or personal projects, enjoy the freedom to express yourself without any distractions.
        </p>
        <div className="flex justify-center">
          <Link to="/login" className="bg-indigo-800 text-white px-6 py-2 rounded">
            Get Started for Free
          </Link>
        </div>
      </div>
      <div className="lg:max-w-xl lg:w-full md:w-1/2 w-6/6">
        <img className="object-cover object-center rounded" alt="hero" src={seccc} />
      </div>
    </div>
  </section>
</div>

<div className="min-h-screen">
  <section className="py-10 bg-violet-50">
    <h1 className="text-center text-3xl font-semibold mb-10 text-gray-600">Elevate your video with royalty-free elements</h1>

    <main className="container mx-auto lg:px-20 py-10">
      <img src={big} alt="Royalty-free elements" className="mx-auto" />
    </main>
  </section>

  <section className="py-32 body px-5">
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

  <section className="py-20 px-3 lg:px-10">
  <h1 className="text-2xl lg:text-5xl lg:w-8/12 mb-5 mx-auto text-center font-medium">Discover Our Latest News and Valuable Resources</h1>
  <p className="text-center mx-auto lg:w-7/12">Stay updated with our latest articles, insights, and resources on AI technology, video production, and more.</p>
  <main className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 lg:px-16 py-20">
    {blog.map((item, index) => (
      <div key={index} className="p-3 border rounded-3xl shadow-lg">
        <img src={item.img} alt={item.title} className="mb-4" />
        <h1 className="text-xl mb-3 w-11/12 font-semibold">{item.title}</h1>
        <div className="flex items-center justify-start">
          <span className="text-gray-700 mb-4">{item.date} • {item.time}</span>
        </div>
        <p className="mb-6">{item.des}</p>
        <a href="#" className="text-indigo-600 hover:underline">Read more</a>
      </div>
    ))}
  </main>
  <div className="flex flex-col lg:flex-row items-center justify-center gap-2 pt-10">
    <Link to="/login" className="py-4 font-semibold border bg-indigo-600 text-white hover:border-indigo-700">
      View All Articles
    </Link>
    <Link to="/login" className="bg-transparent border-indigo-700 border py-4 text-indigo-600 hover:bg-indigo-600 hover:text-white hover:border-white">
      Get Started
    </Link>
  </div>
</section>

</div>


    </>
  );
};

export default Hero;
