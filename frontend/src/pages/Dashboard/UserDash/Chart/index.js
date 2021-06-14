import React from "react";
import "./style.css";
const Chart = () => {
  return (
    <>
      <div className="flex-wrapper">
        <div className="single-chart">
          <svg viewBox="0 0 24 24" className="circular-chart yellow">
            <path
              className="circle-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              strokeDasharray="85, 100"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="percentage">
              85%
            </text>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Chart;
