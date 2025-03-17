import React, { useMemo, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Form, FormField, FormLabel, FormMessage } from '@/components/ui/form'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const JobDescription = ({form, onSubmit, isLoadingForm}) => {
    const quillRef = useRef(null);
    let toolbarOptions = [
        [{ header: [1, 2, 3, 4, 5, 6] }, { font: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["bold", "italic", "underline", "strike"],
      ];
      
    const modules = useMemo(
    () => ({
        toolbar: {
        container: toolbarOptions,
        },
    }),
    []
    );
    return (
        <div>
            <div className='flex flex-col gap-4 mt-6 pb-6 border-b'>
                <span className='font-bold text-lg'>Details</span>
                <span className='text-gray7C'>Add the description of the job, responsibilities, who you are, and nice-to-haves.</span>
            </div>
            
            <Form {...form}>
                <FormJob onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-6">
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <div className='form-field flex-col gap-4 lg:flex-row lg:gap-[90px]'>
                                <div className='flex flex-col w-[260px]'>
                                    <FormLabel className='h-9'>Job Descriptions</FormLabel>
                                    <span>Job titles must be describe one position</span>
                                </div>
                                
                                <div className='h-full flex-1'>
                                    <ReactQuillCustom ref={quillRef} theme="snow" 
                                        {...field}
                                        modules={modules}
                                        className='h-full'
                                        placeholder='Enter job description'
                                    />
                                    <FormMessage />
                                </div>
                            </div>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="responsibility"
                        render={({ field }) => (
                            <div className='form-field flex-col gap-4 lg:flex-row lg:gap-[90px]'>
                                <div className='flex flex-col w-[260px]'>
                                    <FormLabel className='h-9'>Responsibilities</FormLabel>
                                    <span>Outline the core responsibilities of the position</span>
                                </div>
                                
                                <div className='h-full flex-1'>
                                    <ReactQuillCustom ref={quillRef} theme="snow" 
                                        {...field}
                                        modules={modules}
                                        className='h-full'
                                        placeholder='Enter job responsibilities'
                                    />
                                    <FormMessage />
                                </div>
                            </div>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="qualification"
                        render={({ field }) => (
                            <div className='form-field flex-col gap-4 lg:flex-row lg:gap-[90px]'>
                                <div className='flex flex-col w-[260px]'>
                                    <FormLabel className='h-9'>Who You Are</FormLabel>
                                    <span>Add your preferred candidates qualifications</span>
                                </div>
                                
                                <div className='h-full'>
                                    <ReactQuillCustom ref={quillRef} theme="snow" 
                                        {...field}
                                        modules={modules}
                                        className='h-full'
                                        placeholder='Enter qualifications'
                                    />
                                    <FormMessage />
                                </div>
                            </div>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="nice_to_have"
                        render={({ field }) => (
                            <div className='form-field flex-col gap-4 lg:flex-row lg:gap-[90px]'>
                                <div className='flex flex-col w-[260px]'>
                                    <FormLabel className='h-9'>Nice-To-Haves</FormLabel>
                                    <span>
                                        Add nice-to-have skills and qualifications for the role to encourage a more diverse set of candidates to apply
                                    </span>
                                </div>
                                
                                <div className='h-full'>
                                    <ReactQuillCustom ref={quillRef} theme="snow" 
                                        {...field}
                                        modules={modules}
                                        className='h-full'
                                        placeholder='Enter nice-to-haves'
                                    />
                                    <FormMessage />
                                </div>
                            </div>
                        )}
                    />
                    <div className='flex justify-end'><Button disabled={isLoadingForm} size='lg' type="submit" className='w-[100px]'>Next Step</Button></div>
                </FormJob>
            </Form>
        </div>
    )
}

const FormJob = styled.form`
    & label {
        font-size: 16px;
        align-items: flex-start;
    }
    & .form-field {
        display: flex;
        border-bottom: 1px solid var(--txtFooter);
        padding-bottom: 24px;
    }
`

const ReactQuillCustom = styled(ReactQuill)`
    & .ql-container {
        min-height: 100px;
    }
`

JobDescription.propTypes = {
    form: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    isLoadingForm: PropTypes.bool.isRequired,
}

export default JobDescription