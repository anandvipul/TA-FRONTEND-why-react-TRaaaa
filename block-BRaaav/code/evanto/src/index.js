import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header></Header>
    <Hero></Hero>
    <About></About>
    <Blog></Blog>
    <Work></Work>
    <Contact></Contact>
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
