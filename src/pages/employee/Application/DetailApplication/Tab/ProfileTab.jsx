import React from 'react'
import styled from 'styled-components'

const ProfileTab = () => {
  return (
    <div>
        {/* personal info */}
        <div className='pb-4 border-b'>
            <span className='font-bold mb-4 inline-block text-xl'>Personal Info</span>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <GridItem>
                    <span>Full Name</span>
                    <b>Jerome Bell</b>
                </GridItem>
                <GridItem>
                    <span>Gender</span>
                    <b>Male</b>
                </GridItem>
                <GridItem>
                    <span>Date of Birth</span>
                    <b>March 23, 1995</b>
                </GridItem>
                <GridItem>
                    <span>Language</span>
                    <b>English, French, Bahasa</b>
                </GridItem>
                <GridItem>
                    <span>Address</span>
                    <b>4517 Washington Ave. Manchester, Kentucky 39495</b>
                </GridItem>
            </div>
        </div>
        {/* professional info */}
        <div className='pt-6'>
            <span className='font-bold mb-4 inline-block text-xl'>Professional Info</span>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4'>
                <GridItem className='lg:col-span-2'>
                    <span>About me</span>
                    <b>
                    I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world.
                    </b>
                </GridItem>
                <GridItem>
                    <span>Current Job</span>
                    <b>Product Designer</b>
                </GridItem>
                <GridItem>
                    <span>Experience in Years</span>
                    <b>4 Years</b>
                </GridItem>
                <GridItem>
                    <span>Highest Qualification Held</span>
                    <b>Bachelors in Engineering</b>
                </GridItem>
                <GridItem>
                    <span>Skill set</span>
                    <div>Project Management</div>
                </GridItem>
            </div>
        </div>
    </div>
  )
}

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    & span {
        color: var(--gray7C);
    }
`

export default ProfileTab