import React from 'react'

const HomeSectionTitle = ({title, content}) => {
  return (
    <div className='mb-20'>
    <h1 className='text-pale'>{title}</h1>
    <h5 className='text-accent max-w-[50rem]'>{content}</h5>
    </div>
  )
}

export default HomeSectionTitle