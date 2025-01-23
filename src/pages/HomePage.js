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
import Operators from "./operators";
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
import Patients from "./patients";
import Medicines from "./medicines";
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
    {/* Basic routes with Loader */}
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

    {/* routes with Regular Sidebar */}
    <Route
      path={routes.DashboardOverview.path}
      element={<RouteWithSidebar><DashboardOverview /></RouteWithSidebar>}
    />
    <Route
      path={routes.Dashboards.path1}
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
      path={routes.AdmPatients.path}
      element={<RouteWithSidebar><AdmPatients /></RouteWithSidebar>}
    />
    <Route
      path={routes.Patients.path}
      elements={<RouteWithSidebar><Patients /></RouteWithSidebar>}
    />

    <Route
      path={routes.FDAppoint.path}
      element={<RouteWithSidebar><FDAppoint /></RouteWithSidebar>}
    />
    <Route
      path={routes.Doctors.path}
      element={<RouteWithSidebar><Doctors /></RouteWithSidebar>}
    />
    <Route
      path={routes.BootstrapTables.path}
      element={<RouteWithSidebar><BootstrapTables /></RouteWithSidebar>}
    />

    {/* Admin routes */}
    <Route
      path={routes.DashboardOverview.path2}
      element={<RouteWithSidebarAdmin><DashboardOverview /></RouteWithSidebarAdmin>}
    />
    <Route
      path={routes.Dashboards.path2}
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
      path={routes.Doc_show.path}
      element={<RouteWithSidebarAdmin><Doctors /></RouteWithSidebarAdmin>}
    />
    <Route
      path={routes.Op_add.path}
      element={<RouteWithSidebarAdmin><Admin_Op_add /></RouteWithSidebarAdmin>}
    />
    <Route
      path={routes.Op_show.path}
      element={<RouteWithSidebarAdmin><Operators /></RouteWithSidebarAdmin>}
    />

    {/* Data Entry */}
    <Route
      path={routes.DashboardOverview.path4}
      element={<RouteWithSidebarData><DashboardOverview /></RouteWithSidebarData>}
    />
    <Route
      path={routes.Doctors.path3}
      element={<RouteWithSidebarData><Doctors /></RouteWithSidebarData>}
    />
    <Route
      path={routes.Dashboards.path4}
      element={<RouteWithSidebarData><DashboardOverview /></RouteWithSidebarData>}
    />
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
    <Route
      path={routes.MedicineShow.path2}
      element={<RouteWithSidebarData><Medicines /></RouteWithSidebarData>}
    />
    <Route
      path={routes.PatientStay.path}
      element={<RouteWithSidebarData><PStay /></RouteWithSidebarData>}
    />
    <Route
      path={routes.AddProcedure.path}
      element={<RouteWithSidebarData><Procedures /></RouteWithSidebarData>}
    />
    <Route
      path={routes.AddMedication.path}
      element={<RouteWithSidebarData><AddMedication /></RouteWithSidebarData>}
    />
    <Route
      path={routes.AddRoom.path}
      element={<RouteWithSidebarData><room_block /></RouteWithSidebarData>}
    />
    <Route
      path={routes.AddBlock.path}
      element={<RouteWithSidebarData><AddBlock /></RouteWithSidebarData>}
    />
    <Route
      path={routes.Patients.path2}
      element={<RouteWithSidebarData><Patients /></RouteWithSidebarData>}
    />
    <Route
      path={routes.AdmPatients.path2}
      element={<RouteWithSidebarData><AdmPatients /></RouteWithSidebarData>}
    />

    {/* Doctor routes */}
    <Route
      path={routes.DashboardOverview.path3}
      element={<RouteWithSidebarDoc><DashboardOverview /></RouteWithSidebarDoc>}
    />
    <Route
      path={routes.Dashboards.path3}
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
    <Route
      path={routes.MedicineShow.path}
      element={<RouteWithSidebarDoc><Medicines /></RouteWithSidebarDoc>}
    />
    <Route
      path={routes.Tests.path2}
      element={<RouteWithSidebarDoc><ViewTests /></RouteWithSidebarDoc>}
    />
    <Route
      path={routes.DocMedication.path}
      element={<RouteWithSidebarDoc><DocMedication /></RouteWithSidebarDoc>}
    />
    <Route
      path={routes.DocTreatment.path}
      element={<RouteWithSidebarDoc><DocTreatment /></RouteWithSidebarDoc>}
    />
    <Route
      path={routes.AdmPatients.path3}
      element={<RouteWithSidebarDoc><AdmPatients /></RouteWithSidebarDoc>}
    />

    {/* Example Components */}
    {/* Component routes */}
    <Route
      path={routes.Accordions.path}
      element={<RouteWithSidebar><Accordion /></RouteWithSidebar>}
    />
    <Route
      path={routes.Alerts.path}
      element={<RouteWithSidebar><Alerts /></RouteWithSidebar>}
    />
    <Route
      path={routes.Badges.path}
      element={<RouteWithSidebar><Badges /></RouteWithSidebar>}
    />
    <Route
      path={routes.Breadcrumbs.path}
      element={<RouteWithSidebar><Breadcrumbs /></RouteWithSidebar>}
    />
    <Route
      path={routes.Buttons.path}
      element={<RouteWithSidebar><Buttons /></RouteWithSidebar>}
    />
    <Route
      path={routes.Forms.path}
      element={<RouteWithSidebar><Forms /></RouteWithSidebar>}
    />
    <Route
      path={routes.Modals.path}
      element={<RouteWithSidebar><Modals /></RouteWithSidebar>}
    />
    <Route
      path={routes.Navs.path}
      element={<RouteWithSidebar><Navs /></RouteWithSidebar>}
    />
    <Route
      path={routes.Navbars.path}
      element={<RouteWithSidebar><Navbars /></RouteWithSidebar>}
    />
    <Route
      path={routes.Pagination.path}
      element={<RouteWithSidebar><Pagination /></RouteWithSidebar>}
    />
    <Route
      path={routes.Popovers.path}
      element={<RouteWithSidebar><Popovers /></RouteWithSidebar>}
    />
    <Route
      path={routes.Progress.path}
      element={<RouteWithSidebar><Progress /></RouteWithSidebar>}
    />
    <Route
      path={routes.Tables.path}
      element={<RouteWithSidebar><Tables /></RouteWithSidebar>}
    />
    <Route
      path={routes.Tabs.path}
      element={<RouteWithSidebar><Tabs /></RouteWithSidebar>}
    />
    <Route
      path={routes.Tooltips.path}
      element={<RouteWithSidebar><Tooltips /></RouteWithSidebar>}
    />
    <Route
      path={routes.Toasts.path}
      element={<RouteWithSidebar><Toasts /></RouteWithSidebar>}
    />

    {/* Documentation routes */}
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
    {/* <Route
      path={routes.DocsFolderStructure.path}
      component={<RouteWithSidebar><DocsFolderStructure /></RouteWithSidebar>}
    />
    <Route
      path={routes.DocsBuild.path}
      component={<RouteWithLoader><DocsBuild /></RouteWithLoader>}
    />
    <Route
      path={routes.DocsChangelog.path}
      component={<RouteWithSidebar><DocsChangelog /></RouteWithSidebar>}
    /> */}

    {/* Invoice Route */}
    <Route
      path="/get/invoice/:id"
      element={<RouteWithSidebar><invoiceHandler /></RouteWithSidebar>}
    />

    <Route path="*" element={<Navigate to={routes.Presentation.path} />} />
  </Routes>
);