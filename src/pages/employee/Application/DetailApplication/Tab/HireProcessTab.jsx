import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import styled from 'styled-components'
import interviewInfoData from '../data/interviewInfo.json'
import interviewNoteData from '../data/interviewInfoNote.json'

const NoteItem = ({item}) => {
  const [showReplies, setShowReplies] = useState(false);
  return (
    <div className='flex gap-4 border border-txtFooter p-4'>
        <img src={item?.avatar} alt="" width='40' height='40' className='aspect-square rounded-full h-full' />
        <div className='flex flex-1 flex-col gap-2'>
          <div className='flex flex-col lg:flex-row lg:justify-between'>
            <h4>{item?.name}</h4>
            <span>{item?.date}</span>
          </div>
          <p>{item?.content}</p>
          {item?.children?.length > 0 && (
          <button
            className='text-primary font-bold text-left w-fit cursor-pointer'
            onClick={() => setShowReplies(!showReplies)}
          >
            {showReplies ? 'Hide Replies' : `${item.children.length} Replies`}
          </button>
        )}
        {showReplies && (
          <div className='mt-4 pl-4 border-l flex flex-col gap-2 border-gray-300'>
            {item.children.map((child, index) => (
              <NoteItem key={index} item={child} />
            ))}
          </div>
        )}
        </div>
      </div>
  )
}

const stages = ["In-Review", "Shortlisted", "Interview", "Hired/Declined"]
const HireProcessTab = () => {
  const [currentStage, setCurrentStage] = useState(2);
  const [interviewInfo] = useState(interviewInfoData);
  const [interviewNote] = useState(interviewNoteData);
  
  return (
    <>
      <div className='pb-4 border-b border-txtFooter'>
        <h3 className='text-lg font-bold mb-2'>Current Stage</h3>
        <div>
          <ul className='flex gap-2 overflow-x-auto'>
            {stages.map((stage, index) => (
              <StageItem key={index} className={`flex flex-1 px-4 py-3 skewed justify-center items-center gap-2 text-blue26 ${index === currentStage ? 'bg-blue26 text-white' : 'bg-grayE9'}`}>
                <span>{stage}</span>
              </StageItem>
            ))}
          </ul>
        </div>
        <div className='mt-5'>
          <h3 className='text-lg font-bold mb-2'>Stage info</h3>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-3 lg:gap-y-6'>
            <StageInfoBlock>
              <span>Interview Date</span>
              <b>{interviewInfo?.date}</b>
            </StageInfoBlock>
            <StageInfoBlock>
              <span>Interview Status</span>
              <div>{interviewInfo?.status}</div>
            </StageInfoBlock>
            <StageInfoBlock>
              <span>Interview Location</span>
              <b>{interviewInfo?.location}</b>
            </StageInfoBlock>
            <StageInfoBlock>
              <span>Assigned to</span>
              <ul className='flex'>
                {interviewInfo?.assigned_to?.map((item, index) => (
                  <li key={index} className='flex gap-2 items-center'>
                    <img src={item?.avatar} alt="" width='40' height='40' className='aspect-square rounded-full h-full' />
                  </li>
                ))}
              </ul>
            </StageInfoBlock>
          </div>
          <div className='mt-9'><Button size='lg'>Move To Next Step</Button></div>
        </div>
      </div>
      <div>
        <div className='flex justify-between mt-8 mb-4'>
          <h3 className='text-lg font-bold mb-2'>Notes</h3>
          <button className='text-primary font-bold'>+ Add notes</button>
        </div>
        <div className='flex flex-col gap-4'>
          {interviewNote?.map((item, index) => (
            <NoteItem key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

const StageItem = styled.li`
  &.skewed:nth-child(2),
  &.skewed:nth-child(3) {
    transform: skew(-10deg);
    & > span {
      transform: skew(10deg);
    }
  }
  &.skewed:first-child {
    clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%);
  }
  &.skewed:last-child {
    clip-path: polygon(10px 0, 100% 0, 100% 100%, 0 100%);
  }
  `

const StageInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  & ul li:not(:first-child) {
    margin-left: -12px;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 8px;
  }
`


export default HireProcessTab