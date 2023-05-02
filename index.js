import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillFacebook} from 'react-icons/ai';
import Image from "next/image";
import wave from "../public/wave.png";
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

import React, { useState } from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };
  return (
    <div >
      <Head>
        <title>Vishal's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main   className={darkMode ? "bg-gray-900 text-white px-10 md:px-26 lg:px-40 " : "bg-white px-10 md:px-26 lg:px-40 "}>
     
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-bold">DevelopedByVishal</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill  className="cursor-pointer text-2xl" onClick={handleClick} /></li>
              <li> <a className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl"><b>Vishal Kumar</b></h2>
            <h3 className="text-2xl py-2 md:text-3xl">Developer and Designer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl  mx-auto dark:text-white">Freelancer providing services for programming and your specific needs. Join me down below and let's get cracking!</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a  href="https://www.facebook.com/profile.php?id=100086752676903&mibextid=ZbWKwL"> <AiFillFacebook /></a>
            <a  href="https://www.linkedin.com/in/vishal-kumar-9578a0257"><AiFillLinkedin /></a>
            <a  href="https://instagram.com/vishalkmr_84?igshid=ZDdkNTZiNTM="><AiFillInstagram /></a>
            
          </div>

          <div className="relative mx-auto items-center bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:h-96 md:w-96 ">
            <Image src={wave} alt="Wave Image" />
          </div>
        </section>

        <section>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <h3 className="text-3xl py-1"><a href="">About Me</a></h3>
            <p className="text-md py-2 leading-8 text-grey-600">I am a first year Computer Science student at <span className="text-teal-500">IIT Kanpur</span> and learning webdev, I can help you to learn basics of webdev.</p>
            

            <p className="text-md py-2 leading-8 text-grey-600">I offer from a wide range of services,including brand design and programming.</p>
          
          </div>

          
          <div className="lg:flex gap-10">
          <div className="  text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white text-gray-800  shadow-gray-100">
              <Image src={design} width={100} height={100} alt = "wave" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs, following core
                design theory can be used.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div> 

            <div className="  text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white  text-gray-800  shadow-gray-100">
              <Image src={consulting} width={100} height={100} alt = "wave" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Stocks
              </h3>
              <p className="py-2">
                Investement  is very much important nowdays.
              </p>
              <h4 className="py-4 text-teal-600">Where I invest</h4>
              <p className="text-gray-800 py-1">Real Estate</p>
              <p className="text-gray-800 py-1">Stocks</p>
              <p className="text-gray-800 py-1">Mutual funds</p>
              <p className="text-gray-800 py-1">FD</p>
            </div> 

            <div className="  text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white  text-gray-800 shadow-gray-100">
              <Image src={code} width={100} height={100} alt = "wave" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Coding Languages
              </h3>
              <p className="py-2">
               Coding is a skill that translates into many career paths and enahances logic.
              </p>
              <h4 className="py-4 text-teal-600">Coding Languages</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">JAVASCRIPT</p>
              <p className="text-gray-800 py-1">C</p>
            </div> 

            </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">Since the begining of my journey as a free lancer ,designer and developer,I've done remote work for agencies consulted for startups and collaborated with talented peoples to create digital products.</p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/4 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'}  />
            </div>

            <div className="basis-1/4 flex-1">
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'}  />
            </div>

            <div className="basis-1/4 flex-1">
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} />
            </div>
            <div className="basis-1/4 flex-1">
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} />
              </div>

            <div className="basis-1/4 flex-1">
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} />
              </div>
            <div className="basis-1/4 flex-1">
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'}  />
              </div>
          </div>
        </section>
        <hr />
  <h1 className="text-center"><b>Enter yor Details to ask me any doubt.</b></h1>
<br />
  <div className="bg-gray-100 py-5 rounded-xl dark:bg-orange-50">
  <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div className="px-4 py-6 sm:px-0">
      <form>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <div className="mt-1">
            <input type="text" name="name" id="name" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="mt-1">
            <input type="email" name="email" id="email" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <div className="mt-1">
            <textarea id="message" name="message" rows="4" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
          </div>
        </div>
        <div className="mt-6">
          <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
<br />
<div className="flex flex-col min-h-screen">
    {/* Your main content goes here */}

    {/* Footer */}
    <footer className="bg-gray-900 text-white rounded-xl  dark:bg-gray-50 dark:text-black">
      <div className="container mx-auto py-4 px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-xl">Contact Us:</span>
            <ul className="list-disc pl-4">
              <li><a href="">Phone: +918923579688</a></li>
              <li><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBmzrckNbvlrTStzlpdFbLcdChhTtbdqzfKkSrhbvDkWCKBnmxLmcQRMvpqNPXlHkfQfbSJ">Email: vishalkmr22@iitk.ac.in</a></li>
              <li><a href="https://www.iitk.ac.in/">IIT Kanpur</a></li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-xl">Follow Us:</span>
            <div className="flex mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100086752676903&mibextid=ZbWKwL"
                className="text-gray-400 hover:text-white mr-4"
                title="Facebook"
              >
                <i className="fab fa-facebook fa-lg"><AiFillFacebook/></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white mr-4"
                title="Twitter"
              >
                <i className="fab fa-twitter fa-lg"> <AiFillTwitterCircle /></i>
              </a>
              <a
                href="https://instagram.com/vishalkmr_84?igshid=ZDdkNTZiNTM="
                className="text-gray-400 hover:text-white mr-4"
                title="Instagram"
              >
                <i className="fab fa-instagram fa-lg"><AiFillInstagram /></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>

      </main>
    </div>
  )
}

