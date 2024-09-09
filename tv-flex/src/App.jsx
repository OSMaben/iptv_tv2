import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Privacy_Policy from "./pages/Privacy_Policy";
import Setup_Guide from "./pages/Setup_Guide";
import Terms_Of_Service from "./pages/Terms_Of_Service";
import Not_Found from "./pages/Not_Found";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Refund from "./pages/Refund";
import Channel_List from "./pages/Channel_List";
import Upload from "./pages/Upload";
import CheckMac from "./pages/CheckMax";
import Download  from "./pages/DownloadApp";
import Samsung from './pages/samsungInstraction';
import AmazonTv from './pages/AmazonFireTv';
import AndroidTv from "./pages/AndroidTv";
import Payment from "./pages/Payment";
import Tutorial from "./pages/Tutorial"
import Faq from "./pages/FaqPage";
import ContactUs from './pages/Contactus';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/channel-list" element={<Channel_List />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/check-mac" element={<CheckMac/>} />
        <Route path="/download" element={<Download/>} />
        <Route path="/amazonTv" element={<AmazonTv/>} />
        <Route path="/samsung" element={<Samsung/>} />
        <Route path="/androidTv" element={<AndroidTv/>} />
        <Route path="/privacy-policy" element={<Privacy_Policy />} />
        <Route path="/setup-guide" element={<Setup_Guide />} />
        <Route path="/setup-guide" element={<Setup_Guide />} />
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/tutorial" element={<Tutorial/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/contactUs" element={<ContactUs/>} />
        <Route path="/terms-of-service" element={<Terms_Of_Service />} />
        <Route path="/refund-policy" element={<Refund />} />
        <Route path="*" element={<Not_Found />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
