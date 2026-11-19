import {lazy, StrictMode, Suspense} from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import {AddForm } from "./AddForm";
import {Updateform} from 

//import Home from "./Home";
const Home=lazy(()=> import("./src0/StudentsApp"));

//import { StudentsApp} from "./StudentsApp";
const StudentsApp=lazy(()=> import("./src0/StudentsApp"));

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <ToastContainer position="top-right"
        </Router>
    </StrictMode>
)



