import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./PageComponets/Home";
import { AboutUs } from "./PageComponets/About";
import { Contact } from "./PageComponets/Contact";
import { FAQs } from "./PageComponets/Faqs";
import { Privancy } from "./PageComponets/Privancy";
import { TermaConditions } from "./PageComponets/Terms&Condtions";
import { DashBoard } from "./PageComponets/AuthRequired/Dashboard";
import { Wallet } from "./PageComponets/AuthRequired/Wallet";
import { Discover } from "./PageComponets/AuthRequired/Discover";
import { Notifications } from "./PageComponets/AuthRequired/Notifications";
function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs/>}></Route>
          <Route path="/contact-us" element={<Contact/>}></Route>
          <Route path="/Faqs" element={<FAQs/>}></Route>
          <Route path="/privancy" element={<Privancy/>}></Route>
          <Route path="/terms-conditions" element={<TermaConditions/>}></Route>
         <Route path="/dashboard" element={<DashBoard/>}></Route>
         <Route path="/wallet" element={<Wallet/>}></Route>
         <Route path="/discover" element={<Discover/>}></Route>
         <Route path="/notifications" element={<Notifications/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
