import React, { useState, useContext } from "react";
import mockData from "./mockData";

const CompanyListContext = React.createContext();

const CompanyListProvider = ({ children }) => {
  // GRAPH INFO
  const [companiesList, setCompaniesList] = useState(mockData);

  return (
    <CompanyListContext.Provider
      value={{
        companiesList,
        setCompaniesList
      }}
    >
      {children}
    </CompanyListContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CompanyListContext);
};

export { CompanyListContext, CompanyListProvider };
