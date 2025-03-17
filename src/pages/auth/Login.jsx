import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ROUTES from '@/constants/routes';
import axiosInstance from '@/config/axios';
import { useEmployeeStore, useJobSeekerStore } from '@/config/store';
import { useCustomForm } from '@/hooks/use-custom-form';
import { LoginSchema } from '@/utils/formSchemas';
import { API_AUTH } from '@/constants/api';

function TabMenu({ activeTab, onTabChange }) {
    const tabs = ["Job Seeker", "Company"];
  
    return (
      <div className="flex justify-center items-center">
        {tabs.map((tab) => (
          <button key={tab} className={`px-3 py-2 text-base font-bold ${
              activeTab === tab ? "border-b-2 bg-grayF8 border-primary text-primary" : ""
            }`}
            onClick={() => onTabChange(tab)} aria-selected={activeTab === tab} role="tab"
          >{tab}
          </button>
        ))}
      </div>
    );
}
  
function TermsText() {
    return (
      <p className="text-sm leading-6 text-slate-500">
        <span>By clicking 'Continue', you acknowledge that you have read and accept the</span>
        <a href="#" className="text-primary ml-[5px]">Terms of Service</a>
        <span className='mx-[5px]'>and</span>
        <a href="#" className="text-primary">Privacy Policy.</a>
      </p>
    );
}

const LoginPage = () => {
    let navigate = useNavigate();
    
    const loginHandler = async (values) => {
      const routePath = activeTab === 'Job Seeker' ? API_AUTH?.JOB_SEEKER?.LOGIN : API_AUTH?.EMPLOYEE?.LOGIN;
      const response = await axiosInstance.post(routePath, values)
      if(response?.data?.status === 200) {
        const data = response?.data?.data;
        store.setToken(data?.access_token)
        const routeNavigate = activeTab === 'Job Seeker' ? ROUTES?.JOB_SEEKER?.DASHBOARD : ROUTES?.EMPLOYEE?.DASHBOARD;
        navigate(routeNavigate);
      }
    }

    const { form, isLoadingForm, onSubmit } = useCustomForm({
      schema: LoginSchema,
      defaultValues: { email: "", password: "" },
      onSubmitHandler: loginHandler,
    });

    const [activeTab, setActiveTab] = useState("Job Seeker");
    const jobSeekerStore = useJobSeekerStore();
    const employeeStore = useEmployeeStore();
    const store = activeTab === "Job Seeker" ? jobSeekerStore : employeeStore;

    return (
      <div className="flex flex-col gap-6 items-center w-1/2 py-9 mx-auto my-0 bg-white">
        <TabMenu activeTab={activeTab} onTabChange={setActiveTab} />
  
        <h1 className="text-3xl font-semibold leading-10 text-center text-gray-800">
          Get more opportunities
        </h1>
  
        <Button size='lg' variant='outline' className='w-full'>
            <img src='/assets/imgs/svg/social/google.svg' alt='' />
            <span className="text-base font-bold text-center text-primary">
                Login with Google
            </span>
        </Button>
  
        <div className="flex relative justify-center items-center mx-0 my-6 w-full">
            <div className="flex-1 h-px bg-zinc-200" />
            <div className="px-4 py-0 text-base text-center text-gray-800 opacity-50">
                Or login with email
            </div>
            <div className="flex-1 h-px bg-zinc-200" />
        </div>
  
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
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
                <Button disabled={isLoadingForm} size='lg' type="submit" className='w-full'>Login</Button>
            </form>
        </Form>
  
        <div className="flex gap-2 items-center text-base w-full">
          <span className="text-gray-800 opacity-70">
            Don’t have an account?
          </span>
          <Link to={ROUTES?.AUTH?.APP?.REGISTER} className="font-semibold text-primary">
            Sign Up
          </Link>
        </div>
  
        <TermsText />
      </div>
      )
}

export default LoginPage