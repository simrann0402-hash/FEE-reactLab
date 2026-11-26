import {lazy, StrictMode, Suspense} from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
// import { AddForm } from "./AddForm";
import {UpdateForm} from "./UpdateForm";
// import {SighIn} from "./SighIn";
// import {SignUp} from "./SignUp";

//import Home from "./Home";
const Home=lazy(() => import("./Home"));

//import {StudentsApp} from "./StudentsApp";
const StudentsApp = lazy(()=>import("./StudentsApp"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ToastContainer position="top-right" autoClose={2000} />
      <Suspense fallback={<p>Loading..</p>}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="signin" element={<Home />}/>
        <Route path="signup" element={<Home />}/>
        <Route path="/students" element={<StudentsApp />}/>
        <Route path="/update/:id" element={<UpdateForm />}/>
        <Route path="/logout" element={<Home />}/>
      </Routes>
      </Suspense>
    </Router>
  </StrictMode>,
);