import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllCompanies from "./pages/AllCompanies";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Header from "./components/Header";
import SingleCompany from "./pages/SingleCompany";
import CreateCompany from "./pages/CreateCompany";
import EditCompany from "./pages/EditCompany";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route path="/singlecompany">
            <InnerStyles>
              <SingleCompany />
            </InnerStyles>
          </Route>
          <Route path="/createCompany">
            <InnerStyles>
              <CreateCompany />
            </InnerStyles>
          </Route>
          <Route path="/editCompany">
            <InnerStyles>
              <EditCompany />
            </InnerStyles>
          </Route>
          <Route path="/">
            <InnerStyles>
              <AllCompanies />
            </InnerStyles>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
    background-color: #D9E4EC;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default App;
