import { Link } from "react-router-dom";
import lg from '../assets/icon.svg';

const Login = () => {
  return (
    <>
      <div className="bg-white :bg-gray-900">
        <div className="flex justify-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }}>
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <Link to="/" className="flex items-center ">
                  <img src={lg} className="h-8" alt="Logo" />
                  <h1 className='text-lg font-bold text-white'>GENVID</h1>
                </Link>

                <p className="max-w-xl mt-3 text-gray-300">
                  Welcome to GENVID, your platform for AI-powered video generation. Empowering you to create professional-quality videos effortlessly.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center mx-auto">
                  <Link to="/" className="flex items-center ">
                    <img src={lg} className="h-8" alt="Logo" />
                    <h1 className='text-lg font-bold'>GENVID</h1>
                  </Link>
                </div>

                <p className="mt-3 text-gray-500 :text-gray-300">Sign in to access your account</p>
              </div>

              <div className="mt-8">
                <form>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 :text-gray-200">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg :placeholder-gray-600 :bg-gray-900 :text-gray-300 :border-gray-700 focus:border-indigo-400 :focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label htmlFor="password" className="text-sm text-gray-600 :text-gray-200">Password</label>
                      <a href="#" className="text-sm text-gray-400 focus:text-indigo-500 hover:text-indigo-500 hover:underline">Forgot password?</a>
                    </div>

                    <input type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg :placeholder-gray-600 :bg-gray-900 :text-gray-300 :border-gray-700 focus:border-indigo-400 :focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
                      Sign in
                    </button>
                  </div>

                </form>

                <p className="mt-6 text-sm text-center text-gray-400">Don't have an account yet? <Link to="/sign-up" className="text-indigo-500 focus:outline-none focus:underline hover:underline">Sign up</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
