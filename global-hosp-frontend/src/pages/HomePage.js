import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { routes } from "../routes";

// pages
import Presentation from "./Presentation";
import Upgrade from "./Upgrade";
import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Settings from "./Settings";
import FDAdmit from "./FDAdmit";
import BootstrapTables from "./tables/BootstrapTables";
import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";
import FDAppoint from "./FDAppoint";
import AdmPatients from "./AdmPatients";
import Doctors from "./Doctors";
import Doc_Patient_List from "./Doc_Patient_List";
import Sidebar_admin from "../components/Sidebar_admin";
import Sidebar_doc from "../components/Sidebar_doc";
import Sidebar_patient_data from "../components/Sidebar_patient_data";
import PTest from "../components/PTest";
import PTreatment from "../components/PTreatment";
import PDose from "../components/PDose";
import PStay from "../components/PStay";
import AddBlock from "../components/AddBlock";
import AddRoom from "../components/AddRoom";
import AddMedication from "../components/AddMedication";
import AddProcedure from "../components/AddProcedure";
import PQuery from "../components/PQuery";
import Doc_Patient_Query from "./Doc_Patient_Query";
import DocMedication from "../components/DocMedication";
import DocTreatment from "../components/DocTreatment";
import { DocsignUp } from "../components/doctor_signup";
import Admin_Doc_add from "./Admin_Doc_add";
import Admin_del from "./Admin_del";
import Admin_Op_add from "./Admin_Op_add";
import Doc_Slot from "./Doc_Slot";
import operators from "./operators";
import { MedicationList } from "../components/Widgets";
import room_block from "./room_block";
import Procedures from "./Procedures";
import { DocAddSlot } from "../components/Doc_add_slot";
// import Doc_Slot_add from '../Doc_Slot_Add';

// documentation pages
import AboutUs from "./documentation/AboutUs";
import ContactUs from "./documentation/ContactUs";
import History from "./documentation/History";
import Vision from "./documentation/Vision";
import DocsFolderStructure from "./documentation/DocsFolderStructure";
import DocsBuild from "./documentation/Doctors";
import DocsChangelog from "./documentation/DocsChangelog";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";
import patients from "./patients";
import medicines from "./medicines";
import invoicePdf from "../components/invoicePdf.js";
import invoiceHandler from "./invoiceHandler";
import ViewTests from "./ViewTests";

const RouteWithLoader = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader show={!loaded} />
      {loaded && children}
    </>
  );
};

const RouteWithSidebar = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader show={!loaded} />
      <Sidebar />
      <main className="content">
        {/* <Navbar /> */}
        <br />
        {loaded && children}
        <br />
      </main>
    </>
  );
};

const RouteWithSidebarAdmin = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader show={!loaded} />
      <Sidebar_admin />
      <main className="content">
        {/* <Navbar /> */}
        <br />
        {loaded && children}
        <br />
      </main>
    </>
  );
};

const RouteWithSidebarDoc = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader show={!loaded} />
      <Sidebar_doc />
      <main className="content">
        {/* <Navbar /> */}
        <br />
        {loaded && children}
        <br />
      </main>
    </>
  );
};

const RouteWithSidebarData = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader show={!loaded} />
      <Sidebar_patient_data />
      <main className="content">
        {/* <Navbar /> */}
        <br />
        {loaded && children}
        <br />
      </main>
    </>
  );
};

