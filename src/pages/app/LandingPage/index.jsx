import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import CategoryData from './categoryData.json'
import JobData from './jobData.json'
import { Link } from 'react-router'
import CategoryCard from './components/category-section/CategoryCard'
import JobCard from './components/job-section/JobCard'

const LandingPage = () => {
  const [categories, setCategories] = useState([])
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    setCategories(CategoryData)
    setJobs(JobData)
  }, [])
  return (
    <>
      <div className="bg-grayF8 py-[82px]">
        <div className='container mx-auto px-5'>
          <div>
            <div className="flex flex-col max-w-[500px]">
              <h3 className="text-black25 font-bold text-[48px] lg:text-[72px]">Discover</h3>
              <h3 className="text-black25 font-bold text-[48px] lg:text-[72px]">more than</h3>
              <h3 className="text-[#26A4FF] font-bold text-[48px] lg:text-[72px]">5000+Jobs</h3>
              <img src='/assets/imgs/svg/line.svg' alt='' width='100' height='50' className='w-full' />
            </div>
            <span className='text-[#515B6F] text-xl max-w-[500px] inline-block my-6'>
              Great platform for the job seeker that searching for new career heights and passionate about startups.
            </span>
          </div>
          <div className='bg-white w-full lg:max-w-[70%] p-4 mb-4 shadow-sm'>
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-3'>
                <div className='flex flex-col lg:flex-row flex-1 gap-3'>
                  <div className='flex items-center gap-1 flex-1'>
                    <img src="/assets/imgs/svg/search.svg" alt="" width='20' height='20'/>
                    <Input placeholder="Job title or keyword" className='border-none shadow-none' style={{borderBottom: '1px solid #D6DDEB'}}/>
                  </div>
                  <div className='flex items-center gap-1 flex-1'>
                    <img src="/assets/imgs/svg/location.svg" alt="" width='20' height='20'/>
                    <Select>
                      <SelectTrigger className='border-none shadow-none'  style={{borderBottom: '1px solid #D6DDEB'}}>
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full lg:w-[120px]" size="lg">Search my job</Button>
            </div>
          </div>
          <span className='text-footer'>Popular : UI Designer, UX Researcher, Android, Admin</span>
        </div>
      </div>
      <div className='container mx-auto px-5'>
        {/* company help */}
        <div className='py-[48px]'>
          <span className='text-footer inline-block text-lg'>Companies we helped grow</span>
          <div className='grid grid-cols-2 gap-3 lg:flex lg:items-center lg:justify-between mt-8'>
            <img src="/assets/imgs/company-helps/c1.svg" alt="" width='154' height='40'/>
            <img src="/assets/imgs/company-helps/c2.svg" alt="" width='154' height='40'/>
            <img src="/assets/imgs/company-helps/c3.svg" alt="" width='154' height='40'/>
            <img src="/assets/imgs/company-helps/c4.svg" alt="" width='154' height='40'/>
            <img src="/assets/imgs/company-helps/c5.svg" alt="" width='154' height='40'/>
          </div>
        </div>
        {/* categories */}
        <div>
          <div className='flex flex-col gap-3 lg:gap-0 lg:flex-row lg:items-center justify-between mb-[48px]'>
            <h3 className='text-[48px] font-bold'>
              <span className='text-footer'>Explore by </span>
              <span className='text-primary'>category</span>
            </h3>
            <Link to='/' className='flex gap-1 items-center text-primary font-bold'>
              <span>Show all jobs</span> 
              <img src="/assets/imgs/svg/arrow-right.svg" alt="" width="20" height="20" style={{filter: "brightness(0) saturate(100%) invert(25%) sepia(37%) saturate(5487%) hue-rotate(237deg) brightness(86%) contrast(102%)"}} />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
        <div className='my-[48px]'>
          <img src="/assets/imgs/others/CTA-Section.png" alt="" width="100" height="50" className="w-full" />
        </div>
        {/* jobs */}
        <div className='pb-[48px]'>
          <div className='flex flex-col lg:flex-row gap-3 lg:gap-0 lg:items-center justify-between mb-6 lg:mb-[48px]'>
            <h3 className='text-[48px] font-bold'>
              <span className='text-footer'>Featured </span>
              <span className='text-primary'>jobs</span>
            </h3>
            <Link to='/' className='flex gap-1 items-center text-primary font-bold'>
              <span>Show all jobs</span> 
              <img src="/assets/imgs/svg/arrow-right.svg" alt="" width="20" height="20" style={{filter: "brightness(0) saturate(100%) invert(25%) sepia(37%) saturate(5487%) hue-rotate(237deg) brightness(86%) contrast(102%)"}} />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-8">
            {jobs.map((job, index) => (
                <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </div>
      {/* last jobs open */}
      <div className='pb-[48px] pt-5 lg:py-[48px] bg-grayF8'>
        <div className='container mx-auto px-5'>
          <div className='flex flex-col lg:flex-row gap-3 lg:gap-0 lg:items-center justify-between mb-6 lg:mb-[48px]'>
            <h3 className='text-[48px] font-bold'>
              <span className='text-footer'>Latest </span>
              <span className='text-primary'>jobs open</span>
            </h3>
            <Link to='/' className='flex gap-1 items-center text-primary font-bold'>
              <span>Show all jobs</span> 
              <img src="/assets/imgs/svg/arrow-right.svg" alt="" width="20" height="20" style={{filter: "brightness(0) saturate(100%) invert(25%) sepia(37%) saturate(5487%) hue-rotate(237deg) brightness(86%) contrast(102%)"}} />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
            {jobs.map((job, index) => (
                <JobCard key={index} {...job} isShowDescription={false} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage