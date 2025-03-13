import { useCustomForm } from '@/hooks/use-custom-form'
import { JobBenefitSchema, JobDescriptionSchema, JobInformationSchema } from '@/utils/formSchemas'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate, useSearchParams } from 'react-router'
import { Separator } from "@/components/ui/separator"
import { JobDescription, JobInformation, JobBenefit } from './Step'
import ROUTES from '@/constants/routes'
import PreviewPostJob from './PreviewPostJob'

const step = [
    {
        step: 1,
        title: 'Job Information',
        icon: 'job_info.svg',
    },
    {
        step: 2,
        title: 'Job Description',
        icon: 'job_desc.svg',
    },
    {
        step: 3,
        title: 'Perks & Benefit',
        icon: 'job_benefit.svg',
    },
]

const CreateEditForm = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    
    const initialStep = searchParams.get('step');
    const [currentStep, setCurrentStep] = useState(1)
    const [isPreviewOpen, setIsPreviewOpen] = useState(false)
    const handleClosePreviewDialog = () => {
        setIsPreviewOpen(false)
    }
    useEffect(() => {
        if (initialStep) {
            setCurrentStep(parseInt(initialStep))
        }
    }, [initialStep])
    const jobInformationHandler = (values) => {
        navigate(`${ROUTES.EMPLOYEE.JOB.CREATE}?step=2`, { replace: true })
        setCurrentStep(2)
    }

    const jobDescriptionHandler = (values) => {
        navigate(`${ROUTES.EMPLOYEE.JOB.CREATE}?step=3`, { replace: true })
        setCurrentStep(3)
    }

    const jobBenefitHandler = (values) => {
        setIsPreviewOpen(true)
    }

    const { form: jobInformationForm, isLoadingForm: isLoadingJobInformationForm, onSubmit: onSubmitJobInformation } = useCustomForm({
        schema: JobInformationSchema,
        defaultValues: { 
            title: '',
            type: [],
            salary: [0,0],
            categories: [],
            required_skills: '',
         },
        onSubmitHandler: jobInformationHandler,
    });
    const { form: jobDescriptionForm, isLoadingForm: isLoadingJobDescriptionForm, onSubmit: onSubmitJobDescription } = useCustomForm({
        schema: JobDescriptionSchema,
        defaultValues: { 
            description: '',
            responsibility: '',
            qualification: '',
            'nice_to_have': '',
         },
        onSubmitHandler: jobDescriptionHandler,
    });
    const { form: jobBenefitForm, isLoadingForm: isLoadingJobBenefitForm, onSubmit: onSubmitJobBenefit } = useCustomForm({
        schema: JobBenefitSchema,
        defaultValues: { 
            benefit: [],
         },
        onSubmitHandler: jobBenefitHandler,
    });

    return (
        <div className='px-3 lg:px-8 pb-8'>
            <div className='hidden lg:flex justify-between items-center border py-3 px-6'>
                {step?.map((item, index) => (
                    <StepItem key={index} className='relative w-full flex items-center gap-4'>
                        <div className={`flex step-icon bg-grayE9 ${currentStep === item?.step ? 'active' : ''} justify-center items-center rounded-full w-[56px] h-[56px]`}>
                            <img src={`/assets/imgs/svg/${item?.icon}`} alt="" width='25' height='25' />
                        </div>
                        <div className={`flex flex-col gap-2 step-info ${currentStep === item?.step ? 'active' : ''} `}>
                            <span className='text-[#A8ADB7]'>Step {item?.step}/{step?.length}</span>
                            <h3 className='text-lg text-gray7C'>{item?.title}</h3>
                        </div>
                    </StepItem>
                ))}
            </div>
            <div className='flex flex-col lg:hidden border-b py-3'>
                <div className='flex'>
                    {step?.map((item, index) => (
                        <StepMobileItem key={index} className='relative z-10 w-full flex items-center gap-4'>
                            <div className={`flex step-icon bg-grayE9 ${currentStep === item?.step ? 'active' : ''} justify-center items-center rounded-full w-[56px] h-[56px]`}>
                                <img src={`/assets/imgs/svg/${item?.icon}`} alt="" width='25' height='25' />
                            </div>
                        </StepMobileItem>
                    ))}
                </div>
                <div className="flex gap-2 items-center mt-5">
                    <span className='text-primary'>Step {currentStep}/{step?.length}</span>
                    <Separator orientation="vertical" className='!h-6' />
                    <h3 className='text-lg text-black25 font-bold'>{step?.[currentStep]?.title}</h3>
                </div>
            </div>
            {currentStep === 1 && <JobInformation form={jobInformationForm} onSubmit={onSubmitJobInformation} isLoadingForm={isLoadingJobInformationForm} />}
            {currentStep === 2 && <JobDescription form={jobDescriptionForm} onSubmit={onSubmitJobDescription} isLoadingForm={isLoadingJobDescriptionForm} />}
            {currentStep === 3 && <JobBenefit form={jobBenefitForm} onSubmit={onSubmitJobBenefit} isLoadingForm={isLoadingJobBenefitForm} />}
            {isPreviewOpen && <PreviewPostJob isOpen={isPreviewOpen} closeDialog={handleClosePreviewDialog} data={{
                ...jobInformationForm.getValues(),
                ...jobDescriptionForm.getValues(),
                ...jobBenefitForm.getValues(),
            }} />}
            
        </div>
    )
}

const StepItem = styled.div`
    &:not(:last-child)::before {
        content: '';
        position: absolute;
        top: 50%;
        right: 25%;
        transform: translate(-50%, -50%);
        width: 2px;
        height: 100%;
        background: #E5E7EB;
    }
    & .step-icon.active {
        background-color: var(--primary);
        & img {
            filter: brightness(0) saturate(100%) invert(88%) sepia(100%) saturate(2%) hue-rotate(185deg) brightness(110%) contrast(97%);
        }
    }
    & .step-info.active {
        & span {
            color: var(--primary);
        }
        & h3 {
            font-weight: bold;
            color: var(--black25)
        }
    }
`
const StepMobileItem = styled.div`
    &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 2px;
        margin-left: 2px;
        margin-right: 2px;
        background: #E5E7EB;
        z-index: -1;
    }
    & .step-icon.active {
        background-color: var(--primary);
        & img {
            filter: brightness(0) saturate(100%) invert(88%) sepia(100%) saturate(2%) hue-rotate(185deg) brightness(110%) contrast(97%);
        }
    }
`

export default CreateEditForm