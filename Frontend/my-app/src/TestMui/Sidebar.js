import React from 'react';
import { Helmet } from "react-helmet";

export const Sidebar = () => {
    // var style1 = {
    //     left: "0px", bottom: "0px"
    // }
    // var style2 = {
    //     left: "0px", width: "0px"
    // }
    // var style3 = {
    //     top: " 0px", height: "160px", right: "0px"
    // }
    // var style4 = {
    //     top: "0px", height: "52px"
    // }
    // var style5 = {
    //     left: "0px", bottom: "0px"
    // }
    // var style6 = {
    //     left: "0px", width: "0px"
    // }
    // var style7 = {
    //     top: " 0px", right: "0px"
    // }
    // var style8 = {
    //     top: "0px", height: "0px"
    // }
    var style1 = {
        width: "450px; left: 0px; bottom: 0px",
      };
      var style2 = {
        left: "0px; width: 214px",
      };
      var style3 = {
        top: "0px; height: 362px; right: 0px",
      };
      var style4 = {
        top: "0px; height: 268px",
      };
      var style5 = {
        left: "0px; bottom: 0px;",
      };
      var style6 = {
        left: "0px; width: 0px",
      };
      var style7 = {
        top: "0px; right: 0px",
      };
      var style8 = {
        top: "0px; height: 0px",
      };
    return (
        <>

            <div>
                <Helmet>
                    <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href="./assets1/img/apple-icon.png"
                    />
                    <link rel="icon" type="image/png" href="./assets1/img/favicon.png" />

                    <title>Material Dashboard 2 by Creative Tim</title>

                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700"
                    />

                    <link href="./assets1/css/nucleo-icons.css" rel="stylesheet" />
                    <link href="./assets1/css/nucleo-svg.css" rel="stylesheet" />

                    <script
                        src="https://kit.fontawesome.com/42d5adcbca.js"
                        crossorigin="anonymous"
                    ></script>

                    <link
                        href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
                        rel="stylesheet"
                    />

                    <link
                        id="pagestyle"
                        href="./assets1/css/material-dashboard.css?v=3.0.4"
                        rel="stylesheet"
                    />
                </Helmet>
                <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark ps bg-white" id="sidenav-main">
                    <div className="sidenav-header">
                        <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                        <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
                            <img src="../assets1/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo" />
                            <span className="ms-1 font-weight-bold text-white">Material Dashboard 2</span>
                        </a>
                    </div>
                    <hr className="horizontal light mt-0 mb-2" />
                    <div className="collapse navbar-collapse w-auto ps ps--active-y" id="sidenav-collapse-main">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white active bg-gradient-primary" href="../pages/dashboard.html">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">dashboard</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " href="../pages/tables.html">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">table_view</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Tables</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " href="../pages/billing.html">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">receipt_long</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Billing</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " href="../pages/virtual-reality.html">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">view_in_ar</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Virtual Reality</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " href="../pages/rtl.html">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">format_textdirection_r_to_l</i>
                                    </div>
                                    <span className="nav-link-text ms-1">RTL</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " href="../pages/notifications.html">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">notifications</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Notifications</span>
                                </a>
                            </li>
                            <li className="nav-item mt-3">
                                <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " href="../pages/profile.html">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">person</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Profile</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " href="../pages/sign-in.html">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">login</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Sign In</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " href="../pages/sign-up.html">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">assignment</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Sign Up</span>
                                </a>
                            </li>
                        </ul>
                        <div className="ps__rail-x" style={style1}><div className="ps__thumb-x" tabIndex="0" style={style2}></div></div><div className="ps__rail-y" style={style3}><div className="ps__thumb-y" tabIndex="0" style={style4}></div></div></div>
                    <div className="sidenav-footer position-absolute w-100 bottom-0 ">
                        <div className="mx-3">
                            <a className="btn bg-gradient-primary mt-4 w-100" href="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree" type="button">Upgrade to pro</a>
                        </div>
                    </div>
                    <div className="ps__rail-x" style={style5}><div className="ps__thumb-x" tabIndex="0" style={style6}></div></div><div className="ps__rail-y" style={style7}><div className="ps__thumb-y" tabIndex="0" style={style8}></div></div></aside>
            </div>
        </>
    )
}