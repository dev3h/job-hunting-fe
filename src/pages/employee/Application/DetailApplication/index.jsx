import { Button } from '@/components/ui/button';
import React, { lazy, useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router'

const ProfileTab = lazy(() => import('./Tab/ProfileTab'))
const ResumeTab = lazy(() => import('./Tab/ResumeTab'))
const HireProcessTab = lazy(() => import('./Tab/HireProcessTab'))
const InterviewScheduleTab = lazy(() => import('./Tab/InterviewScheduleTab'))

const DetailApplication = () => {
  const params = useParams();
  
  const tabs = useMemo(()=> [
    {id: 1, label: "Applicant Profile", active: 'profile'},
    {id: 2, label: "Resume", active: 'resume'},
    {id: 3, label: "Hiring Progress", active: 'hiring_progress'},
    {id: 4, label: "Interview Schedule", active: "interview_schedule"},
  ], []);
  const [currentTab, setCurrentTab] = useState(() => {
    const urlQuery = window.location?.search;
    const query = new URLSearchParams(urlQuery);
    return query.get('tab') || 'profile'
  });

  const handleChangeTab = (tab) => {
    const url = new URL(window.location);
    url.searchParams.set('tab', tab);
    window.history.pushState({}, '', url);
    setCurrentTab(tab);
  }

  const fetchData = async () => {

  }
  useEffect(() => {
    // fetchData();
  }, [])
  
  const step = 3;
  return (
    <div>
      <div className='p-5 lg:p-8'>
        <Link to={`/employee/application`} className='flex gap-6 items-center'>
          <img src='/assets/imgs/svg/back.svg' alt='' width='40' height='40' />
          <h2 className='font-bold text-2xl'>Applicant Details</h2>
        </Link>
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-between gap-8 px-5 lg:px-8 pb-5 lg:pb-[60px]'>
        {/* basic info */}
        <div className='border flex flex-col gap-5 p-6 w-full lg:w-[352px]'>
          <div className='h-[96px] flex gap-5'>
            <img src="/" alt="" width='96' height='96' className='aspect-square bg-red-500 rounded-full h-full' />
            <div className='flex flex-col gap-2'>
              <h3 className='font-bold'>Jerome Bell</h3>
              <span>Product Designer</span>
              <div className='flex gap-2 items-center'>
                <img src="/assets/imgs/svg/star-fill.svg" alt="" width='20' height='20' />
                <span>4.0</span>
              </div>
            </div>
          </div>
          <div className='p-4 bg-grayF8'>
            <div className='flex justify-between items-center pb-2 border-b'>
              <span>Applied Jobs</span>
              <span>2 days ago</span>
            </div>
            <div className='flex flex-col gap-1 mt-2'>
              <span className='font-bold'>Product development</span>
              <span>Marketing . Full-Time</span>
            </div>
          </div>
          <div className='bg-grayF8 p-4'> 
            <div className='flex items-center justify-between mb-2'>
              <span>Stage</span>
              <span>Interview</span>
            </div>
            <div className='flex gap-[2px] h-3'>
              {
                Array.from({length: 4}).map((_, index) => (
                  <div key={index} className={`flex-1 h-full ${index+1 <= step ? 'bg-blue-500' : 'bg-txtFooter'}`}></div>
                )) 
              }
            </div>
          </div>
          <div className='flex items-center gap-2 pb-5 border-b'>
            <Button variant='outlinePrimary' className='flex-1'>Schedule Interview</Button>
            <div className='aspect-square border h-full flex justify-center items-center'>
              <img src="/assets/imgs/svg/sidebar/message.svg" alt="" width='16' height='16' />
            </div>
          </div>
          <div>
            <span className='inline-block font-bold mb-3 text-xl'>Contact</span>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-3'>
                <img src="/assets/imgs/svg/contact/email.svg" alt="" width='24' height='24' className='w-6 h-6' />
                <div className='flex flex-col'>
                  <span>Email</span>
                  <span>abc@gmail.com</span>
                </div>
              </div>
              <div className='flex gap-3'>
                <img src="/assets/imgs/svg/contact/phone.svg" alt="" width='24' height='24' className='w-6 h-6' />
                <div className='flex flex-col'>
                  <span>Phone</span>
                  <span>++44 1234432432</span>
                </div>
              </div>
              <div className='flex gap-3'>
                <img src="/assets/imgs/svg/contact/instagram.svg" alt="" width='24' height='24' className='w-6 h-6' />
                <div className='flex flex-col'>
                  <span>Instagram</span>
                  <span>instagram.com/jeromebell</span>
                </div>
              </div>
              <div className='flex gap-3'>
                <img src="/assets/imgs/svg/contact/twitter.svg" alt="" width='24' height='24' className='w-6 h-6' />
                <div className='flex flex-col'>
                  <span>Twitter</span>
                  <span>twitter.com/jeromebell</span>
                </div>
              </div>
              <div className='flex gap-3'>
                <img src="/assets/imgs/svg/contact/website.svg" alt="" width='24' height='24' className='w-6 h-6' />
                <div className='flex flex-col'>
                  <span>Website</span>
                  <span>www.jeromebell.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 border'>
          <div className='px-8 pt-4 flex items-center gap-[40px] border-b overflow-x-auto'>
              {tabs.map(tab => (
                <div key={tab?.id}>
                  <button className={`inline-block mb-2 cursor-pointer ${currentTab === tab?.active ? 'font-bold' : ''}`} 
                  onClick={() => handleChangeTab(tab?.active)}>{tab?.label}</button>
                  {currentTab === tab?.active && <div className="h-1 bg-primary rounded-tl-lg rounded-tr-lg"></div>}
                </div>
              ))}
          </div>
          <div className='px-4 lg:px-8 py-6'>
            {currentTab === 'profile' && <ProfileTab />}
            {currentTab === 'resume' && <ResumeTab />}
            {currentTab === 'hiring_progress' && <HireProcessTab />}
            {currentTab === 'interview_schedule' && <InterviewScheduleTab />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailApplication 