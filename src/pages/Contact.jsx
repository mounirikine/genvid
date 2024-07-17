import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import d from "../assets/d.png";
import e from "../assets/e.png";

const Contact = () => {
  return (
 <>
 <Navbar />
 <section className='min-h-screen '>

 <section>
  <main className="py-32 body">
    <h1 className='text-4xl text-white font-bold text-center mb-8'>Get in Touch with GENVID</h1>
    <p className='text-gray-400 text-center'>Whether you have questions about our services, need support, or want to collaborate, we're here to help. Reach out to us today to start a conversation.</p>
  </main>
</section>

      <section className="bg-white :bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 :text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 :text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 :text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500 :shadow-sm-light" placeholder="name@flowbite.com" required />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 :text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500 :shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 :text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-indigo-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 :bg-primary-600 :hover:bg-primary-700 :focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>

<div className="flex items-center justify-between py-10 px-4 sm:px-10 bg-violet-50">
    <div className="w-full flex flex-wrap items-center justify-around gap-4">
      <img className="w-24 sm:w-32" src={a} alt="" />
      <img className="w-24 sm:w-32" src={b} alt="" />
      <img className="w-24 sm:w-32" src={c} alt="" />
      <img className="w-24 sm:w-32" src={d} alt="" />
      <img className="w-24 sm:w-32" src={e} alt="" />
    </div>
  </div>
    </section>
 <Footer />
 
 </>
  )
}

export default Contact