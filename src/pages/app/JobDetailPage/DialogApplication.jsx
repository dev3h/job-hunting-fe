import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@/components/ui/button'
import { 
    Dialog, 
    DialogTitle,
    DialogContent, 
    DialogFooter, 
    DialogHeader, 
    DialogDescription
} from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Paperclip } from 'lucide-react'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import { Toaster } from '@/components/ui/sonner'

const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
})

const DialogApplication = ({job, isOpen, closeDialog}) => {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone_number: "",
            previous_job_name: "",
            linkedin_url: "",
            portfolio_url: "",
            additional_info: "",
            resume: "",
        },
    })
    const onSubmit = (data) => {
            console.log(data)
        }
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
        } else {
            toast.warning("Only PDF files are allowed.")
        }
    };
  return (
    <>
        <Dialog open={isOpen} onOpenChange={closeDialog}>
            <DialogContent className="!max-w-[90%] max-h-[90%] overflow-y-scroll">
                <DialogHeader>
                    <DialogTitle>
                        <div className='pb-6 border-b flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-7'>
                                <div className='flex justify-between'>
                                    <img src={job?.logoUrl} alt="" width='100' height='100' className='aspect-square'/>
                                    <img className='lg:hidden' src="/assets/imgs/svg/share.svg" alt="" width='40' height='40' />
                                </div>
                                <div className='flex flex-col gap-2'> 
                                    <h3 className='font-bold text-lg text-black25 line-clamp-2'>{job?.title}</h3>
                                    <span className='text-txtHeader'>{job?.company} . {job?.location} . {job?.jobType}</span>
                                </div>
                            </div>
                    </DialogTitle>
                    <DialogDescription />
                </DialogHeader>
                <div>
                    <div className='mb-8 mt-6'>
                        <h4 className='font-bold text-lg mb-2'>Submit your application</h4>
                        <span>The following is required and will only be shared with {job?.company}</span>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your fullname" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your email address" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone_number"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your phone number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="previous_job_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Current of previous job title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="What’s your current or previous job title?" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='pb-8 border-b'>
                                <h4 className='mb-8 text-lg font-bold uppercase'>Links</h4>
                                <div className='space-y-6'>
                                    <FormField
                                        control={form.control}
                                        name="linkedin_url"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>LinkedIn URL</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Link to your LinkedIn URL" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="portfolio_url"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Portfolio URL</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Link to your portfolio URL" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div>
                                <FormField
                                    control={form.control}
                                    name="additional_info"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Additional information</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Add a cover letter or anything else you want to share" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div>
                            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0 justify-between pb-8 border-b">
                                <span className="text-gray-700 font-medium">Attach your resume</span>
                                <label className="border-2 border-dashed border-purple-500 px-4 py-2 rounded-lg cursor-pointer flex items-center space-x-2 text-purple-600 hover:bg-purple-50">
                                    <Paperclip size={18} />
                                    <span>{file ? file.name : "Attach Resume/CV"}</span>
                                    <input
                                        type="file"
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                </label>
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
                <DialogFooter>
                    <div className='flex-1 mt-6 lg:mt-8'>
                        <Button type="submit" size='lg' className='w-full'>Submit Application</Button>
                        <div className='mt-8 flex flex-wrap gap-1'>By sending the request you can confirm that you accept our 
                            <a href="#" target='_blank' rel='noopener' className='text-primary hover:opacity-90'>Terms of Service</a> and 
                            <a href="#" target='_blank' rel='noopener' className='text-primary hover:opacity-90'>Privacy Policy</a>
                        </div>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        <Toaster richColors  />
    </>
  )
}
DialogApplication.propTypes = {
    job: PropTypes.shape({
        logoUrl: PropTypes.string,
        title: PropTypes.string,
        company: PropTypes.string,
        location: PropTypes.string,
        jobType: PropTypes.string,
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    closeDialog: PropTypes.func.isRequired,
}

export default DialogApplication