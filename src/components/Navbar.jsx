import { useState } from 'react'
import { Link } from 'react-router-dom'
import navMenu from '../navigation/navMenu'
import { Drawer, Icon, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Close } from '@mui/icons-material'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [active, setActive] = useState("Home")
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <nav className='w-full flex items-center py-5 fixed top-0 z-20 bg-primary'>
      <div className='w-full px-12 flex justify-between items-center max-w-7x1 mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0,0)
          }}
        >
          Home
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navMenu.map(link => (
            <li 
              key={link.name}
              className={`${
                active === link.name ? 'text-white' : 'text-secondary'
              } hover:text-white cursor-pointer`}
              onClick={() => setActive(link.name)}
            >
              <a href={`#${link.path}`}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="block sm:hidden">
          <IconButton className='hidden' onClick={() => setOpenDrawer(true)}>
            <MenuIcon className='text-white' />
          </IconButton>
        </div>
        
        <Drawer
          anchor={'right'}
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <div className="bg-primary text-white h-screen">
            <div className="flex justify-between">
              <h4 className='p-7'>Home</h4>
              <IconButton onClick={() => setOpenDrawer(false)}>
                <Close className='text-white' />
              </IconButton>
            </div>

            <ul className="list-none w-60 p-7">
              {navMenu.map(link => (
                <li
                  key={link.name}
                  className={`${ 
                    active === link.name ? 'text-white' : 'text-secondary'
                  } hover:text-white cursor-pointer pb-4`}
                >
                  <Icon component={link.icon} className='px-1' />
                  <a className="mx-2" href={`#${link.path}`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </Drawer>
      </div>
    </nav>
  )
}

export default Navbar