import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { Template } from "./components/MainComponent";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
        <Footer />
      </Template>
    </BrowserRouter>
  );
};

const mapStateToProps = (state: { user: any }) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
