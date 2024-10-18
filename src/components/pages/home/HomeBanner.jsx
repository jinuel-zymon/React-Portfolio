import React from 'react'
import { Link } from 'react-router-dom'

const HomeBanner = () => {
  return (
    <section className="py-24 bg-primary">
    <div className="container">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="basis-[50%]">
          <div className='mb-10'>
          <h4 className='text-accent mb-0'>Hello, I'm John,</h4>
          <h1 className='text-accent '>Product Designer</h1>
          <h4 className='text-accent mb-0'>based in Netherland.</h4>
          </div>
          <Link to="/" className='uppercase bg-pale border border-black py-3 px-10 hover:bg-black hover:text-white transition-all rounded-lg inline-block mr-2 mb-2'>Resume</Link>
        </div>

        <div className="basis-[50%] self-center grid place-content-center">
        <img src="https://via.placeholder.com/550x550" alt="" className="size-[450px] rounded-full"/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HomeBanner