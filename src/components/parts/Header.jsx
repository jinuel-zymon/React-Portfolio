import { Instagram, Linkedin, Menu, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isShow, setIsShow] = React.useState(false)
  const handleShow = () => setIsShow(!isShow);

  return (
    <header className='py-6 bg-primary'>
        <div className="container">
          <div className='flex justify-between items-center'>
          <Link to="/" className="text-accent font-bold group hover:text-accent text-[clamp(20px,_5.5vw,_35px)]">John Doe</Link>
          <nav className={`fixed lg:static top-[80px] h-screen lg:h-auto z-50 bg-primary w-full lg:w-auto transition-all ease-out
            duration-500 ${isShow ? "left-0" : "left-full"}`}>
            <ul className='flex flex-col items-center mt-24 lg:mt-0 lg:flex-row gap-10'>
              <li><Link className='text-accent font-semibold text-3xl lg:text-lg' to="/">Home</Link></li>
              <li><Link className='text-accent font-semibold text-3xl lg:text-lg' to="/about">About</Link></li>
              <li><Link className='text-accent font-semibold text-3xl lg:text-lg' to="/work">Work</Link></li>
            </ul>
          </nav>

          <ul className='flex gap-5'>
            <li><Link to="/"><Linkedin stroke={"#03045e"} fill={"#03045e"}/></Link></li>
            <li><Link to="/"><Instagram stroke={"#fbf8cc"} fill={"#03045e"}/></Link></li>
            <li><Link to="/"><Twitter stroke={"#03045e"} fill={"#03045e"}/></Link></li>

          </ul>
        
          <button className='lg:hidden' onClick={handleShow}><Menu stroke={"#03045e"} size={30}/></button>
          </div>
        </div>
      </header>
  )
}

export default Header