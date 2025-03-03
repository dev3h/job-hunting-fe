import React from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";

const CategoryCard = ({ icon, name, jobCount, isHighlighted = false }) => {
  return (
    <CardHover className="flex flex-col gap-8 p-8 bg-white rounded-sm transition-all hover:bg-primary border cursor-pointer border-txtFooter h-[214px]">
      <div className="w-12 h-12">
        <div dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-semibold leading-7 text-slate-800">
          {name}
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-lg leading-7 text-slate-500">
            {jobCount} jobs available
          </span>
          <img src="/assets/imgs/svg/arrow-right.svg" alt="" width="20" height="20" />
        </div>
      </div>
    </CardHover>
  );
}

const CardHover = styled.div`
    &:hover span,
    &:hover h3 {
        color: #fff;
    }
    &:hover img,
    &:hover svg {
        filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(1360%) hue-rotate(0deg) brightness(114%) contrast(101%);
    }
`

CategoryCard.propTypes = {
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    jobCount: PropTypes.number.isRequired,
    isHighlighted: PropTypes.bool
}

export default CategoryCard;
