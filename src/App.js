import './App.css';
import {
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import KuppiyaContactUs from './components/ContactUs/KuppiyaContactUs';
import KuppiyaHomePage from './components/HomePage/KuppiyaHomePage';
import PrivacyPolicyPage from './components/PrivacyPolicy/PrivacyPolicyPage';
import TnCPage from './components/TermsConditions/TnCPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <KuppiyaHomePage />
        </Route>
        <Route exact path="/contactus">
          <KuppiyaContactUs />
        </Route>
        <Route exact path="/tandc">
          <TnCPage />
        </Route>
        <Route exact path="/privacypolicy">
          <PrivacyPolicyPage />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;