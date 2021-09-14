import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "./context/context";

const CompanyCard = (company) => {
  let { companiesList, setCompaniesList } = useGlobalContext();

  return (
    <CardWrapper>
      <CardHeader>
        <CardHeading>
          <Link
            className="link"
            to={{
              pathname: `/singlecompany/${company.name}`,
              state: company,
            }}
          >
            {company.name}
          </Link>
        </CardHeading>
      </CardHeader>
      <CardBody>
        <CardOptions>
          <p>{company.status}</p>
          {company.finances && (
            <CardOptionsNote>+ Finances available</CardOptionsNote>
          )}
          {company.contact && (
            <CardOptionsNote>+ Contact available</CardOptionsNote>
          )}
        </CardOptions>
      </CardBody>
      <CardButtonWrapper>
        <button>
          <Link
            className="link"
            to={{
              pathname: `/editCompany/${company.name}`,
              state: { ...company },
            }}
          >
            Edit
          </Link>
        </button>
        <button
          onClick={() => {
            companiesList = companiesList.filter((obj) => {
              return obj.name !== company.name;
            });
            if (
              window.confirm(`Are you sure you wish to erase ${company.name}?`)
            ) {
              setCompaniesList(companiesList);
            }
          }}
        >
          Delete
        </button>
      </CardButtonWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  align-items: stretch;
  background-color: #e8eff4;
`;

const CardHeader = styled.header`
  padding-bottom: 8px;
  .link {
    text-decoration: none;
    width: 100%;
    height: 6rem;
    line-height: 6rem;
    text-align: center;
  }
  a:link,
  a:visited {
    background-color: #385E72;
    color: white;
    text-decoration: none;
    display: inline-block;
    white-space: pre-wrap; /* CSS3 */    
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */    
    white-space: -o-pre-wrap; /* Opera 7 */    
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  }

  a:hover,
  a:active {
    background-color: #6AABD2;
  }
`;

const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  height: 120px;
`;

const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

const CardButtonWrapper = styled.div`
  padding-right: 32px;
  padding-left: 32px;
  padding-top: 32px;
  display: flex;
  justify-content: space-evenly;

  a:link,
  a:visited {
    text-decoration: none;
    display: inline-block;
  }

  .link {
    color: black;
  }

  button {
    height: 30px;
    width: 52px;
  }
`;

const CardOptionsNote = styled.small`
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;

const CardOptions = styled.ul`
  padding: 0;
  margin: 0 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`;

export default CompanyCard;
