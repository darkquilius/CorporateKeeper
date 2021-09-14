import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CompanyCard from "../components/CompanyCard";
import { useGlobalContext } from "../components/context/context";

const AllCompanies = () => {
  const { companiesList, setCompaniesList } = useGlobalContext();

  const [companies] = useState(companiesList);

  const filterList = (event) => {
    const newCompanies = companies.filter((company) => {
      const regexp = RegExp("\\b" + event, "gi");
      return company.name.match(regexp);
    });
    setCompaniesList(newCompanies);
  };

  return (
    <div>
      <UtilityWrapper>
        <button>
          <Link className="link" to="/createCompany">Add Company</Link>
        </button>
        <input
          placeholder="Search"
          onChange={(e) => filterList(e.target.value)}
        ></input>
      </UtilityWrapper>
      <CompanyCardWrapper>
        {companiesList.map((company) => {
          return <CompanyCard key={company.name} {...company} />;
        })}
      </CompanyCardWrapper>
    </div>
  );
};

const UtilityWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  .link {
    text-decoration: none;
    color:black;
  }
  a:link,
  a:visited {
    text-decoration: none;
    color:black;
  }
`;
const CompanyCardWrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.children.length > 1 ? "1fr 1fr 1fr" : "1fr"};
  grid-gap: 60px;

  @media (max-width: 599px) {
    grid-template-columns: "1fr";
  }

  @media (min-width: 600px) and (max-width: 1000px){
    grid-template-columns: ${(props) =>
      props.children.length > 1 ? "1fr 1fr" : "1fr"};
  }

  @media (min-width: 1400px) and (max-width:1800px){
    grid-template-columns: ${(props) =>
      props.children.length > 1 ? "1fr 1fr 1fr 1fr" : "1fr"};
  }

  @media (min-width: 1801px){
    grid-template-columns: ${(props) =>
    props.children.length > 1 ? "1fr 1fr 1fr 1fr 1fr" : "1fr"};
  }
`;

export default AllCompanies;
