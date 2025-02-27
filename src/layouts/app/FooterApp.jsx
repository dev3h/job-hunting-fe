import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Link } from 'react-router'

const FooterApp = () => {
  return (
    <footer className='py-[40px] lg:py-[64px] bg-footer text-txtFooter px-5'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between'>
          {/* col 1 */}
          <div className='flex-1'>
            <img src="/assets/imgs/logos/logo-light.svg" alt="logo" width='150' height='50' />
            <span className='mt-8 inline-block'>Great platform for the job seeker that passionate about startups. Find your dream job easier.</span>
          </div>
          {/* col 2 */}
          <div className='flex-1 lg:w-1/3 flex justify-between lg:justify-around'>
            <div>
              <h4 className='text-white font-bold'>About</h4>
              <ul className='mt-5 flex flex-col gap-4'>
                <li><Link to="/">Companies</Link></li>
                <li><Link to="/">Pricing</Link></li>
                <li><Link to="/">Terms</Link></li>
                <li><Link to="/">Advice</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-bold'>Resources</h4>
              <ul className='mt-5 flex flex-col gap-4'>
                <li><Link to="/">Help Docs</Link></li>
                <li><Link to="/">Guide</Link></li>
                <li><Link to="/">Updates</Link></li>
                <li><Link to="/">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          {/* col 3 */}
          <div className='flex-1'>
            <h4 className='text-white font-bold'>Get job notifications</h4>
            <span className='mt-2 lg:mt-5 inline-block'>The latest job news, articles, sent to your inbox weekly.</span>
            <div className='flex flex-col lg:flex-row gap-2 mt-4 lg:mt-[40px]'>
              <Input placeholder="Enter your email"/>
              <Button className="rounded-none w-[120px]">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterApp