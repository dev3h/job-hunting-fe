import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import { Link } from 'react-router';
import ROUTES from '@/constants/routes';

function TabMenu({ activeTab, onTabChange }) {
    const tabs = ["Job Seeker", "Company"];
  
    return (
      <div className="flex justify-center items-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-3 py-2 text-base font-bold ${
              activeTab === tab ? "border-b-2 bg-grayF8 border-primary text-primary" : ""
            }`}
            onClick={() => onTabChange(tab)}
            aria-selected={activeTab === tab}
            role="tab"
          >
            {tab}
          </button>
        ))}
      </div>
    );
}
  
function TermsText() {
    return (
      <p className="text-sm leading-6 text-slate-500">
        By clicking 'Continue', you acknowledge that you have read and accept the{" "}
        <a href="#" className="text-indigo-600 no-underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-indigo-600 no-underline">
          Privacy Policy
        </a>
        .
      </p>
    );
}

const FormSchema = z.object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})

const RegisterPage = () => {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })
    const [activeTab, setActiveTab] = useState("Job Seeker");

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
      <div className="flex flex-col gap-6 items-center w-1/2 py-9 mx-auto my-0 bg-white">
        <TabMenu activeTab={activeTab} onTabChange={setActiveTab} />
  
        <h1 className="text-3xl font-semibold leading-10 text-center text-gray-800">
          Get more opportunities
        </h1>
  
        <Button size='lg' variant='outline' className='w-full'>
            <img src='/assets/imgs/svg/social/google.svg' alt='' />
            <span className="text-base font-bold text-center text-primary">
                Sign Up with Google
            </span>
        </Button>
  
        <div className="flex relative justify-center items-center mx-0 my-6 w-full">
            <div className="flex-1 h-px bg-zinc-200" />
            <div className="px-4 py-0 text-base text-center text-gray-800 opacity-50">
                Or sign up with email
            </div>
            <div className="flex-1 h-px bg-zinc-200" />
        </div>
  
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
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
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type='password' placeholder="Enter password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button size='lg' type="submit" className='w-full'>Continue</Button>
            </form>
        </Form>
  
        <div className="flex gap-2 items-center text-base w-full">
          <span className="text-gray-800 opacity-70">
            Already have an account?
          </span>
          <Link to={ROUTES?.AUTH?.APP?.LOGIN} className="font-semibold text-primary">
            Login
          </Link>
        </div>
  
        <TermsText />
      </div>
      )
}

export default RegisterPage