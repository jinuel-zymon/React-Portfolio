import React from 'react'
import HomeSectionTitle from './HomeSectionTitle'

const HomeContact = () => {
  return (
    <section className='py-24 bg-primary'>
      <div className="container">
      <HomeSectionTitle
        title="contact."
        content=""
        isHidden={true}
        />

        <div className='flex flex-col md:flex-row gap-10'>

         
          <img src="https://via.placeholder.com/300x150" alt="" className='md:basis-[30%]'/>

          <div className="contact-text md:basis-[70%] text-accent flex flex-col justify-between text-center md:text-start">
            <h5 className=' max-w-[40rem] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatum at corporis natus! Consequatur animi iure id inventore ea. Deserunt neque nobis fugiat cum quia quaerat consectetur libero consequuntur non.</h5>
            <div className="flex flex-col">
            <h5 className='font-semibold mb-1'>johndoe@mail.com</h5>
            <h5 className='font-semibold mb-1'>twitter.com/johndoe</h5>
            <h5 className='font-semibold mb-1'>behance.com/johndoe</h5>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default HomeContact