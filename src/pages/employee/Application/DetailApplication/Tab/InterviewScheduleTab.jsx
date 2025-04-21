import React, { useState }  from 'react'
import interviewScheduleData from '../data/interviewSchedule.json'

const InterviewScheduleTab = () => {
  const [interviewSchedules] = useState(interviewScheduleData);
  return (
    <>
      <div className='flex justify-between'>
        <h3 className='text-lg font-bold'>Interview List</h3>
        <button className='text-primary font-bold'>+ Add Schedule</button>
      </div>
      <div className='mt-7'>
        <div className='flex flex-col gap-6'>
          {interviewSchedules?.map((interviewSchedule) => (
            <div key={interviewSchedule?.date}>
              <span className='inline-block mb-2'>{interviewSchedule?.date}</span>
                <div className='flex flex-col gap-2'>
                  {interviewSchedule?.schedules?.map((schedule) => (
                      <div className='flex gap-4 border border-txtFooter p-4' key={schedule?.id}>
                        <img src={schedule?.avatar} alt="" width='40' height='40' className='h-[40px]' />
                        <div className='flex flex-col gap-2 lg:gap-0 lg:flex-row flex-1'>
                          <div className='flex flex-1 flex-col'>
                            <b>{schedule?.name}</b>
                            <span>{schedule?.exam}</span>
                          </div>
                          <div className='flex flex-1 flex-col'>
                            <b>{schedule?.time}</b>
                            <span>{schedule?.place}</span>
                          </div>
                          <button className='border border-[#CCCCF5] flex w-full lg:w-[178px] justify-center items-center gap-3 p-4'>
                            <img src="/assets/imgs/svg/pencil.svg" alt="" width='16' height='16'/>
                            <span className='text-primary font-bold'>Add Feedback</span>
                          </button>
                        </div>
                      </div>
              ))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default InterviewScheduleTab