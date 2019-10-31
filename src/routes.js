import Dashboard from "@material-ui/icons/Dashboard";
import Tune from "@material-ui/icons/Tune";
import Person from "@material-ui/icons/Person";
import PhoneInTalk from "@material-ui/icons/PhoneInTalk";
import People from "@material-ui/icons/People";
import Alarm from "@material-ui/icons/Alarm";
import SettingsApplications from "@material-ui/icons/SettingsApplications";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import  InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import  Money from "@material-ui/icons/Money";
import PersonAdd from "@material-ui/icons/PersonAdd";
import  AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Jobrole from "views/Jobrole/Jobrole.js";
import Billingmodel from "views/Billingmodel/Billingmodel.js"
import Users from "views/Users/Users.js";
import Paymentterms from "views/Paymentterms/Paymentterms.js";
import Certificates from "views/Certificates/Certificates.js";
import Skills from "views/Skills/Skills.js";
import Modeofinterview from "views/Modeofinterview/Modeofinterview.js";
import Customertype from "views/Customertype/Customertype.js";
import Noticeperiod from "views/Noticeperiod/Noticeperiod.js";
import Qualifications from "views/Qualifications/Qualifications.js";
import Services from "views/Services/Services.js"
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Users",
    icon: People,
    component: Users,
    layout: "/admin"
  },
  {
    path: "/skills",
    name: "Skills",
    icon: Tune,
    component: Skills,
    layout: "/admin"
  },
  {
    path: "/Modeofinterview",
    name: "Mode of Inteview",
    icon: PhoneInTalk,
    component: Modeofinterview,
    layout: "/admin"
  },
  {
    path: "/Customertype",
    name: "Customer Type",
    icon: Person,
    component:Customertype,
    layout: "/admin"
  },
  {
    path: "/noticeperiod",
    name: "Notice Period",
    icon: Alarm,
    component: Noticeperiod,
    layout: "/admin"
  },
  {
    path: "/qualifications",
    name: "Qualifications",
    icon: LibraryBooks,
    component: Qualifications,
    layout: "/admin"
  },
  {
    path: "/certificates",
    name: "Certificates",
    icon: InsertDriveFile,
    component: Certificates,
    layout: "/admin"
  },
  {
    path: "/billingmodel",
    name: "Billing Model",
    icon: Money,
    component:Billingmodel,
    layout: "/admin"
  },
  {
    path:"/services",
    name:"Services",
    icon: SettingsApplications ,
    component:Services,
    layout:"/admin"
  },
  {
    path:"/paymentterms",
    name:"Payment Terms",
    icon:AccountBalanceWallet ,
    component:Paymentterms,
    layout:"/admin"
  },
  {
    path:"/jobrole",
    name:"Job Role",
    icon: PersonAdd  ,
    component:Jobrole,
    layout:"/admin"
  },

  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
