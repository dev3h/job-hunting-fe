import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Link, useNavigate, useParams } from 'react-router'
import styled from 'styled-components'
import JobApplicationStatus from '../JobPage/components/JobCard/JobApplicationStatus'
import JobData from '../JobPage/data/jobData.json'
import JobSimilar from '../LandingPage/jobData.json'
import JobCard from '../LandingPage/components/job-section/JobCard'

const JobDetailPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [job, setJob] = useState({})
    const [jobSimilar, setJobSimilar] = useState([])

    const currentId = params?.id
    useEffect(() => {
        const detail = JobData?.find(job => job?.id === +currentId)
        if(!detail) {
            navigate('/job')
        }
        setJob(detail)
    }, [])
    useEffect(() => {
        setJobSimilar(JobSimilar)
    }, [])
    return (
        <>
            <div className='bg-grayF8 py-[40px] lg:py-[72px] px-5'>
                <div className='container mx-auto'>
                    <div className='flex flex-col lg:flex-row justify-between lg:items-center border border-txtFooter rounded-sm bg-white p-6'>
                        <div className='flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-7'>
                            <div className='flex justify-between'>
                                <img src={job?.logoUrl} alt="" width='100' height='100' className='aspect-square'/>
                                <img className='lg:hidden' src="/assets/imgs/svg/share.svg" alt="" width='40' height='40' />
                            </div>
                            <div className='flex flex-col gap-2'> 
                                <h3 className='font-bold text-[32px] text-black25 line-clamp-2'>{job?.title}</h3>
                                <span className='text-txtHeader'>{job?.company} . {job?.location} . {job?.jobType}</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 mt-5 lg:mt-0'>
                            <img src="/assets/imgs/svg/share.svg" className='hidden lg:inline-block' alt="" width='20' height='20' />
                            <div className='border h-9 bg-txtFooter hidden lg:block'></div>
                            <Button size='lg' className='w-full'>Apply</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto py-[40px] lg:py-[72px] px-5'>
                <div className='flex flex-col lg:flex-row justify-between gap-9'>
                    <div className='flex flex-col gap-5 flex-1 lg:w-2/3'>
                        <JobDetailLeft>
                            <h4>Description</h4>
                            <p className='w-full lg:max-w-[80%]'>
                                Stripe is looking for Social Media Marketing expert to help manage our online networks. 
                                You will be responsible for monitoring our social media channels, creating content, 
                                finding effective ways to engage the community and incentivize others to engage on our channels.
                            </p>
                        </JobDetailLeft>
                        <JobDetailLeft>
                            <h4>Responsibilities</h4>
                            <ul>
                                <li>Community engagement to ensure that is supported and actively represented online</li>
                                <li>Community engagement to ensure that is supported and actively represented online</li>
                                <li>Community engagement to ensure that is supported and actively represented online</li>
                                <li>Community engagement to ensure that is supported and actively represented online</li>
                            </ul>
                        </JobDetailLeft>
                        <JobDetailLeft>
                            <h4>Who You Are</h4>
                            <ul>
                                <li>Community engagement to ensure that is supported and actively represented online</li>
                                <li>Community engagement to ensure that is supported and actively represented online</li>
                                <li>Community engagement to ensure that is supported and actively represented online</li>
                                <li>Community engagement to ensure that is supported and actively represented online</li>
                            </ul>
                        </JobDetailLeft>
                        <JobDetailLeft>
                            <h4>Nice-To-Haves</h4>
                            <ul>
                                <li>Community engagement to ensure that is supported and actively represented online</li>
                                <li>Community engagement to ensure that is supported and actively represented online</li>
                                <li>Community engagement to ensure that is supported and actively represented online</li>
                                <li>Community engagement to ensure that is supported and actively represented online</li>
                            </ul>
                        </JobDetailLeft>
                    </div>
                    <div className='flex flex-col gap-5 flex-1'>
                        <JobDetailRight>
                            <h4>About this role</h4>
                        </JobDetailRight>
                        <JobApplicationStatus applicants={job?.applicants} capacity={job?.capacity} />
                        <JobDetailRight className='flex flex-col gap-5 pb-6 lg:pb-[40] border-b'>
                            <div className='extra-info'>
                                <span >Apply Before</span>
                                <strong>July 31, 2021</strong>
                            </div>
                            <div className='extra-info'>
                                <span>Job Posted On</span>
                                <strong>July 31, 2021</strong>
                            </div>
                            <div className='extra-info'>
                                <span>Job Type</span>
                                <strong>Full-Time</strong>
                            </div>
                            <div className='extra-info'>
                                <span>Salary</span>
                                <strong>$75k-$85k USD</strong>
                            </div>
                        </JobDetailRight>
                        <JobDetailRight className='pb-6 lg:pb-[40px] border-b'>
                            <h4>Categories</h4>
                            <div className='flex flex-wrap gap-2 mt-5'>
                                {job?.categories?.map((category, index) => (
                                    <span key={index} className='px-2.5 py-1.5 text-primary border rounded-[50px]'>{category?.name}</span>
                                ))}
                            </div>
                        </JobDetailRight>
                        <JobDetailRight>
                            <h4>Required Skills</h4>
                            <div className='flex flex-wrap gap-2 mt-5'>
                                {job?.requiredSkills?.map((category, index) => (
                                    <span key={index} className='px-2.5 py-1.5 text-primary border rounded-sm'>{category?.name}</span>
                                ))}
                            </div>
                        </JobDetailRight>
                    </div>
                </div>
            </div>
            {/* open jobs */}
            <div className='pb-[48px] pt-5 lg:py-[48px] bg-grayF8 px-5'>
                <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-3 lg:gap-0 lg:items-center justify-between mb-6 lg:mb-[48px]'>
                    <h3 className='text-[48px] font-bold'>Similar Jobs</h3>
                    <Link to='/' className='flex gap-1 items-center text-primary font-bold'>
                        <span>Show all jobs</span> 
                        <img src="/assets/imgs/svg/arrow-right.svg" alt="" width="20" height="20" style={{filter: "brightness(0) saturate(100%) invert(25%) sepia(37%) saturate(5487%) hue-rotate(237deg) brightness(86%) contrast(102%)"}} />
                    </Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
                    {jobSimilar?.map((job, index) => (
                        <JobCard key={index} {...job} isShowDescription={false} />
                    ))}
                </div>
                </div>
            </div>
        </>
    )
}

const JobDetailLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px; 
    & h4 {
        font-weight: bold;
        font-size: 32px;
        color: var(--black25)
    }
    & p {
        color: var(--txtHeader);
    }
    & ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
        & li {
            display: flex;
            align-items: center;
            gap: 6px;
            color: var(--txtHeader);
            &::before {
                content: '';
                display: inline-block;
                height: 20px;
                width: 20px;
                background-image: url('/assets/imgs/svg/list-style-check.svg');
                background-size: contain;
                background-repeat: no-repeat;
            }
        }
    }
`

const JobDetailRight = styled.div`
    & h4 {
        font-weight: bold;
        font-size: 32px;
        color: var(--black25)
    }
    & .extra-info {
        display: flex;
        justify-content: space-between;
        & strong {
            color: var(--black25);
        }
        & span {
            color: var(--txtHeader);
        }
    }
`


export default JobDetailPage