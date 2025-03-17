import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import JobApplicationStatus from '@/pages/app/JobPage/components/JobCard/JobApplicationStatus'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'


const PreviewPostJob = ({isOpen, closeDialog, data}) => {
    useEffect(() => {
        const listItems = document.querySelectorAll('.quill-content li');
        listItems.forEach(item => {
            const listType = item.getAttribute('data-list');
            if (listType === 'bullet') {
                item.style.listStyleType = 'disc';
            } else if (listType === 'ordered') {
                item.style.listStyleType = 'decimal';
            }
        });
    }, [data]);
    return (
       <Dialog open={isOpen} onOpenChange={closeDialog}>
            <DialogContent className="!max-w-[90%] max-h-[90%] overflow-y-scroll">
                <DialogHeader>
                    <DialogTitle>
                        <div className='pb-6 border-b flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-7'>
                                <div className='flex justify-between'>
                                    <img src={data?.logoUrl} alt="" width='100' height='100' className='aspect-square'/>
                                </div>
                                <div className='flex flex-col gap-2'> 
                                    <h3 className='font-bold text-lg text-black25 line-clamp-2'>{data?.title}</h3>
                                    <span className='text-txtHeader'>{data?.company} . {data?.location} . {data?.jobType}</span>
                                </div>
                            </div>
                    </DialogTitle>
                    <DialogDescription />
                </DialogHeader>
                <div className='container mx-auto py-[40px] lg:py-[72px] px-5'>
                    <div className='flex flex-col pb-6 lg:pb-[72px] border-b lg:flex-row justify-between gap-9'>
                        <div className='flex flex-col gap-5 flex-1 lg:w-2/3'>
                            <JobDetailLeft>
                                <h4>Description</h4>
                                <QuillContent className='w-full lg:max-w-[80%] quill-content' dangerouslySetInnerHTML={{__html: data?.description}} />
                            </JobDetailLeft>
                            <JobDetailLeft>
                                <h4>Responsibilities</h4>
                                <QuillContent className='w-full lg:max-w-[80%] quill-content' dangerouslySetInnerHTML={{__html: data?.responsibility}} />
                            </JobDetailLeft>
                            <JobDetailLeft>
                                <h4>Who You Are</h4>
                                <QuillContent className='w-full lg:max-w-[80%] quill-content' dangerouslySetInnerHTML={{__html: data?.qualification}} />
                            </JobDetailLeft>
                            <JobDetailLeft>
                                <h4>Nice-To-Haves</h4>
                                <QuillContent className='w-full lg:max-w-[80%] quill-content' dangerouslySetInnerHTML={{__html: data?.['nice_to_have']}} />
                            </JobDetailLeft>
                        </div>
                        <div className='flex flex-col gap-5 flex-1'>
                            <JobDetailRight>
                                <h4>About this role</h4>
                            </JobDetailRight>
                            <JobApplicationStatus applicants={0} capacity={0} />
                            <JobDetailRight className='flex flex-col gap-5 pb-6 lg:pb-[40] border-b'>
                                <div className='extra-info'>
                                    <span >Apply Before</span>
                                    <strong>xxx</strong>
                                </div>
                                <div className='extra-info'>
                                    <span>Job Posted On</span>
                                    <strong>xxx</strong>
                                </div>
                                <div className='extra-info'>
                                    <span>Job Type</span>
                                    <strong>Full-Time</strong>
                                </div>
                                <div className='extra-info'>
                                    <span>Salary</span>
                                    <strong>${data?.salary[0]}-${data?.salary[1]} USD</strong>
                                </div>
                            </JobDetailRight>
                            <JobDetailRight className='pb-6 lg:pb-[40px] border-b'>
                                <h4>Categories</h4>
                                <div className='flex flex-wrap gap-2 mt-5'>
                                    {data?.categories?.map((category, index) => (
                                        <span key={index} className='px-2.5 py-1.5 text-primary border rounded-[50px]'>{category?.name}</span>
                                    ))}
                                </div>
                            </JobDetailRight>
                            <JobDetailRight>
                                <h4>Required Skills</h4>
                                <div className='flex flex-wrap gap-2 mt-5'>
                                    {data?.requiredSkills?.map((category, index) => (
                                        <span key={index} className='px-2.5 py-1.5 text-primary border rounded-sm'>{category?.name}</span>
                                    ))}
                                </div>
                            </JobDetailRight>
                        </div>
                    </div>
                    <JobDetailLeft className='pt-6 lg:pt-[72px]'>
                        <h4 className='font-bold text-[32px]'>Perks & Benefits</h4>
                        <h5>This job comes with several perks and benefits</h5>
                        <QuillContent className='w-full lg:max-w-[80%] quill-content' dangerouslySetInnerHTML={{__html: data?.benefit}} />
                    </JobDetailLeft>     
                </div>
                <DialogFooter>
                    <div className='flex gap-3 mt-6 lg:mt-8'>
                        <Button size='lg' variant='outline' className='w-full'>Close</Button>
                        <Button size='lg' className='w-full'>Save</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
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

PreviewPostJob.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeDialog: PropTypes.func.isRequired,
}

const QuillContent = styled.p`
    ol {
        list-style-type: decimal;
    }
    ul {
        list-style-type: disc;
    }
    menu {
        list-style: initial;
    }
`

export default PreviewPostJob