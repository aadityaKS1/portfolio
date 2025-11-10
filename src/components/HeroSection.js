import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between 
                        px-8 md:px-20 pt-24 pb-12 md:py-0 
                        bg-gradient-to-br from-[#0a062b] via-[#100c3b] to-[#04021a] 
                        text-whitemin-h-screen flex flex-col md:flex-row items-center justify-between 
                        px-8 md:px-20 pt-24 pb-12 md:py-0 
                        bg-radial-glow text-white">
      
      {/* Left Side */}
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi there, <br />
          I am <span className="text-pink-500">Aaditya Singh</span>, <br />
          An <span className="text-green-400">Aspiring Software Developer</span>.
        </h1>

        {/* Social Icons */}
        <div className="flex space-x-4 text-2xl mt-4">
          <a href="https://github.com/aadityaKS1" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/aaditya-k-s-0b7283358/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.facebook.com/aadii4you" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/aadii4_u/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://leetcode.com/u/practice_aaditya/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
            Contact Me
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded hover:opacity-90 transition">
            View Resume
          </button>
        </div>
      </div>

      {/* Right Side - Code Card */}
      <div className="order-1 lg:order-2 w-full lg:w-[650px] relative rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37]">
        
        {/* Window Controls */}
        <div className="px-4 lg:px-8 py-5 flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-200"></div>
        </div>

        {/* Gradient Lines */}
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>

        {/* Code Content */}
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <div className="blink">
              <span className="text-pink-500 mr-2">const</span>
              <span className="text-white mr-2">developer</span>
              <span className="text-pink-500 mr-2">=</span>
              <span className="text-gray-400">{'{'}</span>
            </div>

            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white mr-2">name:</span>
              <span className="text-gray-400">'</span>
              <span className="text-amber-300">Aaditya Singh</span>
              <span className="text-gray-400">',</span>
            </div>

            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white mr-2">skills:</span>
              <span className="text-gray-400">['</span>
              <span className="text-amber-300">React</span>
              <span className="text-gray-400">', '</span>
              <span className="text-amber-300">ML Algo</span>
              <span className="text-gray-400">', '</span>
              <span className="text-amber-300">Python</span>
              <span className="text-gray-400">', '</span>
              <span className="text-amber-300">C++</span>
              <span className="text-gray-400">', '</span>
              <span className="text-amber-300">Model Training</span>
              <span className="text-gray-400">', '</span>
              <span className="text-amber-300">TensorFlow</span>
              <span className="text-gray-400">', '</span>
              <span className="text-amber-300">API Integration</span>
              <span className="text-gray-400">'],</span>
            </div>

            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white mr-2">hardWorker:</span>
              <span className="text-orange-400">true</span>,
            </div>
            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white mr-2">quickLearner:</span>
              <span className="text-orange-400">true</span>,
            </div>
            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white mr-2">problemSolver:</span>
              <span className="text-orange-400">true</span>,
            </div>

            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-green-400 mr-2">hireable:</span>
              <span className="text-orange-400">function</span>
              <span className="text-gray-400">{'() {'}</span>
            </div>

            <div className="ml-8 lg:ml-16 mr-2 text-orange-400">return <span className="text-gray-400">(</span></div>
            <div className="ml-12 lg:ml-24 text-cyan-400">this.hardWorker &amp;&amp;</div>
            <div className="ml-12 lg:ml-24 text-cyan-400">this.problemSolver &amp;&amp;</div>
            <div className="ml-12 lg:ml-24 text-cyan-400">this.skills.length &gt;= 5</div>
            <div className="ml-8 lg:ml-16 text-gray-400">);</div>
            <div className="ml-4 lg:ml-8 text-gray-400">{'};'}</div>
            <div className="text-gray-400">{'};'}</div>
          </code>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
