import React, { useState } from 'react';
import './App.css';



function App() {

  return (
    <>
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-wrap gap-5 justify-between items-start w-full max-w-[1659px] max-md:max-w-full">
        <div className="flex flex-wrap gap-2 text-xl font-semibold text-stone-900 max-md:max-w-full">
          <div className="px-8 py-3 hover:bg-red-400 cursor-pointer border border-black border-solid max-md:px-5">
            Rajasthan University
          </div>
          <div className="px-3.5 py-3 whitespace-nowrap bg-white border border-black border-solid max-md:pr-5 hover:bg-red-400 cursor-pointer ">
            +91-12X-90451xxx
          </div>
          <div className="px-5 pt-1.5 pb-4 whitespace-nowrap bg-white border border-black border-solid max-md:px-5 hover:bg-red-400 cursor-pointer ">
            admission@raj.ac.in
          </div>
        </div>
        <div className="flex gap-6 mt-4">
          <img 
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d72f926c0b2350e008e5aa0739e159379e0306489d2e201976170a32297c545a?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
            className="object-contain shrink-0 w-9 rounded-none aspect-square cursor-pointer"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e583e1641a37d3bda82222e9e6d2bf38eeec6ad8a53f1ce95b78cd45383e9bdf?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
            className="object-contain shrink-0 w-9 rounded-none aspect-square cursor-pointer"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf2a8aff4b3129ba95142bd50fb4531e64b6f94df14e4baa779519d4bfb7adaa?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
            className="object-contain shrink-0 w-9 rounded-none aspect-square cursor-pointer"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9386485c8566c102260e03a38f1ca778c42598bab0fb6c6aa45008206aa642a?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
            className="object-contain shrink-0 w-9 rounded-none aspect-square cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col self-end mt-4 w-full max-w-[1590px] max-md:mr-2.5 max-md:max-w-full">
        <div className="self-start text-5xl font-extrabold text-red-400 leading-[54px] max-md:max-w-full">
          Engineering and Polytechnic Institutes <br />
        </div>
        <div className="flex flex-wrap gap-5 justify-between mt-2 w-full max-md:max-w-full">
          <div className="text-3xl font-extrabold text-black leading-[54px] max-md:max-w-full">
            <span className="text-3xl">Department of Technical Education</span>
            <br />
            Government of Rajasthan{" "}
          </div>
          <div className="flex flex-wrap gap-6 text-sm tracking-normal text-gray-400 whitespace-nowrap">
            <div className="relative">
              <div className="flex border-solid border-2 border-black rounded-lg">
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcf80e7bd71a06545fdd5b247bf128f4d4320c6233fd0d4d7698566c66002ba9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                className="object-contain shrink-0 w-10 aspect-[1.21]"/>
                <input
                  type="text"
                  className="px-3.5 py-2.5 text-sm text-black cursor-pointer border-none "
                  placeholder="Enter text here"
                />
              </div>
    
    
                <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/03fadbd764d6a8cfd87f4f930dd3fc5baf5dd49e0b9cb41032cddc7ad1283344?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/03fadbd764d6a8cfd87f4f930dd3fc5baf5dd49e0b9cb41032cddc7ad1283344?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03fadbd764d6a8cfd87f4f930dd3fc5baf5dd49e0b9cb41032cddc7ad1283344?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/03fadbd764d6a8cfd87f4f930dd3fc5baf5dd49e0b9cb41032cddc7ad1283344?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/03fadbd764d6a8cfd87f4f930dd3fc5baf5dd49e0b9cb41032cddc7ad1283344?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03fadbd764d6a8cfd87f4f930dd3fc5baf5dd49e0b9cb41032cddc7ad1283344?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/03fadbd764d6a8cfd87f4f930dd3fc5baf5dd49e0b9cb41032cddc7ad1283344?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/03fadbd764d6a8cfd87f4f930dd3fc5baf5dd49e0b9cb41032cddc7ad1283344?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                className="object-contain shrink-0 max-w-full aspect-[1.05] w-[100px]"
                />
            </div>
          </div>

        </div>
      </div>
      {/* <div className="px-14 pt-3.5 pb-6 mt-24 w-full text-xl font-semibold text-black bg-red-400 max-md:px-5 max-md:mt-10 max-md:max-w-full ">
        <ul className="flex justify-around">
          <li>Home</li>
          <li>About Us</li>
          <li>Admissions Information</li>
          <li>Institutes Directory</li>
          <li>Features</li>
          <li>Alumni</li>
          <li>Resource</li>
          <li>Approvals</li>
          <li>Innovation Hub</li>
          <li>FAQs</li>
          <li>Contact Us</li>
        </ul>
      </div> */}
      <div className="px-14 pt-3.5 pb-6 mt-24 w-full text-xl font-semibold text-black bg-red-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
  <div className="flex flex-col md:flex-row">
    {/* Logo or branding */}
    <div className="flex justify-between items-center md:justify-start mb-4 md:mb-0">
      {/* <h1 className="text-2xl font-bold text-white">Logo</h1> */}
      {/* Mobile menu button */}
      <button className="md:hidden text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
    <ul className="flex flex-col md:flex-row md:justify-evenly md:flex-1 space-y-4 md:space-y-0 md:space-x-8">
      <li><a href="#home">Home</a></li>
      <li><a href="#about-us">About Us</a></li>
      <li><a href="#admissions">Admissions Information</a></li>
      <li><a href="#directory">Institutes Directory</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#alumni">Alumni</a></li>
      <li><a href="#resource">Resource</a></li>
      <li><a href="#approvals">Approvals</a></li>
      <li><a href="#innovation">Innovation Hub</a></li>
      <li><a href="#faqs">FAQs</a></li>
      <li><a href="#contact">Contact Us</a></li>
    </ul>
  </div>
</div>

      <div className="flex relative flex-col items-center px-16 pb-12 mt-3 w-full min-h-[588px] pt-[512px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aa89ae1264a5e66494a3db159e442bedae7c7ffb68b1a7363ff20548a0fd901c?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa89ae1264a5e66494a3db159e442bedae7c7ffb68b1a7363ff20548a0fd901c?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa89ae1264a5e66494a3db159e442bedae7c7ffb68b1a7363ff20548a0fd901c?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa89ae1264a5e66494a3db159e442bedae7c7ffb68b1a7363ff20548a0fd901c?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa89ae1264a5e66494a3db159e442bedae7c7ffb68b1a7363ff20548a0fd901c?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa89ae1264a5e66494a3db159e442bedae7c7ffb68b1a7363ff20548a0fd901c?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa89ae1264a5e66494a3db159e442bedae7c7ffb68b1a7363ff20548a0fd901c?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa89ae1264a5e66494a3db159e442bedae7c7ffb68b1a7363ff20548a0fd901c?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-4 items-start ml-3 max-w-full min-h-[25px] w-[101px]">
          <div className="flex shrink-0 w-2.5 h-2.5 bg-white rounded-full" />
          <div className="flex shrink-0 w-2.5 h-2.5 bg-white rounded-full" />
          <div className="flex shrink-0 w-2.5 h-2.5 bg-white rounded-full" />
        </div>
      </div>



      <div className="flex z-10 flex-col pr-6 pl-16 -mt-4 w-full max-md:px-5 max-md:max-w-full">
        <div className="px-0.5 pb-16 w-full bg-red-400 bg-opacity-70 max-w-[1578px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-4 items-start font-bold max-md:mt-8">
                <div className="text-7xl tracking-wider text-white max-md:text-4xl">
                  01
                </div>
                <div className="flex-auto mt-4 text-3xl tracking-wide text-stone-900 w-[345px]">
                  <span className="text-3xl">EXCELLENT PLACEMENTS</span>
                  <br />
                  <span className="text-sm">
                    Over 90% placement for 2023 passed out batches
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-6 items-start text-6xl font-bold tracking-wider text-white max-md:mt-8 max-md:text-4xl">
              <div className="self-stretch my-auto max-md:text-4xl">02</div>
                <div className="grow shrink mt-4 text-3xl tracking-wide text-stone-900 w-[368px]">
                  <span className="text-3xl">STRONG ALUMNI NETWORK</span>
                  <br />
                  <span className="text-base">
                    Network of over 18.318 Alumni
                  </span>
                </div>
                <div className="self-stretch my-auto max-md:text-4xl">03</div>
                <div className="grow shrink mt-4 text-3xl tracking-wide text-stone-900 w-[359px]">
                  <span className="text-3xl">PROFICIENCY CERTIFICATE</span>
                  <br />
                  <span className="text-base">
                    Network of over 18.318 Alumni
                  </span>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="self-end px-14 py-10 mt-8 max-w-full text-2xl leading-9 text-white bg-cyan-900 rounded-[30px] w-[406px] max-md:px-5">
          👋 Hi! I’m a virtual assistant. <br /> How can I help today?
        </div>
      </div>



      <div className="mt-3.5 w-full border-solid border-[5px] border-orange-600 border-opacity-20 min-h-[6px] max-md:max-w-full" />
      <div className="self-center mt-8 w-full max-w-[1661px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-6 py-6 mx-auto w-full bg-rose-50 border border-black border-solid rounded-[30px] max-md:pl-5 max-md:mt-6">
              <div className="flex items-start text-3xl font-semibold text-zinc-800">
                <div className="flex-auto mt-3 w-[302px]">
                  ANNOUNCEMENTS 
                  <br />
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                  className="object-contain shrink-0 aspect-square w-[50px]"
                />
              </div>
              <div className="flex gap-3 mt-3.5 max-w-full w-[321px]">
                <div className="flex-auto text-base font-medium tracking-normal leading-5 text-black w-[299px]">
                  New Admission (Odd Sem 2024) - Instructions, Forms, Induction
                  & Time Table <br />
                  <br />
                  End Sem Letter - odd 2024
                  <br />
                  <br />
                  Admission through GAT -B
                  <br />
                  <br />
                  Time Table <br />
                  <br />
                  Message from AICTE/UGC
                  <br />
                  <br />
                  Performance and Academic Outcomes <br />
                  <br />
                  NDA Registration <br />
                  <br />
                  NIRF Ranking / NAAC Accredition / NBA
                  <br />
                  <br />
                  Speech of Honble Founder Chairman <br />
                  <br />
                  <span className="font-extrabold">
                    MOOCs Registration & Subject List
                  </span>
                  <br />
                </div>
                <div className="flex flex-col items-start self-end mt-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain aspect-[0.5] w-[5px]"
                  />
                  <div className="flex relative flex-col mt-9 aspect-[0.5] w-[5px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                      className="object-contain w-full aspect-[0.5]"
                    />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain mt-7 aspect-[0.5] w-[5px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain mt-5 aspect-[0.5] w-[5px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain mt-7 aspect-[0.5] w-[5px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain mt-12 aspect-[0.5] w-[5px] max-md:mt-10"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain mt-12 aspect-[0.5] w-[5px] max-md:mt-10"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain mt-12 aspect-[0.5] w-[5px] max-md:mt-10"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain mt-10 aspect-[0.5] w-[5px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain mt-8 aspect-[0.5] w-[5px]"
                  />
                </div>
              </div>
              {/* <div className="gap-2 self-stretch px-9 py-6 mt-32 text-lg font-extrabold leading-none text-center text-red-400 bg-white border-red-400 border-solid shadow-sm border-[1.333px] min-h-[72px] rounded-[40px] max-md:px-5 max-md:mt-10 max-md:mr-2.5"> */}
                <button className="gap-2 self-stretch px-9 py-6 mt-32 text-lg font-extrabold leading-none text-center text-red-400 bg-white border-red-400 border-solid shadow-sm border-[1.333px] min-h-[72px] rounded-[40px] max-md:px-5 max-md:mt-10 max-md:mr-2.5 hover:bg-red-200 active:bg-red-300">VIEW ALL</button>
              {/* </div> */}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full ">
            <div className="flex flex-col items-start px-3 py-8 mx-auto w-full bg-rose-50 border border-black border-solid rounded-[30px] max-md:mt-6 max-md:max-w-full">
              <div className="flex gap-5 text-3xl font-semibold text-zinc-800">
                <div className="flex-auto">
                  UPCOMING EVENTS
                  <br />
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32157ba0d4313377ec52f92ea94cd0b342e4d4e4ecccaf1ad1aa048b5689d0e5?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/32157ba0d4313377ec52f92ea94cd0b342e4d4e4ecccaf1ad1aa048b5689d0e5?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32157ba0d4313377ec52f92ea94cd0b342e4d4e4ecccaf1ad1aa048b5689d0e5?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/32157ba0d4313377ec52f92ea94cd0b342e4d4e4ecccaf1ad1aa048b5689d0e5?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/32157ba0d4313377ec52f92ea94cd0b342e4d4e4ecccaf1ad1aa048b5689d0e5?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32157ba0d4313377ec52f92ea94cd0b342e4d4e4ecccaf1ad1aa048b5689d0e5?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/32157ba0d4313377ec52f92ea94cd0b342e4d4e4ecccaf1ad1aa048b5689d0e5?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/32157ba0d4313377ec52f92ea94cd0b342e4d4e4ecccaf1ad1aa048b5689d0e5?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                  className="object-contain shrink-0 self-start aspect-square w-[50px]"
                />
              </div>
              <div className="flex gap-3 ml-3.5 leading-6 max-md:ml-2.5">
                <div className="self-start px-4 pt-5 pb-9 text-lg font-extrabold text-center whitespace-nowrap text-blue-950">
                  23
                  <br />
                  Jan,25
                </div>
                <div className="text-xs font-medium text-black">
                  Department of Physics and Materials Science & Engineering is
                  organizing International Young Quantum Scientists' Meet 2024
                  from 16 - 20 September 2024
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                  className="object-contain shrink-0 self-end mt-20 aspect-[0.5] w-[5px] max-md:mt-10"
                />
              </div>
              <div className="flex gap-6 mt-11 ml-3.5 leading-6 max-md:mt-10 max-md:ml-2.5">
                <div className="flex flex-auto gap-3">
                  <div className="px-4 pt-5 pb-9 text-lg font-extrabold text-center whitespace-nowrap text-blue-950">
                    12
                    <br />
                    Jun,25
                  </div>
                  <div className="text-xs font-medium text-black">
                    Dept of Mathematics is organizing a 3 day International
                    Conference on Recent Advances in Mathematical Sciences
                    during June 2025
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                  className="object-contain shrink-0 self-end mt-20 aspect-[0.5] w-[5px] max-md:mt-10"
                />
              </div>
              <div className="flex gap-3 mt-16 ml-3.5 leading-6 max-md:mt-10 max-md:ml-2.5">
                <div className="px-4 pt-5 pb-9 text-lg font-extrabold text-center whitespace-nowrap text-blue-950">
                  13
                  <br />
                  Jan,25
                </div>
                <div className="text-xs font-medium text-black">
                  Dept of Biotechnology is organizing a 3 day Internalional
                  Coferernce o Advances in Biosciences and Biotechnology in Jan
                  2025
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                  className="object-contain shrink-0 self-end mt-20 aspect-[0.5] w-[5px] max-md:mt-10"
                />
              </div>
              <div className="flex gap-9 mt-11 ml-3.5 leading-6 max-md:mt-10 max-md:ml-2.5">
                <div className="flex flex-auto gap-3">
                  <div className="px-4 pt-3.5 pb-10 text-lg font-extrabold text-center whitespace-nowrap text-blue-950">
                    31
                    <br />
                    Jan,25
                  </div>
                  <div className="text-xs font-medium text-black">
                    Dept of ECE is organizing 10th International is organizing a
                    3 day International Conference
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                  className="object-contain shrink-0 my-auto aspect-[0.5] w-[5px]"
                />
              </div>
              {/* <div className="gap-2 self-stretch px-9 py-6  text-lg font-extrabold leading-none text-center text-red-400 bg-white border-red-400 border-solid shadow-sm border-[1.333px] min-h-[72px] rounded-[40px] max-md:px-5 max-md:mt-10 max-md:mr-2.5">
                VIEW ALL
              </div> */}
              <button className="gap-2 self-stretch px-9 py-6 text-lg font-extrabold leading-none text-center text-red-400 bg-white border-red-400 border-solid shadow-sm border-[1.333px] min-h-[72px] rounded-[40px] max-md:px-5 max-md:mt-10 max-md:mr-2.5 hover:bg-red-200 active:bg-red-300">VIEW ALL</button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[48%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col py-7 mx-auto w-full bg-rose-50 border border-black border-solid rounded-[30px] max-md:mt-6 max-md:max-w-full">
              {/* <div className="flex justify-start  text-3xl font-semibold text-zinc-800 max-md:pr-5">
                <div className="flex z-10 flex-auto mr-0 max-md:max-w-full">
                  <div className="z-10 flex-auto self-end mt-14 mr-0 h-1 border-2 border-red-400 border-solid max-md:mt-10 max-md:max-w-full" />
                  <div className="flex-auto max-md:max-w-full">
                    TRAINING & PLACEMENT
                    <br />
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/276ed53f425b921494d51bf6735e033a85d87d3086e8be93ee6e48211a8b71fa?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                  className="object-contain shrink-0 self-start rounded-none aspect-[1.37] w-[59px]"
                />
              </div> */}
              <div className="flex justify-between items-center text-3xl font-semibold text-zinc-800 max-md:pr-5">
                <div className="flex items-center space-x-4 max-md:flex-col max-md:space-x-0 max-md:space-y-4">
                  <div className="flex flex-col max-md:w-full">
                  
                    <div className=" max-md:text-center ml-5">
                      TRAINING & PLACEMENT
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/276ed53f425b921494d51bf6735e033a85d87d3086e8be93ee6e48211a8b71fa?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain w-16 h-16 rounded-full"
                  />
                </div>
              </div>
<div className="shrink-0  mt-3 h-1 border-2 border-red-400 border-solid max-md:max-w-full" />

              <div className="flex flex-col items-start pr-20 pl-4 mt-2 w-full max-md:pr-5 max-md:max-w-full">
                <div className="ml-2.5 text-base font-light text-black max-md:max-w-full">
                  Few of our regular key recruiters for B.Tech, M.Tech, Dual
                  Degree and MBA are…
                </div>
                <div className="mt-3.5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/646b179409ebbe18b021ef3fd26468ec17c66395cf5498fc0b027a82bd011ff0?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/646b179409ebbe18b021ef3fd26468ec17c66395cf5498fc0b027a82bd011ff0?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/646b179409ebbe18b021ef3fd26468ec17c66395cf5498fc0b027a82bd011ff0?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/646b179409ebbe18b021ef3fd26468ec17c66395cf5498fc0b027a82bd011ff0?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/646b179409ebbe18b021ef3fd26468ec17c66395cf5498fc0b027a82bd011ff0?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/646b179409ebbe18b021ef3fd26468ec17c66395cf5498fc0b027a82bd011ff0?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/646b179409ebbe18b021ef3fd26468ec17c66395cf5498fc0b027a82bd011ff0?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/646b179409ebbe18b021ef3fd26468ec17c66395cf5498fc0b027a82bd011ff0?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                        className="object-contain grow shrink-0 mt-6 max-w-full aspect-[2.58] w-[217px] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2870514f9d9b5b4e7aa6c28699edaf3a13a3b9e3fcfe33c69e696cfb4fb1fc25?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2870514f9d9b5b4e7aa6c28699edaf3a13a3b9e3fcfe33c69e696cfb4fb1fc25?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2870514f9d9b5b4e7aa6c28699edaf3a13a3b9e3fcfe33c69e696cfb4fb1fc25?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2870514f9d9b5b4e7aa6c28699edaf3a13a3b9e3fcfe33c69e696cfb4fb1fc25?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2870514f9d9b5b4e7aa6c28699edaf3a13a3b9e3fcfe33c69e696cfb4fb1fc25?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2870514f9d9b5b4e7aa6c28699edaf3a13a3b9e3fcfe33c69e696cfb4fb1fc25?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2870514f9d9b5b4e7aa6c28699edaf3a13a3b9e3fcfe33c69e696cfb4fb1fc25?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2870514f9d9b5b4e7aa6c28699edaf3a13a3b9e3fcfe33c69e696cfb4fb1fc25?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                        className="object-contain grow mt-3.5 aspect-[2.67] w-[254px] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/30c0cf17b769323f002e832222f9df22a5bfaafba64dc16703d69cfa55f7dfea?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/30c0cf17b769323f002e832222f9df22a5bfaafba64dc16703d69cfa55f7dfea?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30c0cf17b769323f002e832222f9df22a5bfaafba64dc16703d69cfa55f7dfea?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/30c0cf17b769323f002e832222f9df22a5bfaafba64dc16703d69cfa55f7dfea?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/30c0cf17b769323f002e832222f9df22a5bfaafba64dc16703d69cfa55f7dfea?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30c0cf17b769323f002e832222f9df22a5bfaafba64dc16703d69cfa55f7dfea?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/30c0cf17b769323f002e832222f9df22a5bfaafba64dc16703d69cfa55f7dfea?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/30c0cf17b769323f002e832222f9df22a5bfaafba64dc16703d69cfa55f7dfea?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                        className="object-contain grow shrink-0 aspect-[0.92] w-[98px] max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="self-end px-6 pt-2 pb-3.5 mt-2 mr-10 text-base font-semibold text-black bg-red-400 bg-opacity-40 max-md:px-5 max-md:mr-2.5">
                View More
              </div> */}

              <button className="self-end px-6 pt-2 pb-3.5 mt-2 mr-10 text-base font-semibold text-black bg-red-400 bg-opacity-40 max-md:px-5 max-md:mr-2.5 hover:bg-red-200 rounded-xl active:bg-white">View More</button>


              <div className="shrink-0 mt-2 h-1 border-2 border-red-400 border-solid max-md:max-w-full" />
              <div className="flex flex-wrap gap-5 justify-between items-start self-center max-w-full text-3xl font-semibold text-zinc-800 w-[691px]">
                <div className="mt-3">
                  ANNOUNCEMENTS 
                  <br />
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                  className="object-contain shrink-0 aspect-square w-[50px]"
                />
              </div>
              <div className="flex flex-wrap text-base font-semibold max-md:max-w-full">
                <div className="px-16 pt-3 pb-5 text-black bg-slate-400 bg-opacity-50 w-fit max-md:px-5">
                  2023 BATCH
                </div>
                <div className="grow px-16 pt-3 pb-4 text-white border border-black border-solid bg-blue-950 w-fit max-md:px-5 max-md:max-w-full">
                  2025 BATCH (AS ON 05 AUGUST2024)
                </div>
              </div>
              <div className="flex flex-col mt-2 ml-6 max-w-full text-base text-black w-[441px]">
                <div className="font-light max-md:max-w-full">
                  252 quality companies recruited so far
                  <br />
                  Highest Package Rs 60.71 Lacs by LinkedIn (2 Offers)
                  <br />
                  2nd Highest Package Rs 52.00 Lacs by Microsoft India (2
                  Offers)
                  <br />
                  3rd Highest Package Rs 37.37 Lacs CISCO (1 Offer)
                  <br />
                  24 Cos - Package From Rs 13.00 Lacs to Rs 37.36 Lacs (100
                  Offers)
                  <br />
                  104 Cos - Package From Rs 6.00  to Rs 12.99 Lacs  (387 Offers)
                  <br />
                  66 Cos - Package Less Than Rs 6.00 Lacs (274 Offers)
                  <br />
                  <br />
                  Average Package - Rs 8.71 Lacs
                  <br />
                  Median Package -  Rs 6.50 Lacs
                </div>
                {/* <div className="px-5 pt-1.5 pb-4 mt-6 ml-5 max-w-full font-semibold bg-red-400 bg-opacity-40 w-[126px] max-md:pr-5 max-md:ml-2.5">
                  View More
                </div> */}
                <button className="px-5 pt-1.5 pb-4 mt-6 ml-5 max-w-full font-semibold bg-red-400 bg-opacity-40 w-[126px] max-md:pr-5 max-md:ml-2.5 hover:bg-red-200 rounded-xl active:bg-white">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full border-solid border-[5px] border-orange-600 border-opacity-20 min-h-[6px] max-md:mt-10 max-md:max-w-full" />
      <div className="self-center mt-14 text-5xl font-extrabold leading-none text-red-600 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Top Diploma in Engineering Colleges in Rajasthan
      </div>
      <div className="flex relative flex-col self-center px-0.5 mt-16 w-full max-w-[1700px] min-h-[386px] max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20f5f80a19bc01b8c292ab5eb352d5350a166664d76682265b42e4ca9f4e1e1a?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative z-10 flex-col px-9 pt-11 pb-4 w-full min-h-[388px] max-md:px-5 max-md:max-w-full">
          {/* <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aede3ccd552f35dc3ff727120641db01203f19e5ccd78a60e29ef1a2282fe18c?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
            className="object-cover absolute inset-0 size-full"
          /> */}
          <div className="relative z-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow mt-1 font-extrabold max-md:mt-10">
                  <div className="flex relative flex-col pt-52 w-full text-2xl leading-loose text-black rounded-2xl aspect-[1.385] max-md:pt-24">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cc224e4f736f2e94d94a121f3b1122f04a625ede1efb056beb05854f22efd69e?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc224e4f736f2e94d94a121f3b1122f04a625ede1efb056beb05854f22efd69e?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc224e4f736f2e94d94a121f3b1122f04a625ede1efb056beb05854f22efd69e?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc224e4f736f2e94d94a121f3b1122f04a625ede1efb056beb05854f22efd69e?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc224e4f736f2e94d94a121f3b1122f04a625ede1efb056beb05854f22efd69e?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc224e4f736f2e94d94a121f3b1122f04a625ede1efb056beb05854f22efd69e?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc224e4f736f2e94d94a121f3b1122f04a625ede1efb056beb05854f22efd69e?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc224e4f736f2e94d94a121f3b1122f04a625ede1efb056beb05854f22efd69e?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                      className="object-cover absolute inset-0 size-full"
                    />
                    
                  </div>
                  <div className="flex relative z-10 flex-col px-8 pt-2 pb-10 mb-0 aspect-[5.362] max-md:px-5 max-md:-mr-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eaa1bed83036d063996b8fc1d457455c7fdf218c3490e74ef325c76ace66e95?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                        className="object-cover absolute inset-0 size-full"
                      />
                      Aarav Private ITI College
                    </div>
                    <button className='hover:bg-red-100 active:bg-red-500'>READ MORE</button>
                  
                  {/* <div className="self-center mt-5 text-base leading-4 text-white">
                    READ MORE
                  </div> */}
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow mt-1 font-extrabold max-md:mt-10">
                <div className="flex relative flex-col pt-52 w-full text-2xl leading-loose text-black rounded-2xl aspect-[1.385] max-md:pt-24">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6bd7ec9f07f05f1bea362a12bfbb27d9954e4c00b7a5345a1f41f1d3cec39027?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bd7ec9f07f05f1bea362a12bfbb27d9954e4c00b7a5345a1f41f1d3cec39027?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bd7ec9f07f05f1bea362a12bfbb27d9954e4c00b7a5345a1f41f1d3cec39027?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bd7ec9f07f05f1bea362a12bfbb27d9954e4c00b7a5345a1f41f1d3cec39027?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bd7ec9f07f05f1bea362a12bfbb27d9954e4c00b7a5345a1f41f1d3cec39027?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bd7ec9f07f05f1bea362a12bfbb27d9954e4c00b7a5345a1f41f1d3cec39027?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bd7ec9f07f05f1bea362a12bfbb27d9954e4c00b7a5345a1f41f1d3cec39027?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bd7ec9f07f05f1bea362a12bfbb27d9954e4c00b7a5345a1f41f1d3cec39027?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                      className="object-cover absolute inset-0 size-full"
                    />
                   
                  </div>
                  <div className="flex relative z-10 flex-col px-8 pt-2 pb-10 mb-0 aspect-[5.362] max-md:px-5 max-md:-mr-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eaa1bed83036d063996b8fc1d457455c7fdf218c3490e74ef325c76ace66e95?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                        className="object-cover absolute inset-0 size-full"
                      />
                      Abu Road Polytechnic College
                    </div>
                    <button className='hover:bg-red-100 active:bg-red-500'>READ MORE</button>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow mt-1 font-extrabold max-md:mt-10">
                <div className="flex relative flex-col pt-52 w-full text-2xl leading-loose text-black rounded-2xl aspect-[1.385] max-md:pt-24">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fe38dd08f65e1a693a58daeae632feaa832c497a26567e9519be35b591e33f9d?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe38dd08f65e1a693a58daeae632feaa832c497a26567e9519be35b591e33f9d?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe38dd08f65e1a693a58daeae632feaa832c497a26567e9519be35b591e33f9d?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe38dd08f65e1a693a58daeae632feaa832c497a26567e9519be35b591e33f9d?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe38dd08f65e1a693a58daeae632feaa832c497a26567e9519be35b591e33f9d?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe38dd08f65e1a693a58daeae632feaa832c497a26567e9519be35b591e33f9d?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe38dd08f65e1a693a58daeae632feaa832c497a26567e9519be35b591e33f9d?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe38dd08f65e1a693a58daeae632feaa832c497a26567e9519be35b591e33f9d?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                      className="object-cover absolute inset-0 size-full"
                    />
                    
                  </div>
                  <div className="flex relative z-10 flex-col px-8 pt-2 pb-10 mb-0 aspect-[5.362] max-md:px-5 max-md:-mr-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eaa1bed83036d063996b8fc1d457455c7fdf218c3490e74ef325c76ace66e95?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                        className="object-cover absolute inset-0 size-full"
                      />
                      Advait Vedanta Institute of Technology
                    </div>
                    <button className='hover:bg-red-100 active:bg-red-500'>READ MORE</button>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow font-extrabold max-md:mt-10">
                <div className="flex relative flex-col pt-52 w-full text-2xl leading-loose text-black rounded-2xl aspect-[1.385] max-md:pt-24">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3d865f511e2325a06659c707daf1d65c55d527a7bf326d12872a8b0807b62282?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d865f511e2325a06659c707daf1d65c55d527a7bf326d12872a8b0807b62282?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d865f511e2325a06659c707daf1d65c55d527a7bf326d12872a8b0807b62282?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d865f511e2325a06659c707daf1d65c55d527a7bf326d12872a8b0807b62282?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d865f511e2325a06659c707daf1d65c55d527a7bf326d12872a8b0807b62282?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d865f511e2325a06659c707daf1d65c55d527a7bf326d12872a8b0807b62282?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d865f511e2325a06659c707daf1d65c55d527a7bf326d12872a8b0807b62282?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d865f511e2325a06659c707daf1d65c55d527a7bf326d12872a8b0807b62282?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                      className="object-cover absolute inset-0 size-full"
                    />
                    
                  </div>
                  <div className="flex relative z-10 flex-col px-8 pt-2 pb-10 mb-0 aspect-[5.362] max-md:px-5 max-md:-mr-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eaa1bed83036d063996b8fc1d457455c7fdf218c3490e74ef325c76ace66e95?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                        className="object-cover absolute inset-0 size-full"
                      />
                      Agarwal PG College
                    </div>
                    <button className='hover:bg-red-100 active:bg-red-500'>READ MORE</button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex relative flex-wrap gap-5 justify-between self-center w-full max-w-[1393px] max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f9e1e04d7d44725a04c61110dbe0c580cc4c7f3f88ff64510ecf5c30e4098ff?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
              className="object-contain shrink-0 max-w-full aspect-[3.85] w-[150px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/96e32643d959fb6b8f333251db685b6dc39835908870e24fdbebaafabeb12f02?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
              className="object-contain aspect-[25] w-[983px] max-md:max-w-full"
            />
          </div> */}
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/82e010146e707f5152ed1a8a9fa901db23f23a9c8c7704a76b278b5b1da59696?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e010146e707f5152ed1a8a9fa901db23f23a9c8c7704a76b278b5b1da59696?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e010146e707f5152ed1a8a9fa901db23f23a9c8c7704a76b278b5b1da59696?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e010146e707f5152ed1a8a9fa901db23f23a9c8c7704a76b278b5b1da59696?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e010146e707f5152ed1a8a9fa901db23f23a9c8c7704a76b278b5b1da59696?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e010146e707f5152ed1a8a9fa901db23f23a9c8c7704a76b278b5b1da59696?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e010146e707f5152ed1a8a9fa901db23f23a9c8c7704a76b278b5b1da59696?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e010146e707f5152ed1a8a9fa901db23f23a9c8c7704a76b278b5b1da59696?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
        className="object-contain mt-14 w-full aspect-[4.1] max-md:mt-10 max-md:max-w-full"
      />
      <div className="flex mt-80 w-full bg-red-400 min-h-[443px] max-md:mt-10 max-md:max-w-full" />
    </div>
    </>
  )
}

export default App
