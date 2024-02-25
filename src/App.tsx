import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./PageComponets/Home";
import { AboutUs } from "./PageComponets/About";
import { Contact } from "./PageComponets/Contact";
import { FAQs } from "./PageComponets/Faqs";
import { Privancy } from "./PageComponets/Privancy";
import { TermaConditions } from "./PageComponets/Terms&Condtions";
import Purcharse from "./PageComponets/AuthRequired/Purchase";
import ConfirmTransaction from "./PageComponets/AuthRequired/Confirm";

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
         <Route path="/purchase" element={<Purcharse/>}></Route>
         <Route path="/confirm" element={<ConfirmTransaction/>}></Route>
        
        </Routes>
      </BrowserRouter>
  );
}

export default App;
