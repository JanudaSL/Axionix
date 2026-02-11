import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar.jsx";
import Header from "../Pages/Home/Header.jsx";
import Overview from "../Pages/Home/overview.jsx";
import Explain from "../Pages/Home/Explain.jsx";
import Others from "../Pages/Home/others.jsx";
import Footer from "../Pages/Home/Footer.jsx"; 
import About from "../Pages/Home/about.jsx"; 
import Careers from "../Pages/subreview/Careers.jsx"
import News from "../Pages/subreview/News.jsx"
import Customer from "../Pages/subreview/Customer.jsx"
import Webinar from "../Pages/subreview/Webinar.jsx"
import Problem from "../Pages/subreview/Problem.jsx"
import Chatbot from "../Pages/subreview/Chatbot.jsx"
import Email from "../Pages/subreview/Email.jsx"
import Blog from "../Pages/subreview/Blog.jsx"
import Viewer from "../Pages/Home/viewer.jsx";
import Contact from "../Pages/Home/contact.jsx";
import Diagram from "../Pages/Home/diagram.jsx";
import Sour from "../Pages/Home/sour.jsx"
import Cere from "../Pages/Home/cere.jsx"
import Cert from "../Pages/Home/cert.jsx"


// Create a Home page component that includes both Header and Overview
const HomePage = () => {
  return (
    <>
      <Header />
      <Overview />
      <Explain />
      <Diagram />
      <Others />
      
      <Viewer />
      <Sour />
       <Cert />
      <Cere />
    </>
  );
};

const AppRoute = () => {
  return (
    <>
      {/* Navbar will be visible on all pages */}
      <Navbar />
      
      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
         <Route path="/careers" element={<Careers />} />
          <Route path="/news" element={<News />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="/problem" element={<Problem />} />
           <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/email" element={<Email />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/blog" element={<Blog />} />

        
        {/* Add more routes as needed */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      
      {/* Footer will be visible on all pages */}
      <Footer />
    </>
  );
};

export default AppRoute;
