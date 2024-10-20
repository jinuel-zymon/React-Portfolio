import { Dot } from 'lucide-react'
import React from 'react'
import HomeSectionTitle from './HomeSectionTitle'
import HomeBullet from './HomeBullet'

const HomeAbout = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container">
        <HomeSectionTitle
        title="about."
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta neque minima veritatis sequi consequuntur laborum, eveniet expedita possimus totam ab dolore dicta optio beatae debitis ipsam error fugiat consequatur et!"
        isHidden={false}
        />

        <div className='info flex flex-col items-center'>
        <HomeBullet
        years="2014-2018"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta neque minima veritatis sequi consequuntur laborum, eveniet expedita possimus totam ab dolore dicta optio beatae debitis ipsam error fugiat consequatur et!"
        />
        <HomeBullet
        years="2018-2020"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta neque minima veritatis sequi consequuntur laborum, eveniet expedita possimus totam ab dolore dicta optio beatae debitis ipsam error fugiat consequatur et!"
        />
        <HomeBullet
        years="2020-Present"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta neque minima veritatis sequi consequuntur laborum, eveniet expedita possimus totam ab dolore dicta optio beatae debitis ipsam error fugiat consequatur et!"
        />
        </div>
      </div>
    </section>
  )
}

export default HomeAbout