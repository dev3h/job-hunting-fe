import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Select from 'react-select'
import { Slider } from '@/components/ui/slider'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const JobInformation = ({form, onSubmit, isLoadingForm}) => {
    const [jobTypes, setJobTypes] = useState([
        { id: 1, name: 'Full Time' },
        { id: 2, name: 'Part Time' },
        { id: 3, name: 'Contract' },
        { id: 4, name: 'Internship' },
        { id: 5, name: 'Freelance' },
    ]);
    const [categories, setCategories] = useState([
        { value: 1, label: 'Software Development' },
        { value: 2, label: 'Design' },
        { value: 3, label: 'Marketing' },
        { value: 4, label: 'Sales' },
        { value: 5, label: 'Customer Service' },
    ]);
    return (
        <div>
            <div className='flex flex-col gap-4 mt-6 pb-6 border-b'>
                <span className='font-bold text-lg'>Basic Information</span>
                <span className='text-gray7C'>This information will be displayed publicly</span>
            </div>
            <Form {...form}>
                <FormJob onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-6">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <div className='form-field flex-col gap-4 lg:flex-row lg:gap-[90px]'>
                                <div className='flex flex-col w-[260px]'>
                                    <FormLabel className='h-9'>Job Title</FormLabel>
                                    <span>Job titles must be describe one position</span>
                                </div>
                                <FormItem className='flex-1'>
                                    <FormControl>
                                        <Input placeholder="e.g. Software Engineer" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </div>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="type"
                        render={() => (
                            <FormItem>
                                <div className='form-field flex-col gap-4 lg:flex-row lg:gap-[90px]'>
                                    <div className='flex flex-col gap-1 w-[260px]'>
                                        <FormLabel className='h-9'>Type of Employment</FormLabel>
                                        <span>You can select multiple type of employment</span>
                                    </div>
                                    <div className='flex-1 gap-5 grid grid-cols-2 lg:grid-cols-1'>
                                        {jobTypes?.map((item) => (
                                            <FormField key={item?.id} control={form.control}
                                                name="type"
                                                render={({ field }) => {
                                                return (
                                                    <FormItem key={item.id} className='flex items-center gap-4'>
                                                        <FormControl>
                                                            <Checkbox
                                                                {...field}
                                                                checked={field.value?.includes(item.id)}
                                                                onCheckedChange={(checked) => {
                                                                return checked
                                                                    ? field.onChange([...field.value, item.id])
                                                                    : field.onChange(
                                                                        field.value?.filter(
                                                                        (value) => value !== item.id
                                                                        )
                                                                    )
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <span>{item?.name}</span>
                                                </FormItem>
                                                )
                                            }}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="salary"
                        render={({ field }) => (
                            <div className="form-field flex-col gap-4 lg:flex-row lg:gap-[90px]">
                                <div className="flex flex-col gap-1 w-[260px]">
                                    <FormLabel className="h-9">Salary</FormLabel>
                                    <span>Please specify the estimated salary range for the role. *You can leave this blank</span>
                                </div>
                                <div className="flex flex-col gap-9">
                                    <div className="flex items-center gap-5">
                                        <FormItem className="flex-1">
                                            <FormControl>
                                            <Input
                                                placeholder="Enter min"
                                                value={field.value?.[0] ?? ""}
                                                onChange={(e) => {
                                                    const newMin = Number(e.target.value);
                                                    const newMax = field.value?.[1] ?? 100;
                                                    form.setValue("salary", [newMin, newMax]); 
                                                }}
                                            />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        <div>to</div>
                                        <FormItem className="flex-1">
                                            <FormControl>
                                            <Input
                                                placeholder="Enter max"
                                                value={field.value?.[1] ?? ""}
                                                onChange={(e) => {
                                                    const newMin = field.value?.[0] ?? 0;
                                                    const newMax = Number(e.target.value);
                                                    form.setValue("salary", [newMin, newMax]); 
                                                }}
                                            />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    </div>
                                    <Slider
                                        value={field.value} 
                                        step={1}
                                        onValueChange={(newValue) => {
                                            form.setValue("salary", newValue); 
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="categories"
                        render={({ field }) => (
                            <div className='form-field flex-col gap-4 lg:flex-row lg:gap-[90px]'>
                                <div className='flex flex-col gap-1 w-[260px]'>
                                    <FormLabel className='h-9'>Categories</FormLabel>
                                    <span>You can select multiple job categories</span>
                                </div>
                                <FormItem className='flex-1'>
                                    <FormControl>
                                        <Select options={categories} isMulti />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </div>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="required_skills"
                        render={({ field }) => (
                            <div className='form-field flex-col gap-4 lg:flex-row lg:gap-[90px]'>
                                <div className='flex flex-col gap-1 w-[260px]'>
                                    <FormLabel className='h-9'>Required Skills</FormLabel>
                                    <span>Add required skills for the job</span>
                                </div>
                                <FormItem className='flex-1'>
                                    <FormControl>
                                        <Button variant='outline' className='w-[100px] text-primary'>+ Add Skills</Button>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
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
JobInformation.propTypes = {
    form: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    isLoadingForm: PropTypes.bool.isRequired,
}

export default JobInformation