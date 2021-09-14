import React, { useState } from "react";
import Pie3D from "../components/charts/Pie3d";
import styled from "styled-components";
import Column3D from "../components/charts/Column3d";
import { useLocation } from "react-router-dom";
import Info from "../components/Info";
import Contact from "../components/Contact";

const SingleCompany = () => {
  const { name, contact } = useLocation().state;
  const { assets, expenses, income, liabilities } =
    useLocation().state.finances ?? {};

  const [showInfo, setShowInfo] = useState(true);
  const [showFinances, setShowFinances] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  return (
    <Wrapper>
      <div>
        <h1>{name}</h1>
      </div>
      <ButtonContainer>
        <button
          onClick={() => {
            setShowInfo(true);
            setShowFinances(false);
            setShowContacts(false);
          }}
        >
          Info
        </button>
        <button
          onClick={() => {
            setShowInfo(false);
            setShowFinances(true);
            setShowContacts(false);
          }}
        >
          Financials
        </button>
        <button
          onClick={() => {
            setShowInfo(false);
            setShowFinances(false);
            setShowContacts(true);
          }}
        >
          Contacts
        </button>
      </ButtonContainer>
      <div
        className="infoContainer"
        style={{ display: showInfo ? "block" : "none" }}
      >
        <Info {...(useLocation().state.info ?? {})} />
      </div>
      <FinancesContainer id="financesContainer" style={{ display: showFinances ? "grid" : "none" }}>
        {assets && liabilities && (
          <div>
            <Pie3D
              data={[
                {
                  label: "Positive Assets",
                  value: parseInt(assets),
                  color: "#66b366",
                },
                {
                  label: "Liabilities",
                  value: parseInt(liabilities),
                  color: "#ff1919",
                },
              ]}
            />
            <div>
              <h5>Assets/Liabilities</h5>
              <p>
                Total Assets:{" "}
                <span style={{ color: "#66b366" }}>
                  ${assets.toLocaleString()}
                </span>
              </p>
              <p>
                Total Liabilities:{" "}
                <span style={{ color: "#ff1919" }}>
                  ${liabilities.toLocaleString()}
                </span>
              </p>
              <span>------------------------------------------</span>
              <p>
                Net A/L:{" "}
                <span
                  style={{
                    color: assets - liabilities > 0 ? "#66b366" : "#ff1919",
                  }}
                >
                  ${(assets - liabilities).toLocaleString()}
                </span>
              </p>
            </div>
          </div>
        )}
        {income && expenses && (
          <div>
            <Column3D
              data={[
                { label: "Income", value: parseInt(income), color: "#006600" },
                {
                  label: "Expenses",
                  value: parseInt(expenses),
                  color: "#ff1919",
                },
              ]}
            />
            <div>
              <h5>Income/Expenses</h5>
              <p>Total Income: <span style={{color: "#006600"}}>${income.toLocaleString()}</span></p>
              <p>Total Expenses: <span style={{color: "#ff1919",}}>${expenses.toLocaleString()}</span></p>
              <span>------------------------------------------</span>
              <p>
                Net A/L:{" "}
                <span
                  style={{
                    color: income - expenses > 0 ? "#006600" : "#ff1919",
                  }}
                >
                  ${(income - expenses).toLocaleString()}
                </span>
              </p>
            </div>
          </div>
        )}
        {useLocation().state.finances === undefined && (
          <h1>Expenses Unavailable...</h1>
        )}
      </FinancesContainer>
      <div
        className="contactsContainer"
        style={{ display: showContacts ? "block" : "none" }}
      >
        <Contact {...contact} />
      </div>
    </Wrapper>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  button {
    width: 300px;
    height: 100px;
    font-size: 36px;
  }

  @media screen and (max-width: 600px) {
    button {
      width: 100px;
      height: 34px;
      font-size: 12px;
    }
  }

  @media screen and (max-width: 1200px) {
    button {
      width: 200px;
      height: 65px;
      font-size: 24px;
    }
  }
`;

const FinancesContainer = styled.div`
  padding-top: 50px;
  justify-items: center;
  gap: 2rem;
  line-height: 1;

  @media (max-width: 1200px) {
    grid-template-columns: "1fr";
  }

  @media (min-width: 1201px){
    grid-template-columns: ${(props) =>{
      let count = 0;
      let elements = props.children;
      for (let i = 0; i < elements.length; i++) {
        if(elements[i] === undefined || elements[i] === false){
          count = count + 1;
        }
      }
      return count > 1 ? "1fr" : "1fr 1fr"}};
  }


  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

const Wrapper = styled.div`
  display: block;
  text-align: center;

  h1 {
    font-size: 5rem;
  }

  h5 {
    font-size: 2rem;
  }

  .contactsContainer {
    padding-top: 50px;
    line-height: 1;
  }

  .infoContainer {
    padding-top: 10px;
  }
`;

export default SingleCompany;
