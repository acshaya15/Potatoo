import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "./admin.css";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";

import Typography from "@mui/material/Typography";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/admin";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Header from "./header";
const drawerWidth = 240;



export default function AdminBars() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };



  const admin = useSelector((state) => state.admin.value);

  return (
     <Box>
      <div className="dashboard">
      <h1>PoTato</h1>
     <h2>Welcome</h2>
     <input type="text" placeholder="Search"></input>
     <h3>{admin.email}</h3>
     <h3>{admin.password}</h3>
     <button>LogOut</button>
     </div>
     <div className="sidebar">
         <ul>
          <li>Dashboard
          </li>
          <li>Profile</li>
          <li>Messages</li>
          <li>Explore</li>
         </ul>
     </div>
     <footer id="footer" >
      <p >Terms and Conditions </p>
      <p>ContactUs</p>
    </footer>
     </Box> 
    
        
        
    
  );
}
