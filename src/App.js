// import logo from './logo.svg';
// import './App.css';
// import Box1 from './components/Box1';
// import Main from './components/Main';

// function App() {
//   return (
//     <div classNameName="App">

//   <Main/>

//     </div>

//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedTab, setSelectedTab] = useState('About Me');
  const [showGallery, setShowGallery] = useState(false);
  const handleTabChange = (tab) =>
     {
    setSelectedTab(tab);
  };

  const handleGalleryClick = () =>
     {
    setShowGallery(!showGallery);
  };
const [translateX, setTranslateX] = useState(0);

  const moveLeft = () => {
    setTranslateX(translateX - 100); // Move left by 100px
  };

  const moveRight = () => {
    setTranslateX(translateX + 100); // Move right by 100px
  };
  return (
<div id="root   ">

<div className=" w-[100vw] h-[100vh] wrapper">
<div className="fixed lg:right-10 lg:w-[45%] w-full md:px-5 max-md:px-5 min-h-screen min-w-screen max-h-screen-2xl flex flex-col items-center justify-center gap-5 overflow-hidden ">
<div className="box  min-h-[320px] max-h-[320px] relative flex items-center bg-neutral-700 py-2 rounded-3xl w-full shadow-md shadow-black gap-2 px-3">

<div className='flex flex-col justify-center items-center gap-2 m-[2rem] relative'>
<div className=" absolute z-30 -left-10 top-32 flex flex-col gap-1 p-2 h-full"><div className="flex gap-1"><div className="w-2 h-2 bg-neutral-600 rounded-sm"></div><div className="w-2 h-2 bg-neutral-600 rounded-sm"></div></div><div className="flex gap-1"><div className="w-2 h-2 bg-neutral-600 rounded-sm"></div><div className="w-2 h-2 bg-neutral-600 rounded-sm"></div></div><div className="flex gap-1"><div className="w-2 h-2 bg-neutral-600 rounded-sm"></div><div className="w-2 h-2 bg-neutral-600 rounded-sm"></div></div></div>
<div className="header flex item-center justify-center rounded-3xl bg-neutral-900 p-2 w-full relative">
  

  <div className="tabs flex justify-center relative gap-3 w-full">
    <button
      className={`tab ${selectedTab === 'About Me' ? 'active relative transition-colors duration-300 z-10 p-3 rounded-3xl text-lg w-1/3 text-center cursor-pointer font-bold bg-neutral-800 shadow-2xl shadow-black text-neutral-200' : 'relative transition-colors duration-300 z-10 p-3 rounded-3xl text-lg w-1/3 text-center cursor-pointer font-bold text-neutral-400'} `}
      onClick={() => handleTabChange('About Me')}
    >
      About Me
    </button>
    <button
      className={`tab ${selectedTab === 'Experiences' ? 'active  relative transition-colors duration-300 z-10 p-3 rounded-3xl text-lg w-1/3 text-center cursor-pointer font-bold bg-neutral-800 shadow-2xl shadow-black text-neutral-200' : 'relative transition-colors duration-300 z-10 p-3 rounded-3xl text-lg w-1/3 text-center cursor-pointer font-bold text-neutral-400'}` }
      onClick={() => handleTabChange('Experiences')}
    >
      Experiences
    </button>
    <button
      className={`tab ${selectedTab === 'Recommended' ? 'active relative transition-colors duration-300 z-10 p-3 rounded-3xl text-lg w-1/3 text-center cursor-pointer font-bold bg-neutral-800 shadow-2xl shadow-black text-neutral-200' : 'relative transition-colors duration-300 z-10 p-3 rounded-3xl text-lg w-1/3 text-center cursor-pointer font-bold text-neutral-400'} `}
      onClick={() => handleTabChange('Recommended')}
    >
      Recommended
    </button>
  </div>



</div>


<div className="content p-2 text-lg text-neutral-400">
  {selectedTab === 'About Me' && (
    <div className="about-me flex flex-col items-center justify-content gap-2 leading-8">
      <p>
        Hello! I'm Dave, your sales rep here from Salesforce. I've been
        working at this awesome company for 3 years now.
      </p>
      <p>
        I was born and raised in Albany, NY & have been living in Santa
        Carla for the past 10 years my wife Tiffany and my 4 year old twin
        daughters - Emma and Ella. Both of them are just starting school,
        so my calendar is usually blocked between 9 - 10 AM. This is a...
      </p>
    </div>
  )}
  {selectedTab === 'Experiences' && (
    <div className="experiences leading-8">
      {/* Add content for Experiences tab */}


      <p>
      I have 5 years of experience in sales and have been working at Salesforce for the past 3 years. I've been able to close 50 deals in the past 6 months, and I'm looking forward to closing more deals in the future.
      </p>
      <p>
      I have a Bachelor's degree in Computer Science from the University of California, Berkeley. I've also...
      </p>


    </div>
  )}
  {selectedTab === 'Recommended' && (
    <div className="recommended ">
      {/* Add content for Recommended tab */}
      <div className="p-2 text-lg text-neutral-400 leading-8">
        <div className="flex flex-col items-center justify-content gap-2 h-48 overflow-y-scroll pr-2 rec-widget">
          <p>I would recommend the following products to you based on your previous purchases:</p>
          <div className="flex flex-col items-start justify-start">
            <p class="font-bold">1. Salesforce CRM</p>
            <p>Salesforce CRM is a customer relationship management software that helps businesses manage their sales, marketing, and customer service activities.</p>
            <p className="font-bold">2. HubSpot CRM</p>
            <p>HubSpot CRM is a free customer relationship management software that helps businesses manage their sales, marketing, and customer service activities.</p>
            <p className="font-bold">3. Zoho CRM</p>
            <p>Zoho CRM is a customer relationship management software that helps businesses manage their sales, marketing, and customer service activities.</p></div></div></div>

    </div>

  )}
  
</div>

</div>
<div className="w-6 h-16 rounded-lg bg-neutral-600 shadow-lg shadow-black bg-gradient-to-b from-neutral-400 to-neutral-600"></div>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="absolute top-5 left-3 text-3xl text-neutral-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path></svg>
</div>
<div className="w-3/4 bg-neutral-700 h-1 shadow-xl shadow-black">
</div>
<div className="relative flex items-center bg-neutral-700 py-6 rounded-3xl shadow-md shadow-black gap-2 px-3 pr-16 w-full select-none">
<div className="relative flex flex-col gap-1 p-2 h-full">
<div className="flex gap-1">
<div className="w-2 h-2 bg-neutral-600 rounded-sm">
</div>
<div className="w-2 h-2 bg-neutral-600 rounded-sm">
</div>
</div>
<div className="flex gap-1">
<div className="w-2 h-2 bg-neutral-600 rounded-sm">
</div>
<div className="w-2 h-2 bg-neutral-600 rounded-sm">
</div>
</div>
<div className="flex gap-1">
<div className="w-2 h-2 bg-neutral-600 rounded-sm">
</div>
<div className="w-2 h-2 bg-neutral-600 rounded-sm">
</div>
</div>
</div>





















<div className="flex flex-col justify-center items-center gap-2 w-full">
<div className="flex items-end justify-between rounded-3xl w-full">
<div className="text-neutral-300 bg-neutral-900 py-4 px-12 text-center rounded-3xl text-lg cursor-pointer font-bold">
Gallery</div>
<div className="flex justify-end items-end gap-3">
<button className="flex items-center gap-3 text-neutral-300 shadow-inner shadow-neutral-300 rounded-full font-bold">
<input className="hidden" type="file" name="add-image" id="add-image"/>
<label className="flex items-center gap-3 text-neutral-300 shadow-xl shadow-black py-3 px-5 rounded-full cursor-pointer" for="add-image">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
</path>
</svg>
 Add Image</label>
</button>
<div onClick={moveLeft} className="rounded-full transition-all duration-200 ease-in-out bg-neutral-900 text-neutral-500 p-2 text-xl hover:text-white hover:bg-gradient-to-br hover:from-neutral-300 hover:to-neutral-950 cursor-pointer">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z">
</path>
</svg>
</div>
<div onClick={moveRight} className="rounded-full transition-all duration-200 ease-in-out bg-neutral-900 text-neutral-500 p-2 text-xl hover:text-white hover:bg-gradient-to-br hover:from-neutral-300 hover:to-neutral-950 cursor-pointer scroll-mx-12" >
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
</path>
</svg>
</div>
</div>
</div>
<div className="flex items-center gap-6 p-6 overflow-x-scroll gallery select-none max-w-[100%] object-fill"  >
<img style={{ transform: `translateX(${translateX}px)` }}  src="https://images.unsplash.com/photo-1712238318704-b4fd7e5db652?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D" alt="image-1"  className=" rounded-3xl grayscale hover:grayscale-0 hover:saturate-200  h-32 object-cover shadow-md transition-transform aspect-square duration-300 hover:-rotate-2 hover:scale-110 hover:shadow-lg hover:shadow-black "/>
<img style={{ transform: `translateX(${translateX}px)` }} src="https://images.unsplash.com/photo-1599751229070-854ae5c90869?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D" alt="image-2" className="rounded-3xl grayscale hover:grayscale-0 hover:saturate-200  h-32 object-cover shadow-md transition-transform aspect-square duration-300 hover:-rotate-2 hover:scale-110 hover:shadow-lg hover:shadow-black"/>
<img style={{ transform: `translateX(${translateX}px)` }} src="https://images.unsplash.com/photo-1722482445570-d1ce1b10e7bb?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D" alt="image-3" className="rounded-3xl grayscale hover:grayscale-0 hover:saturate-200  h-32 object-cover shadow-md transition-transform aspect-square duration-300 hover:-rotate-2 hover:scale-110 hover:shadow-lg hover:shadow-black"/>
<img style={{ transform: `translateX(${translateX}px)` }} src="https://images.unsplash.com/photo-1567497207066-03e0a0570fb8?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D" alt="image-4" className="rounded-3xl grayscale hover:grayscale-0 hover:saturate-200  h-32 object-cover shadow-md transition-transform aspect-square duration-300 hover:-rotate-2 hover:scale-110 hover:shadow-lg hover:shadow-black"/>
<img style={{ transform: `translateX(${translateX}px)` }} src="https://images.unsplash.com/photo-1708797249628-b2059687b1b2?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D" alt="image-5" className="rounded-3xl grayscale hover:grayscale-0 hover:saturate-200  h-32 object-cover shadow-md transition-transform aspect-square duration-300 hover:-rotate-2 hover:scale-110 hover:shadow-lg hover:shadow-black"/>
<img style={{ transform: `translateX(${translateX}px)` }} src="https://images.unsplash.com/photo-1614181081801-f241632a4d49?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D" alt="image-6" className="rounded-3xl grayscale hover:grayscale-0 hover:saturate-200  h-32 object-cover shadow-md transition-transform aspect-square duration-300 hover:-rotate-2 hover:scale-110 hover:shadow-lg hover:shadow-black"/>
<img style={{ transform: `translateX(${translateX}px)` }} src="https://images.unsplash.com/photo-1713203403441-4a3137c6f39b?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D" alt="image-7" className="rounded-3xl grayscale hover:grayscale-0 hover:saturate-200  h-32 object-cover shadow-md transition-transform aspect-square duration-300 hover:-rotate-2 hover:scale-110 hover:shadow-lg hover:shadow-black"/>
<img style={{ transform: `translateX(${translateX}px)` }}  src="https://images.unsplash.com/photo-1465374142464-8984179505b2?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwZHluYW1pY3xlbnwwfHwwfHx8MA%3D%3D" alt="image-8" className="rounded-3xl grayscale hover:grayscale-0 hover:saturate-200  h-32 object-cover shadow-md transition-transform aspect-square duration-300 hover:-rotate-2 hover:scale-110 hover:shadow-lg hover:shadow-black"/>
<img style={{ transform: `translateX(${translateX}px)` }} src="https://images.unsplash.com/photo-1724169913511-24a5c21b151a?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlJTIwZHluYW1pY3xlbnwwfHwwfHx8MA%3D%3D" alt="image-9" className="rounded-3xl grayscale hover:grayscale-0 hover:saturate-200  h-32 object-cover shadow-md transition-transform aspect-square duration-300 hover:-rotate-2 hover:scale-110 hover:shadow-lg hover:shadow-black"/>
<img style={{ transform: `translateX(${translateX}px)` }}  src="https://images.unsplash.com/photo-1723134081522-0de16b0a5387?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D" alt="image-10" className="rounded-3xl grayscale hover:grayscale-0 hover:saturate-200  h-32 object-cover shadow-md transition-transform aspect-square duration-300 hover:-rotate-2 hover:scale-110 hover:shadow-lg hover:shadow-black"/>
<img style={{ transform: `translateX(${translateX}px)` }}  src="https://images.unsplash.com/photo-1699745953504-db98697c2331?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D" alt="image-11" className="rounded-3xl grayscale hover:grayscale-0 hover:saturate-200  h-32 object-cover shadow-md transition-transform aspect-square duration-300 hover:-rotate-2 hover:scale-110 hover:shadow-lg hover:shadow-black"/>
<img style={{ transform: `translateX(${translateX}px)` }} src="https://images.unsplash.com/photo-1699745954535-5770e1665732?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D" alt="image-12" className="rounded-3xl grayscale hover:grayscale-0 hover:saturate-200  h-32 object-cover shadow-md transition-transform aspect-square duration-300 hover:-rotate-2 hover:scale-110 hover:shadow-lg hover:shadow-black"/>
<img style={{ transform: `translateX(${translateX}px)` }} src="https://images.unsplash.com/photo-1646569278931-b4a839f89b8c?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D" alt="image-13" className="rounded-3xl grayscale hover:grayscale-0 hover:saturate-200  h-32 object-cover shadow-md transition-transform aspect-square duration-300 hover:-rotate-2 hover:scale-110 hover:shadow-lg hover:shadow-black"/>
</div>
</div>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="absolute top-5 left-3 text-3xl text-neutral-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z">
</path>
</svg>
<div className="fixed inset-0 hidden">
<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
<div className="bg-neutral-900 text-white p-5 rounded-lg w-96">
<h1 className="text-2xl font-bold text-center">
Image Upload</h1>
<p className="text-center text-lg mt-3">
Image Uploaded Successfully</p>
<button className="bg-blue-500 text-white w-full py-2 mt-5 rounded-lg">
Close</button>
</div>
</div>
</div>
</div>
<div className="w-3/4 bg-neutral-700 h-1 shadow-xl shadow-black">
</div>
</div>
</div>
</div>

  );
}

export default App;
