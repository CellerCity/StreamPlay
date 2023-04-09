import { Stack } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

// import { logo } from "../utils/constants.js";
import { SearchBar } from "./";
import logoImg from '../static/img/stream.png';
import { red } from "@mui/material/colors";


const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
      <img src={logoImg} height={45}/>
      {/* <img src={logo} alt="logo" height={45} /> */}
    {/* <Link to="/home" style={{ display: "flex", alignItems: "center" }}> */}
    {/* </Link> */}
      <NavLink className="nav-link " to="/home" style={{color: "white", "padding-right":"500px", fontSize: "19px"}}>Home</NavLink>
    <SearchBar />
  </Stack>
);

export default Navbar;