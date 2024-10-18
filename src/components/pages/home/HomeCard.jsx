import React from 'react'

const HomeCard = ({image, date, title, content}) => {
  return (
    <div className="work-card w-[500px]">
    <img src={image} alt="" className='mb-1'/>
    <h6 className='text-accent italic mb-5 font-semibold'>{date}</h6>
    <h4 className='text-accent leading-none mb-3'>{title}</h4>
    <h6 className='text-accent font-semibold'>{content}</h6>
  </div>
  )
}

export default HomeCard