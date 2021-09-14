import React from "react";

const Info = ({
  companySize,
  foundingYear,
  headquarters,
  industry,
  website,
} = {}) => {
  const checkNull = (v) => (v === null || v === undefined ? "N/A" : v);

  const checkSize = (i) => (i >= 10000 ? "10000+" : i);

  return (
    <div className="innerDiv">
      <h5>
        Industry: <span>{checkNull(industry)}</span>
      </h5>
      <h5>
        Company Size:{" "}
        <span>
          {companySize === undefined
            ? checkNull(headquarters)
            : checkSize(companySize)}
        </span>
      </h5>
      <h5>
        Headquarters: <span>{checkNull(headquarters)}</span>
      </h5>
      <h5>
        Founding Year: <span>{checkNull(foundingYear)}</span>
      </h5>
      <h5>
        Website:{" "}
        <a href={website} target="_blank" rel="noreferrer">
          {checkNull(website)}
        </a>
      </h5>
    </div>
  );
};

export default Info;
