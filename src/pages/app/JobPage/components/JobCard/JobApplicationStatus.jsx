import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function JobApplicationStatus({ applicants, capacity }) {
    const percentage = useMemo(() => {
        return (applicants / capacity) * 100;
    }
    , [applicants, capacity]);
  return (
    <div className="flex flex-col mt-4 w-full text-sm text-black">
      <ProcessBar percentage={percentage} />
      <div className="flex gap-2 mt-2">
        <span style={{ fontWeight: 600, color: "rgba(37,50,75,1)" }}>
          {applicants} applied
        </span>
        <span style={{ color: "rgba(124,132,147,1)" }}>
          of {capacity} capacity
        </span>
      </div>
    </div>
  );
}
JobApplicationStatus.propTypes = {
  applicants: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired,
};
const ProcessBar = styled.div`
    position: relative;
    background-color: #D6DDEB;
    height: 5px;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: ${(props) => props.percentage}%;
        height: 5px;
        background-color: #56CDAD;
        display: block;
    }
`

export default JobApplicationStatus;
