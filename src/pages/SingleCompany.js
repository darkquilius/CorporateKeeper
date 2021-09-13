import React, { useState } from "react";
import Pie3D from "../components/charts/Pie3d";
import styled from "styled-components";
import Column3D from "../components/charts/Column3d";
import { useLocation } from "react-router-dom";
import Info from "../components/Info";
import Contact from "../components/Contact";

const SingleCompany = () => {
  // const { name, contacts } = useLocation().state;
  const { name, contact } = useLocation().state;
  const { assets, expenses, income, liabilities } =
    useLocation().state.finances ?? {};

  const [showInfo, setShowInfo] = useState(true);
  const [showFinances, setShowFinances] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  return (
    <Wrapper>
      <h1>{name}</h1>
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
      <div style={{ display: showInfo ? "block" : "none" }}>
        <Info {...(useLocation().state.info ?? {})} />
      </div>
      <div style={{ display: showFinances ? "block" : "none" }}>
        {assets && liabilities && (
          <Pie3D
            data={[
              { label: "Positive Assets", value: parseInt(assets), color: "#66b366"},
              { label: "Liabilities", value: parseInt(liabilities), color: "#ff1919" },
            ]}
          />
        )}
        {income && expenses && (
          <Column3D
            data={[
              { label: "Income", value: parseInt(income), color: "#006600" },
              { label: "Expenses", value: parseInt(expenses), color: "#ff1919" },
            ]}
          />
        )}
        {useLocation().state.finances === undefined && (
          <h1>Expenses Unavailable...</h1>
        )}
      </div>
      <div style={{ display: showContacts ? "block" : "none" }}>
          < Contact {...contact}/>
      </div>
    </Wrapper>
  );
};

const ButtonContainer = styled.div`
  button {
    width: 300px;
    height: 100px;
    font-size: 36px;
  }
`;

const Wrapper = styled.div`
  h1 {
    font-size: 7rem;
  }
`;

export default SingleCompany;
