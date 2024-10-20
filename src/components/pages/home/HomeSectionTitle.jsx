import React from 'react'

const HomeSectionTitle = ({title, content, isHidden}) => {
  return (
    <div className='mb-20'>
    <h1 className='text-pale text-center md:text-start'>{title}</h1>
    <h5 className={`text-accent text-center md:text-start max-w-[50rem] ${isHidden ? "hidden" : ""}`}>{content}</h5>
    </div>
  )
}

export default HomeSectionTitle