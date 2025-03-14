import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink  } from 'react-router'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import styled from 'styled-components'

const HeaderApp = ({isLandingPage = false}) => {
  return (
    <header className={`h-[78px] flex items-center ${isLandingPage ? 'bg-grayF8' : 'bg-#fff'}`}>
      <div className='container mx-auto px-5'>
        <div className='flex items-center justify-between'>
          {/* header left */}
          <div className='header-left flex items-center w-1/2'>
            <Link to='/'><img src="/assets/imgs/logos/logo.svg" alt="logo" width='150' height='50' /></Link>
            <nav id='header-nav' className='ml-12 hidden lg:block'>
              <ul className='flex items-center gap-4'>
                <li><HeaderNavLink  to="job" className="text-txtHeader">Find Jobs</HeaderNavLink></li>
                <li><HeaderNavLink  to="/" className="text-txtHeader">Browse Companies</HeaderNavLink></li>
              </ul>
            </nav>
          </div>
          {/* header right */}
          <div className='header-right flex-1 justify-end hidden lg:flex'>
            <div className='flex items-center'>
              <Link to="/auth/login" className='text-primary py-3 px-6 inline-block'>Login</Link>
              <div className='mx-2 h-full w-[2px] bg-txtFooter'></div>
              <Link to="/auth/register" className='text-white py-3 px-6 inline-block bg-primary rounded-sm'>Sign Up</Link>
            </div>
          </div>
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger><img src="/assets/imgs/svg/bar.svg" alt="" width='40' height='40' /></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Find Jobs</DropdownMenuItem>
                <DropdownMenuItem>Browse Companies</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Login</DropdownMenuItem>
                <DropdownMenuItem>Sign Up</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
HeaderApp.propTypes = {
  isLandingPage: PropTypes.bool
}
const HeaderNavLink = styled(NavLink)`
  padding-bottom: 12px;
  &.active {
    color: var(--primary);
    border-bottom: 2px solid var(--primary);
  }
  &:not(.active):hover {
    color: var(--primary);
  }
`

export default HeaderApp