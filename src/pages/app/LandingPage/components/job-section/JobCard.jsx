import React from "react";
import PropTypes from "prop-types";

const JobCard = ({
  logoSrc,
  jobType,
  title,
  company,
  location,
  description,
  categories,
  isShowDescription = true
}) => {
  return (
    <div className="flex flex-col p-6 bg-white border border-txtFooter rounded-sm max-md:px-5 cursor-pointer transition-all hover:scale-105">
      <header className="flex gap-10 justify-between items-start w-full text-base text-center text-primary">
        <img
          src={logoSrc}
          alt={`${company} logo`}
          width='50'
          className=" aspect-square"
        />
        <div className="gap-2 px-3 py-1 border border-primary">
          {jobType}
        </div>
      </header>
      <div className="self-start mt-4">
        <h3 className="text-lg font-semibold text-footer">{title}</h3>
        <div className="flex gap-2 justify-center items-center text-base text--txtHeader">
          <span>{company}</span>
          <span>{location}</span>
        </div>
      </div>
      {isShowDescription ? <p className="mt-4 text-base text-gray7C line-clamp-2">{description}</p> : null}
      <div className="flex gap-2 items-start mt-4 text-sm font-semibold whitespace-nowrap">
        {categories.map((category, index) => (
          <span key={index} className="text-slate-800">{category?.name}</span>
        ))}
      </div>
    </div>
  );
};
JobCard.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  jobType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  isShowDescription: PropTypes.bool
};

export default JobCard;
