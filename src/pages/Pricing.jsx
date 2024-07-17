import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckIcon } from '@heroicons/react/20/solid';
const includedFeatures = [
    'AI-powered video creation',
    'Customizable video templates',
    'Access to premium video effects',
    'Dedicated customer support',
  ];

import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import d from "../assets/d.png";
import e from "../assets/e.png";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <section>
        <main className="py-32 body">
          <h1 className='text-4xl text-white font-bold text-center mb-8'>GENVID Pricing</h1>
          <p className='text-gray-400 text-center'>Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
        </main>
      </section>
      <section className='py-32 min-h-screen'>
        <div className="sm:flex sm:flex-col sm:items-center p-10">
          <div className="relative self-center bg-indigo-100 rounded-3xl p-1 flex">
            <button type="button"
              className="relative w-1/2 rounded-3xl py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 bg-indigo-600 text-white shadow-sm">Monthly
              billing
            </button>
            <button type="button"
              className="ml-0.5 relative w-1/2 border rounded-3xl py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 border-indigo-600 text-indigo-600">Yearly
              billing
            </button>
          </div>
          <div className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-7 md:max-w-6xl md:mx-auto xl:grid-cols-3">
            <div className="border border-gray-200 rounded-3xl shadow-xl divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 leading-6">Basic</h2>
                <p className="mt-2 text-base text-gray-700 leading-tight">Ideal for small projects and personal use.</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold text-gray-900 tracking-tighter">$0</span>
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <a href="/login"
                  className="mt-8 block w-full bg-gray-900 rounded-md py-2 text-sm font-semibold text-white text-center">Get
                  Started</a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-sm font-bold text-gray-900 tracking-wide uppercase">Includes</h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    <span className="text-base text-gray-700">Basic video templates</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    <span className="text-base text-gray-700">Limited rendering hours</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    <span className="text-base text-gray-700">Limited AI customization</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border border-gray-200 rounded-3xl shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 leading-6">Pro</h2>
                <p className="mt-2 text-base text-gray-700 leading-tight">For professionals and growing businesses.</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold text-gray-900 tracking-tighter">$19</span>
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <a href="/login"
                  className="mt-8 block w-full bg-gray-900 rounded-md py-2 text-sm font-semibold text-white text-center">Get
                  Started</a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-sm font-bold text-gray-900 tracking-wide uppercase">Includes</h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    <span className="text-base text-gray-700">Advanced video templates</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    <span className="text-base text-gray-700">Extended rendering hours</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    <span className="text-base text-gray-700">Enhanced AI customization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    <span className="text-base text-gray-700">Priority support</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border border-gray-200 rounded-3xl shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 leading-6">Enterprise</h2>
                <p className="mt-2 text-base text-gray-700 leading-tight">Custom solutions for large teams and organizations.</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold text-gray-900 tracking-tighter">$49</span>
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <a href="/contact"
                  className="mt-8 block w-full bg-gray-900 rounded-md py-2 text-sm font-semibold text-white text-center">Contact
                  Us</a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-sm font-bold text-gray-900 tracking-wide uppercase">Includes</h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    <span className="text-base text-gray-700">Custom video solutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    <span className="text-base text-gray-700">Unlimited rendering hours</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    <span className="text-base text-gray-700">Full AI customization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    <span className="text-base text-gray-700">Dedicated account manager</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className='w-11/12 mx-auto' />
      <section className="py-32 body px-5">
    <h1 className="text-white text-4xl font-semibold text-center mb-5">Enhance Your Media Experience</h1>
    <p className="text-gray-300 text-center w-11/12 md:w-8/12 lg:w-7/12 mx-auto">
      Discover the power of AI-driven video solutions that elevate your media experience. Our platform offers cutting-edge technology to transform how you create and consume video content, ensuring unparalleled quality and engagement.
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-10">
      <button className="py-4 px-6 font-semibold border border-indigo-700 text-indigo-700 hover:bg-indigo-700 hover:text-white rounded transition duration-300">
        Get Started
      </button>
      <button className="py-4 px-6 bg-transparent border border-white text-white hover:bg-white hover:text-black rounded transition duration-300">
        Sign Up
      </button>
    </div>
  </section>
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">AI-Powered Video Creation</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Create stunning videos effortlessly with our AI-powered platform. Enhance your content creation process like never before.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Membership Benefits</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Elevate your videos with AI-driven customization options, access to a wide range of premium video effects, and dedicated support from our team of experts.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 font-Poppins">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Unlock Your Creativity Today</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Started
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Flexible payment options available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between py-10 px-4 sm:px-10">
    <div className="w-full flex flex-wrap items-center justify-around gap-4">
      <img className="w-24 sm:w-32" src={a} alt="" />
      <img className="w-24 sm:w-32" src={b} alt="" />
      <img className="w-24 sm:w-32" src={c} alt="" />
      <img className="w-24 sm:w-32" src={d} alt="" />
      <img className="w-24 sm:w-32" src={e} alt="" />
    </div>
  </div>
      <Footer />
    </>
  );
}

export default Pricing;
