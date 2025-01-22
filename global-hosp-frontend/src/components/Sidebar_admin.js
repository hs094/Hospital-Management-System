import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBoxOpen,
  faChartPie,
  faCog,
  faFileAlt,
  faHandHoldingUsd,
  faSignOutAlt,
  faTable,
  faTimes,
  faCalendarAlt,
  faMapPin,
  faInbox,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import {
  Nav,
  Badge,
  Image,
  Button,
  Dropdown,
  Accordion,
  Navbar,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import { FRONTEND_URL } from "../constants.js";

import { routes } from "../routes";
import ThemesbergLogo from "../assets/img/themesberg.svg";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Button
            as={Nav.Link}
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              <span className="sidebar-icon">
                <FontAwesomeIcon icon={icon} />{" "}
              </span>
              <span className="sidebar-text">{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column">{children}</Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props) => {
    const {
      title,
      link,
      size,
      type,
      spl,
      external,
      target,
      icon,
      image,
      badgeText,
      badgeBg = "secondary",
      badgeColor = "primary",
    } = props;
    const classNames = badgeText
      ? "d-flex justify-content-start align-items-center justify-content-between"
      : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? (
              <span className="sidebar-icon">
                <FontAwesomeIcon icon={icon} />{" "}
              </span>
            ) : null}
            {image ? (
              <Image
                src={image}
                width={20}
                height={20}
                className="sidebar-icon svg-icon"
              />
            ) : null}

            <span
              className="sidebar-text"
              style={{ fontSize: size, fontWeight: type }}
            >
              {title}
            </span>
          </span>
          {badgeText ? (
            <Badge
              pill
              bg={badgeBg}
              text={badgeColor}
              className="badge-md notification-count ms-2"
            >
              {badgeText}
            </Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.assign(`${FRONTEND_URL}/sign-in`);
  };

  return (
    <>
      <Navbar
        expand={false}
        collapseOnSelect
        variant="dark"
        className="navbar-theme-primary px-4 d-md-none"
      >
        <Navbar.Brand
          className="me-lg-5"
          as={Link}
          to={routes.DashboardOverview.path}
        >
          <Image src={ReactHero} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle
          as={Button}
          aria-controls="main-navbar"
          onClick={onCollapse}
        >
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={100} in={show} classNames="sidebar-transition">
        <SimpleBar
          className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}
        >
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image
                    src={ReactHero}
                    className="card-img-top rounded-circle border-white"
                  />
                </div>
                <div className="d-block">
                  <h5>Global Hospitals</h5>
                </div>
              </div>
              <Nav.Link
                className="collapse-close d-md-none"
                onClick={onCollapse}
              >
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              {!show && (
                <NavItem
                  title="Global Hospitals"
                  size="20px"
                  type="bold"
                  image={ReactHero}
                />
              )}
              <Dropdown.Divider className="my-3 border-indigo" />
              <NavItem
                title="Your Profile"
                link={routes.DashboardOverview.path2}
                icon={faChartPie}
              />
              <NavItem
                title="Add Operator"
                icon={faChartPie}
                link={routes.Op_add.path}
              />
              <NavItem
                title="Show Operator"
                icon={faChartPie}
                link={routes.Op_show.path}
              />
              <NavItem
                title="Add Doctor"
                icon={faChartPie}
                link={routes.Doc_add.path}
              />
              <NavItem
                title="Show Doctor"
                icon={faChartPie}
                link={routes.Doc_show.path}
              />
              <Dropdown.Divider className="my-3 border-indigo" />
              <NavItem
                title="Delete Stakeholders"
                icon={faChartPie}
                link={routes.Usr_del.path}
              />

              {/* <CollapsableNavItem eventKey="tables/" title="Tables" icon={faTable}>
                <NavItem title="Bootstrap Table" link={routes.BootstrapTables.path} />
              </CollapsableNavItem> */}

              {/* <CollapsableNavItem eventKey="examples/" title="Page Examples" icon={faFileAlt}>
                <NavItem title="Sign In" link={routes.Signin.path} />
                <NavItem title="Sign Up" link={routes.Signup.path} />
                <NavItem title="Forgot password" link={routes.ForgotPassword.path} />
                <NavItem title="Reset password" link={routes.ResetPassword.path} />
                <NavItem title="Lock" link={routes.Lock.path} />
                <NavItem title="404 Not Found" link={routes.NotFound.path} />
                <NavItem title="500 Server Error" link={routes.ServerError.path} />
              </CollapsableNavItem> */}

              {/* <Dropdown.Divider className="my-3 border-indigo" />

              <CollapsableNavItem eventKey="components/" title="Components" icon={faBoxOpen}>
                <NavItem title="Accordion" link={routes.Accordions.path} />
                <NavItem title="Alerts" link={routes.Alerts.path} />
                <NavItem title="Badges" link={routes.Badges.path} />
                <NavItem title="Breadcrumbs" link={routes.Breadcrumbs.path} />
                <NavItem title="Buttons" link={routes.Buttons.path} />
                <NavItem title="Forms" link={routes.Forms.path} />
                <NavItem title="Modals" link={routes.Modals.path} />
                <NavItem title="Navbars" link={routes.Navbars.path} />
                <NavItem title="Navs" link={routes.Navs.path} />
                <NavItem title="Pagination" link={routes.Pagination.path} />
                <NavItem title="Popovers" link={routes.Popovers.path} />
                <NavItem title="Progress" link={routes.Progress.path} />
                <NavItem title="Tables" link={routes.Tables.path} />
                <NavItem title="Tabs" link={routes.Tabs.path} />
                <NavItem title="Toasts" link={routes.Toasts.path} />
                <NavItem title="Tooltips" link={routes.Tooltips.path} />
              </CollapsableNavItem> */}

              <Button
                as={Link}
                onClick={handleSignOut}
                variant="secondary"
                className="upgrade-to-pro"
              >
                <FontAwesomeIcon icon={faRocket} className="me-1" /> SignOut{" "}
              </Button>
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
