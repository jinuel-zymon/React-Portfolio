import { Dot } from 'lucide-react'
import React from 'react'

const HomeBullet = ({years, content}) => {
  return (
    <div className="text-card">
    <div className="text-year flex items-center content-center">
      <h5 className='text-accent leading-none p-0 mb-0'><Dot size={70} stroke={"#03045e"}/></h5>
      <h5 className='text-accent leading-none mb-0'>{years}</h5>
    </div>
    <h5 className='text-accent max-w-[50rem] font-semibold pl-20'>{content}</h5>
  </div>
  )
}

export default HomeBullet