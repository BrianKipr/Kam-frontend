import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="shape" />
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-3/5 md:px-20">
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
          <p className='text-3xl leading-10'>
            <strong>Welcome to <span className='text-blue-400'>KAM Data Portal</span>.</strong></p>
            <p className='text-3xl leading-10'> Leverage Data Analytics For Effective Policy Advocacy brought to you by <span className='text-orange-600'><strong>Moringa School</strong></span>.
          </p>
          <a
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
          </a>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <img
            src="https://kam.co.ke/wp-content/uploads/2022/02/KAM-Logo.jpg"
            width={500}
            height={620}
            className=""
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
