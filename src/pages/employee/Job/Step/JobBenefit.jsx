import React, { useMemo, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Form, FormField, FormLabel, FormMessage } from '@/components/ui/form'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const JobBenefit = ({form, onSubmit, isLoadingForm}) => {
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
    }),[]);
    return (
        <div>
            <div className='flex flex-col gap-4 mt-6 pb-6 border-b'>
                <span className='font-bold text-lg'>Basic Information</span>
                <span className='text-gray7C'>List out your top perks and benefits.</span>
            </div>
            <Form {...form}>
                <FormJob onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-6">
                    <FormField
                        control={form.control}
                        name="benefit"
                        render={({ field }) => (
                            <div className='form-field flex-col gap-4 lg:flex-row lg:gap-[90px]'>
                                <div className='flex flex-col gap-1 w-[260px]'>
                                    <FormLabel className='h-9'>Perks and Benefits</FormLabel>
                                    <span>Encourage more people to apply by sharing the attractive rewards and benefits you offer your employees</span>
                                </div>
                                 <div className='h-full'>
                                    <ReactQuillCustom ref={quillRef} theme="snow" 
                                        {...field}
                                        modules={modules}
                                        className='h-full'
                                        placeholder='Enter benefit'
                                    />
                                    <FormMessage />
                                </div>
                            </div>
                        )}
                    />
                    <div className='flex justify-end'><Button disabled={isLoadingForm} size='lg' type="submit" className='w-[100px]'>Do a review</Button></div>
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
JobBenefit.propTypes = {
    form: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    isLoadingForm: PropTypes.bool.isRequired,
}

const ReactQuillCustom = styled(ReactQuill)`
    & .ql-container {
        min-height: 100px;
    }
`

export default JobBenefit