import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React, { useEffect, useState } from 'react'
import FilterSection from './FilterSection'
import JobSectionFilter from './data/jobSectionData.json'
import JobData from './data/jobData.json'
import JobCard from './components/JobCard'
import styled from 'styled-components'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

const JobSearchPage = () => {
    const [selectionFilter, setSelectionFilter] = useState([])
    const [jobs, setJobs] = useState([])
    const [jobLayout, setJobLayout] = useState(1)
    useEffect(() => {
        setSelectionFilter(JobSectionFilter)
    }, []);
    useEffect(() => {
        setJobs(JobData)
    }, []);

    const changeLayoutJob = (layout) => {
        setJobLayout(layout)
    }

    return (
    <>
        <div className="bg-grayF8 py-[40px] lg:py-[82px]">
            <div className='container mx-auto px-5'>
                <div>
                    <h3 className="text-black25 flex flex-col lg:flex-row gap-3 w-full text-center lg:text-left justify-center font-bold text-[48px] lg:text-[72px]">
                        <span>Find your </span>
                        <div className='text-[#26A4FF] w-fit'>
                            <span>dream job</span>
                            <img src='/assets/imgs/svg/line.svg' alt='' width='100' height='50' className='w-full' />
                        </div>
                    </h3>
                    <span className='text-[#515B6F] text-xl text-center inline-block w-full my-6'>
                        Find your next career at companies like HubSpot, Nike, and Dropbox
                    </span>
                </div>
                <div className='bg-white w-full p-4 mb-4 shadow-sm'>
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
                        <Button className="w-full lg:w-[120px]" size="lg">Search</Button>
                    </div>
                </div>
                <span className='text-footer'>Popular : UI Designer, UX Researcher, Android, Admin</span>
            </div>
        </div>
        <div className='lg:hidden'>
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline' size='lg' className='w-full rounded-none shadow-none'>
                    <img src="/assets/imgs/svg/filter.svg" alt="" width='20' height='20'/>
                    <span>More Filters</span>
                </Button>
            </DialogTrigger>
            <DialogContent className='h-[80%] overflow-scroll'>
                <DialogHeader>
                    <DialogTitle>More Filters</DialogTitle>
                </DialogHeader>
                <FilterSection selectionFilter={selectionFilter} />
                <DialogFooter>
                    <Button type="submit">Apply</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        </div>
        <div className='container mx-auto px-5 my-[40px] lg:my-[72px]'>
            <div className='flex gap-[40px]'>
                <FilterSection className='w-[240px] hidden lg:block' selectionFilter={selectionFilter} />
                <div className='flex-1 lg:mt-4'>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 lg:justify-between lg:items-center w-full">
                            <h3 className="text-3xl font-semibold leading-tight text-slate-800 w-fit">All Jobs</h3>
                            <div className="flex flex-1 gap-6 justify-between items-center self-stretch my-auto min-w-60">
                                <span className="my-auto text-base leading-relaxed text-slate-500 inline-block">Showing 73 results</span>
                                <div className='flex items-center justify-end flex-1 gap-4'>
                                    <div className="flex gap-3 items-center text-base leading-relaxed">
                                        <span className="self-stretch my-auto text-right text-slate-500">
                                            Sort by:
                                        </span>
                                        <div className="flex gap-2 items-center self-stretch my-auto font-medium text-slate-800">
                                            <Select>
                                                <SelectTrigger className='border-none shadow-none'>
                                                    <SelectValue placeholder="Sort by" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="light">Most relevant</SelectItem>
                                                    <SelectItem value="dark">Newest</SelectItem>
                                                    <SelectItem value="dark">Oldest</SelectItem>
                                                    <SelectItem value="dark">Most popular</SelectItem>
                                                    <SelectItem value="dark">Highest salary</SelectItem>
                                                    <SelectItem value="dark">Lowest salary</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
    
                                    <div className="hidden lg:block h-8 bg-gray-800 border border-gray-800 opacity-10" />
    
                                    <div className="hidden lg:flex gap-4 items-start">
                                        <LayoutSwitcher className={`${jobLayout === 2 ? 'active' : null}`} onClick={() => changeLayoutJob(2)} aria-label="Change to layout two">
                                            <img src="/assets/imgs/svg/layout-two.svg" alt="" />
                                        </LayoutSwitcher>
                                        <LayoutSwitcher className={`${jobLayout === 1 ? 'active' : null}`} onClick={() => changeLayoutJob(1)} aria-label="Change to layout one">
                                            <img src="/assets/imgs/svg/layout-one.svg" alt="" />
                                        </LayoutSwitcher>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <LayoutSwitcher className={`mt-8 w-full leading-relaxed grid gap-4 grid-cols-1 lg:${jobLayout === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                            {jobs?.map((job, index) => (
                                <JobCard
                                    key={job.id}
                                    job={job}
                                    jobLayout={jobLayout}
                                />
                            ))}
                        </LayoutSwitcher>
                        <Pagination className="mt-8">
                            <PaginationContent>
                                <PaginationItem>
                                <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink href="#" isActive>1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

const LayoutSwitcher = styled.div`
    cursor: pointer;
    &.active img {
        filter: brightness(0) saturate(100%) invert(34%) sepia(97%) saturate(5980%) hue-rotate(241deg) brightness(90%) contrast(93%);
    }
`

export default JobSearchPage