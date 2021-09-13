import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CompanyCard from "../components/CompanyCard";
import { useGlobalContext } from "../components/context/context";

const AllCompanies = () => {
  const { companiesList, setCompaniesList } = useGlobalContext();

  const [companies] = useState(companiesList);

  const filterList = (event) => {
    console.log(event);
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
          <Link to="/createCompany">Add Company</Link>
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
`;
const CompanyCardWrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.children.length > 1 ? "1fr 1fr 1fr" : "1fr"};
  grid-gap: 60px;

  @media screen and (max-width: 800px) {
    grid-template-columns: "1fr";
  }

  @media screen and (max-width: 1200px) and (min-width: 800) {
    grid-template-columns: ${(props) =>
      props.children.length > 1 ? "1fr 1fr" : "1fr"};
  }
`;

export default AllCompanies;
