import React, { Component } from "react";
import "./DashboardAdmin.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Redirect } from "react-router-dom";

import Role from "../Role.jsx";
import NavBar from "../NavBar.jsx";
import RoleForm from "../RoleForm.jsx";
import Position from "../Position.jsx";
import Department from "../Department.jsx";
import AdminPortal from "./AdminPortal.jsx";
import AdminProjectBid from "./AdminProjectBid.jsx";
import NotFound404 from "../NotFound404.jsx";
import AdminCreatOrder from "./AdminCreatOrdrs";
import AdminSavedOrder from "./AdminSavedOrder";
import AdminActiveOrder from "./AdminActiveOrder";
import AdminPreviewOrder from "./AdminPreviewOrder";
import AdminSetReminder from "./AdminSetReminder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUsersCog,
  faUsers,
  faChair,
  faBuilding,
  faDollarSign,
  faTasks
} from "@fortawesome/free-solid-svg-icons";
import AdminSavedEdit from "./AdminSavedEdit";
import AdminHome from "./AdminHome";
import model from "./model/model";

// function RoleAdminF() {
//   return <Role />;
// }
// function RoleFormF() {
//   return <RoleForm />;
// }

// function PositionF() {
//   return <Position />;
// }
// function DepartmentF() {
//   return <Department />;
// }
// function AdminPortalF() {
//   return <AdminPortal />;
// }
// function AdminProjectBidF() {
//   return <AdminProjectBid />;
// }

class DashboardAdmin extends Component {
  state = {
    redirect: true,
    checked: true 
  };
  handleChange=(checked)=> {
    console.log("switch");
    // var sidebarV = this.refs.sidebar;
    // var sidebarV = React.findDOMNode( this.refs.sidebar);
    // sidebarV.style.disply="none";
    
    if(this.state.checked==true){ 
       // document.getElementById("sidebar").setAttribute("style", "display:none")
      document.getElementById("sidebar").setAttribute("class", "display-none");
    }
    // document.getElementById("sidebar").setAttribute("style", "display:block");
    else{document.getElementById("sidebar").setAttribute("class", "display-block");}   
    this.setState({ checked });
  }

  render() {
    return (
      <Router>
        {/* <Redirect to='/login'  /> */}

        <div id="outer-main-div">
          <div id="outer-nav">
            <NavBar loginInfo={this.props.data} checked={this.state.checked} handleChange={this.handleChange} onLogout={this.props.onLogout}/>
          </div>

          <div id="main-non-nav">
            <div id="sidebar">
              <div id="sidebar-top-content" />
              <div id="main-title">
                <FontAwesomeIcon icon={faUsersCog} className="sidebar-icon" />
                AdminDashboard
              </div>
              <ul className="navbar-ul">
                <li>
                  <Link to="/admin/home">
                    <FontAwesomeIcon icon={faUsers} className="sidebar-icon" /> 
                    Home
                  </Link> 
                </li>
                <li>
                  <Link to="/admin/AdminCreatOrder">
                    <FontAwesomeIcon icon={faChair} className="sidebar-icon" /> 
                    CreateOrders
                  </Link> 
                </li>
                <li>
                  <Link to="/admin/AdminSavedOrder">
                    <FontAwesomeIcon icon={faChair} className="sidebar-icon" /> 
                    SavedOrders
                  </Link> 
                </li>
                <li>
                  <Link to="/admin/AdminActiveOrder">
                    <FontAwesomeIcon
                      icon={faBuilding}
                      className="sidebar-icon"
                    /> 
                    ActiveOrders
                  </Link> 
                </li>
                <li>
                  <Link to="/admin/AdminPreviewOrder">
                    <FontAwesomeIcon
                      icon={faDollarSign}
                      className="sidebar-icon"
                    /> 
                    PreviewsOrders
                  </Link> 
                </li>
                <li>
                  <Link to="/admin/AdminSetReminder">
                    <FontAwesomeIcon icon={faTasks} className="sidebar-icon" /> 
                    SetReminder
                  </Link> 
                </li>
                
              </ul>
            </div>
            {/* <div id="sidebar-top-content" /> */}
            <div id="main-area">
              <div id="sidebar-top-content" />
              {/* //table */}
              {/* <RoleAdmin/> */}
              <Switch>
                <Route exact path="/admin/home" component={AdminHome} />
                {/* <Route path="/admin/role/form" exact component={RoleFormF} /> */}
                {/* <Route
                  path="/admin/position"
                  exact
                  component={PositionF}
                />
                <Route
                  path="/admin/department"
                  exact
                  component={DepartmentF}
                />
                 <Route
                  path="/admin/portal-master"
                  exact
                  component={AdminPortalF}
                />
                 <Route
                  path="/admin/project-bid"
                  exact
                  component={AdminProjectBidF}
                /> */}
                <Route
                path="/admin/AdminCreatOrder"
                exact
                component={AdminCreatOrder}
                />
                <Route
                path="/admin/AdminSavedOrder"
                exact
                component={AdminSavedOrder}
                />
                <Route
                path="/admin/AdminActiveOrder"
                exact
                component={AdminActiveOrder}
                />
                
                <Route
                path="/admin/AdminPreviewOrder"
                exact
                component={AdminPreviewOrder}
                />
                <Route
                path="/admin/model/model"
                exact
                component={model}
                />
                
                <Route
                path="/admin/AdminSavedEdit/:id" render={(props) => <AdminSavedEdit {...props}/>}
                />
               


                <Route
                path="/admin/AdminSetReminder"
                exact
                component={AdminSetReminder}
                />
                <Route
                  exact
                  path="/admin"
                  render={() => <Redirect to="/admin/home" />}
                />
                <Route render={() => 
<NotFound404/>
                  // <Redirect to="/admin/role" />
                } />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default DashboardAdmin;
