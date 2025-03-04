import React from "react";
import PropTypes from "prop-types";
import JobApplicationStatus from "./JobApplicationStatus";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

function JobCard({ job, className = "", jobLayout }) {
  let navigate = useNavigate();

  const openDetailPage = (id) => {
    navigate(`/job/${id}`);
  };
  return (
    <div
      onClick={() => openDetailPage(job?.id)}
      className={`flex flex-col lg:flex-row gap-10 justify-between p-6 w-full bg-white border border-solid border-txtFooter max-md:px-5 ${className}`}
    >
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start my-auto font-semibold min-w-60">
        <img
          src={job.logoUrl}
          alt={`${job.company} logo`}
          className="object-contain shrink-0 w-16 aspect-square"
        />
        <div className="flex flex-col min-w-60">
          <h3 className={`text-xl text-slate-800 line-clamp-1 ${jobLayout === 2 ? 'max-w-[250px]' : 'w-full'}`}>{job.title}</h3>
          <div className="flex gap-2 justify-center items-center self-start mt-2 text-base min-h-[27px] text-slate-500">
            <span className="self-stretch my-auto">{job.company}</span>
            <span className="self-stretch my-auto">{job.location}</span>
          </div>
          <div className="flex gap-2 items-start mt-2 text-sm whitespace-nowrap">
            <span className="gap-2 self-stretch px-2.5 py-1.5 text-white bg-[#56CDAD] rounded-[80px]">
              {job?.jobType}
            </span>
            <div className="flex shrink-0 self-stretch w-px bg-zinc-200 h-[34px]" />
            <div className="flex w-px h-[34px]" />
            {
              job.categories.map((category, index) => (
                <span key={index} className="px-2.5 py-1.5 text-primary border rounded-[80px]">{category?.name}</span>
              ))
            }
          </div>
        </div>
      </div>

      <div className="text-center w-full lg:w-[164px]">
        <Button className='w-full' size='lg'>
          Apply
        </Button>
        <JobApplicationStatus
          applicants={job.applicants}
          capacity={job.capacity}
          progressBarUrl={job.progressBarUrl}
        />
      </div>
    </div>
  );
}
JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    jobType: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    applicants: PropTypes.number.isRequired,
    capacity: PropTypes.number.isRequired,
    progressBarUrl: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
  jobLayout: PropTypes.string
};

export default JobCard;
