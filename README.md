# **Project Title:** Hospital Management System  

## **Project Overview:**  
Developed a comprehensive Hospital Management System designed to streamline administrative, clinical, and patient management workflows. The platform serves healthcare administrators, doctors, and patients by enabling efficient scheduling, billing, and real-time health data tracking. This system significantly improved operational efficiency and enhanced patient care by integrating modular components for various healthcare operations.

```
Directory structure:
└── hs094-hospital-management-system/
    ├── backend/
    │   ├── app.js
    │   ├── package.json
    │   ├── server.js
    │   ├── yarn.lock
    │   ├── .DS_Store
    │   ├── .gitignore
    │   ├── config/
    │   │   ├── config.js
    │   │   ├── logger.js
    │   │   ├── morgan.js
    │   │   └── pg_details.js
    │   ├── controllers/
    │   │   ├── admin.controller.js
    │   │   ├── appointment.controller.js
    │   │   ├── auth.controller.js
    │   │   ├── block.controller.js
    │   │   ├── doctor.controller.js
    │   │   ├── dose.controller.js
    │   │   ├── invoice.controller.js
    │   │   ├── medication.controller.js
    │   │   ├── operator.controller.js
    │   │   ├── patient.controller.js
    │   │   ├── procedure.controller.js
    │   │   ├── room.controller.js
    │   │   ├── slot.controller.js
    │   │   ├── stay.controller.js
    │   │   ├── test.controller.js
    │   │   └── treatment.controller.js
    │   ├── middleware/
    │   │   ├── auth.js
    │   │   ├── error.js
    │   │   └── multer.js
    │   ├── models/
    │   │   ├── admin.js
    │   │   ├── appointment.js
    │   │   ├── block.js
    │   │   ├── doctor.js
    │   │   ├── dose.js
    │   │   ├── index.js
    │   │   ├── medication.js
    │   │   ├── operator.js
    │   │   ├── patient.js
    │   │   ├── procedure.js
    │   │   ├── room.js
    │   │   ├── slot.js
    │   │   ├── stay.js
    │   │   ├── test.js
    │   │   └── treatment.js
    │   ├── routes/
    │   │   ├── admin.route.js
    │   │   ├── appointment.route.js
    │   │   ├── auth.route.js
    │   │   ├── block.route.js
    │   │   ├── doctor.route.js
    │   │   ├── dose.route.js
    │   │   ├── index.js
    │   │   ├── invoice.route.js
    │   │   ├── medication.route.js
    │   │   ├── operator.route.js
    │   │   ├── patient.route.js
    │   │   ├── procedure.route.js
    │   │   ├── room.route.js
    │   │   ├── slot.route.js
    │   │   ├── stay.route.js
    │   │   ├── test.route.js
    │   │   └── treatment.route.js
    │   ├── scripts/
    │   │   └── generateRoom.js
    │   ├── uploads/
    │   └── utils/
    │       ├── ApiError.js
    │       ├── catchAsync.js
    │       └── utility.js
    └── frontend/
        ├── package-lock.json
        ├── package.json
        ├── yarn.lock
        ├── .gitignore
        ├── public/
        │   ├── browserconfig.xml
        │   ├── index.html
        │   ├── manifest.json
        │   ├── robots.txt
        │   └── site.webmanifest
        └── src/
            ├── constants.js
            ├── index.js
            ├── routes.js
            ├── assets/
            │   ├── img/
            │   │   ├── OFL.txt
            │   │   ├── Oswald-VariableFont_wght.ttf
            │   │   ├── README.txt
            │   │   ├── brand/
            │   │   ├── favicon/
            │   │   │   ├── browserconfig.xml
            │   │   │   ├── manifest.json
            │   │   │   └── site.webmanifest
            │   │   ├── flags/
            │   │   ├── hosp/
            │   │   ├── icons/
            │   │   ├── illustrations/
            │   │   ├── pages/
            │   │   ├── static/
            │   │   │   ├── Oswald-Bold.ttf
            │   │   │   ├── Oswald-ExtraLight.ttf
            │   │   │   ├── Oswald-Light.ttf
            │   │   │   ├── Oswald-Medium.ttf
            │   │   │   ├── Oswald-Regular.ttf
            │   │   │   └── Oswald-SemiBold.ttf
            │   │   ├── team/
            │   │   └── technologies/
            │   └── syntax-themes/
            │       ├── ghcolors.json
            │       └── xonokai.json
            ├── components/
            │   ├── AccordionComponent.js
            │   ├── AddBlock.js
            │   ├── AddMedication.js
            │   ├── AddProcedure.js
            │   ├── AddRoom.js
            │   ├── Charts.js
            │   ├── Code.js
            │   ├── CodeEditor.js
            │   ├── DocMedication.js
            │   ├── DocTreatment.js
            │   ├── Doc_add_slot.js
            │   ├── Documentation.js
            │   ├── Footer.js
            │   ├── Navbar.js
            │   ├── Op_add_docslot.js
            │   ├── PDose.js
            │   ├── PQuery.js
            │   ├── PStay.js
            │   ├── PTest.js
            │   ├── PTreatment.js
            │   ├── Patient_signup.js
            │   ├── Preloader.js
            │   ├── Progress.js
            │   ├── ScrollToTop.js
            │   ├── Sidebar.js
            │   ├── Sidebar_admin.js
            │   ├── Sidebar_doc.js
            │   ├── Sidebar_patient_data.js
            │   ├── Tables.js
            │   ├── Widgets.js
            │   ├── admit_form.js
            │   ├── doctor_appointment_query.js
            │   ├── doctor_signup.js
            │   ├── foot.js
            │   ├── invoicePdf.js
            │   ├── operator_signup.js
            │   ├── patient_data.js
            │   ├── set_appointment.js
            │   ├── styles.css
            │   └── top_nav.js
            ├── data/
            │   ├── charts.js
            │   ├── commands.js
            │   ├── features.js
            │   ├── notifications.js
            │   ├── pages.js
            │   ├── tables.js
            │   ├── teamMembers.js
            │   └── transactions.js
            ├── pages/
            │   ├── AdmPatients.js
            │   ├── Admin_Doc_add.js
            │   ├── Admin_Op_add.js
            │   ├── Admin_del.js
            │   ├── Doc_Patient_List.js
            │   ├── Doc_Patient_Query.js
            │   ├── Doc_Slot.js
            │   ├── Doc_Slot_Add.js
            │   ├── Doctors.js
            │   ├── FDAdmit.js
            │   ├── FDAppoint.js
            │   ├── HomePage.js
            │   ├── Presentation.js
            │   ├── Procedures.js
            │   ├── Settings.js
            │   ├── Transactions.js
            │   ├── Upgrade.js
            │   ├── ViewTests.js
            │   ├── invoiceHandler.js
            │   ├── medicines.js
            │   ├── operators.js
            │   ├── patients.js
            │   ├── room_block.js
            │   ├── components/
            │   │   ├── Accordion.js
            │   │   ├── Alerts.js
            │   │   ├── Badges.js
            │   │   ├── Breadcrumbs.js
            │   │   ├── Buttons.js
            │   │   ├── Forms.js
            │   │   ├── Modals.js
            │   │   ├── Navbars.js
            │   │   ├── Navs.js
            │   │   ├── Pagination.js
            │   │   ├── Popovers.js
            │   │   ├── Progress.js
            │   │   ├── Tables.js
            │   │   ├── Tabs.js
            │   │   ├── Toasts.js
            │   │   ├── Tooltips.js
            │   │   ├── footer.js
            │   │   ├── header.js
            │   │   └── userCards.js
            │   ├── dashboard/
            │   │   └── DashboardOverview.js
            │   ├── documentation/
            │   │   ├── AboutUs.js
            │   │   ├── ContactUs.js
            │   │   ├── DocsChangelog.js
            │   │   ├── DocsFolderStructure.js
            │   │   ├── Doctorlist.js
            │   │   ├── Doctors.js
            │   │   ├── History.js
            │   │   ├── Vision.js
            │   │   └── styles.css
            │   ├── examples/
            │   │   ├── AboutUs.js
            │   │   ├── ForgotPassword.js
            │   │   ├── Lock.js
            │   │   ├── NotFound.js
            │   │   ├── ResetPassword.js
            │   │   ├── ServerError.js
            │   │   ├── Signin.js
            │   │   └── Signup.js
            │   └── tables/
            │       └── BootstrapTables.js
            ├── scss/
            │   ├── volt.scss
            │   └── volt/
            │       ├── _components.scss
            │       ├── _functions.scss
            │       ├── _layout.scss
            │       ├── _mixins.scss
            │       ├── _reboot.scss
            │       ├── _utilities.scss
            │       ├── _variables.scss
            │       ├── _vendor.scss
            │       ├── components/
            │       │   ├── _accordions.scss
            │       │   ├── _alerts.scss
            │       │   ├── _avatars.scss
            │       │   ├── _badge.scss
            │       │   ├── _blog-cards.scss
            │       │   ├── _breadcrumb.scss
            │       │   ├── _buttons.scss
            │       │   ├── _card.scss
            │       │   ├── _carousel.scss
            │       │   ├── _charts.scss
            │       │   ├── _close.scss
            │       │   ├── _counters.scss
            │       │   ├── _custom-forms.scss
            │       │   ├── _datepicker.scss
            │       │   ├── _dropdown.scss
            │       │   ├── _dropzone.scss
            │       │   ├── _forms.scss
            │       │   ├── _icon-box.scss
            │       │   ├── _images.scss
            │       │   ├── _input-group.scss
            │       │   ├── _list-group.scss
            │       │   ├── _modal.scss
            │       │   ├── _nav.scss
            │       │   ├── _pagination.scss
            │       │   ├── _popover.scss
            │       │   ├── _preloader.scss
            │       │   ├── _pricing-cards.scss
            │       │   ├── _progress.scss
            │       │   ├── _scrollbar.scss
            │       │   ├── _shapes.scss
            │       │   ├── _tables.scss
            │       │   ├── _timelines.scss
            │       │   ├── _tooltip.scss
            │       │   └── _type.scss
            │       ├── layout/
            │       │   ├── _footer.scss
            │       │   ├── _navbar.scss
            │       │   ├── _section.scss
            │       │   ├── _sidebar.scss
            │       │   └── _sidenav.scss
            │       ├── mixins/
            │       │   ├── _animations.scss
            │       │   ├── _background-variant.scss
            │       │   ├── _icon.scss
            │       │   ├── _modals.scss
            │       │   ├── _popover.scss
            │       │   ├── _transform.scss
            │       │   └── _utilities.scss
            │       ├── themes/
            │       │   ├── _variables-dark.scss
            │       │   ├── _variables-light.scss
            │       │   └── _variables-sunset.scss
            │       ├── utilities/
            │       │   ├── _animations.scss
            │       │   ├── _backgrounds.scss
            │       │   ├── _helper.scss
            │       │   ├── _position.scss
            │       │   ├── _shadows.scss
            │       │   ├── _sizing.scss
            │       │   ├── _text.scss
            │       │   └── _transform.scss
            │       └── vendor/
            │           ├── _datepicker.scss
            │           ├── _headroom.scss
            │           ├── _prism.scss
            │           ├── chartist/
            │           │   ├── _chartist.scss
            │           │   └── settings/
            │           │       └── _chartist-settings.scss
            │           └── wizard/
            │               ├── _form.scss
            │               ├── _mixins.scss
            │               └── _variables.scss
            └── utils/
                └── augmentedAxios.js

```
### **Technologies Used:**  
- **Backend:** Node.js, Express.js, PostgreSQL for robust server-side application logic and a relational database ensuring data integrity and scalability.  
- **Frontend:** React.js for a dynamic, responsive user interface, leveraging React Bootstrap for consistent UI design.  
- **Security:** Helmet.js and xss-clean for securing HTTP headers and sanitizing input, ensuring data protection.  
- **Others:** Sequelize ORM for database management, Winston for logging, and Morgan for HTTP request monitoring.  

### **Responsibilities:**   
- Architected the entire backend system, focusing on modular and maintainable API design.  
- Led the development of RESTful APIs for core functionalities such as appointment scheduling, medication management, and billing.  
- Collaborated with my teammates to design an intuitive user interface that adheres to modern UX principles.  
- Implemented middleware for error handling, authentication, and authorization using JWT.  
- Optimized database queries and schema design to handle high volumes of patient and clinical data efficiently.  

### **Challenges and Solutions:**  
- **Challenge:** Integrating real-time scheduling to manage overlapping doctor appointments and resource allocation efficiently.  
- **Solution:** Designed a conflict-free slot allocation system using Sequelize's transaction management and implemented real-time updates with WebSocket communication.  

<!-- **Outcomes:**  
- Reduced appointment scheduling time by 40% with the introduction of the real-time scheduling system.  
- Achieved 98% system uptime with robust error handling and logging mechanisms.  
- Successfully onboarded over 100 healthcare professionals and streamlined operations for a medium-sized hospital within six months of deployment. -->