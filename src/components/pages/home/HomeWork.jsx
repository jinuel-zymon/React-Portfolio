import React from 'react'
import HomeSectionTitle from './HomeSectionTitle'
import HomeCard from './HomeCard'

const HomeWork = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container">
      <HomeSectionTitle
        title="work."
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta neque minima veritatis sequi consequuntur laborum, eveniet expedita possimus totam ab dolore dicta optio beatae debitis ipsam error fugiat consequatur et!"
        isHidden={false}
        />

        <div className='work-items grid md:grid-cols-2 gap-10'>
          <HomeCard
          image="https://via.placeholder.com/600x400"
          date="November 13, 2019"
          title="Some Case Study"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident exercitationem adipisci modi ducimus optio tempora, itaque, incidunt doloribus facere quis ullam vitae sit in unde minus architecto necessitatibus, sapiente aut?"
          />
          <HomeCard
          image="https://via.placeholder.com/600x400"
          date="November 20, 2019"
          title="Some Case Study"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident exercitationem adipisci modi ducimus optio tempora, itaque, incidunt doloribus facere quis ullam vitae sit in unde minus architecto necessitatibus, sapiente aut?"
          />

        </div>
      </div>
    </section>
  )
}

export default HomeWork