export default () => (
  <Routes>
    {/* Basic Routes with Loader */}
    <Route
      path={routes.Presentation.path}
      element={<RouteWithLoader><Presentation /></RouteWithLoader>}
    />
    <Route
      path={routes.Signin.path} 
      element={<RouteWithLoader><Signin /></RouteWithLoader>}
    />
    <Route
      path={routes.Signup.path}
      element={<RouteWithLoader><Signup /></RouteWithLoader>}
    />
    <Route
      path={routes.ForgotPassword.path}
      element={<RouteWithLoader><ForgotPassword /></RouteWithLoader>}
    />
    <Route
      path={routes.ResetPassword.path}
      element={<RouteWithLoader><ResetPassword /></RouteWithLoader>}
    />
    <Route
      path={routes.Lock.path}
      element={<RouteWithLoader><Lock /></RouteWithLoader>}
    />
    <Route
      path={routes.NotFound.path}
      element={<RouteWithLoader><NotFoundPage /></RouteWithLoader>}
    />
    <Route
      path={routes.ServerError.path}
      element={<RouteWithLoader><ServerError /></RouteWithLoader>}
    />

    {/* Routes with Regular Sidebar */}
    <Route
      path={routes.DashboardOverview.path}
      element={<RouteWithSidebar><DashboardOverview /></RouteWithSidebar>}
    />
    <Route
      path={routes.Transactions.path}
      element={<RouteWithSidebar><Transactions /></RouteWithSidebar>}
    />
    <Route
      path={routes.Settings.path}
      element={<RouteWithSidebar><Settings /></RouteWithSidebar>}
    />
    <Route
      path={routes.FDAdmit.path}
      element={<RouteWithSidebar><FDAdmit /></RouteWithSidebar>}
    />
    <Route
      path={routes.FDAppoint.path}
      element={<RouteWithSidebar><FDAppoint /></RouteWithSidebar>}
    />
    <Route
      path={routes.Doctors.path}
      element={<RouteWithSidebar><Doctors /></RouteWithSidebar>}
    />

    {/* Admin Routes */}
    <Route
      path={routes.DashboardOverview.path2}
      element={<RouteWithSidebarAdmin><DashboardOverview /></RouteWithSidebarAdmin>}
    />
    <Route
      path={routes.Doc_add.path}
      element={<RouteWithSidebarAdmin><Admin_Doc_add /></RouteWithSidebarAdmin>}
    />
    <Route
      path={routes.Usr_del.path}
      element={<RouteWithSidebarAdmin><Admin_del /></RouteWithSidebarAdmin>}
    />
    <Route
      path={routes.Op_add.path}
      element={<RouteWithSidebarAdmin><Admin_Op_add /></RouteWithSidebarAdmin>}
    />

    {/* Doctor Routes */}
    <Route
      path={routes.DashboardOverview.path3}
      element={<RouteWithSidebarDoc><DashboardOverview /></RouteWithSidebarDoc>}
    />
    <Route
      path={routes.PatientShow.path2}
      element={<RouteWithSidebarDoc><Doc_Patient_List /></RouteWithSidebarDoc>}
    />
    <Route
      path={routes.Doc_Slot.path}
      element={<RouteWithSidebarDoc><Doc_Slot /></RouteWithSidebarDoc>}
    />
    <Route
      path={routes.PQuery.path}
      element={<RouteWithSidebarDoc><Doc_Patient_Query /></RouteWithSidebarDoc>}
    />

    {/* Data Entry Routes */}
    <Route
      path={routes.PatientTest.path}
      element={<RouteWithSidebarData><PTest /></RouteWithSidebarData>}
    />
    <Route
      path={routes.PatientTreatment.path}
      element={<RouteWithSidebarData><PTreatment /></RouteWithSidebarData>}
    />
    <Route
      path={routes.PatientDose.path}
      element={<RouteWithSidebarData><PDose /></RouteWithSidebarData>}
    />
    <Route
      path={routes.Tests.path}
      element={<RouteWithSidebarData><ViewTests /></RouteWithSidebarData>}
    />

    {/* Documentation Routes */}
    <Route
      path={routes.AboutUs.path}
      element={<RouteWithLoader><AboutUs /></RouteWithLoader>}
    />
    <Route
      path={routes.ContactUs.path}
      element={<RouteWithLoader><ContactUs /></RouteWithLoader>}
    />
    <Route
      path={routes.History.path}
      element={<RouteWithLoader><History /></RouteWithLoader>}
    />
    <Route
      path={routes.Vision.path}
      element={<RouteWithLoader><Vision /></RouteWithLoader>}
    />

    {/* Invoice Route */}
    <Route 
      path="/get/invoice/:id"
      element={<RouteWithSidebar><invoiceHandler /></RouteWithSidebar>}
    />

    <Route path="*" element={<Navigate to={routes.Presentation.path} />} />
  </Routes>
);