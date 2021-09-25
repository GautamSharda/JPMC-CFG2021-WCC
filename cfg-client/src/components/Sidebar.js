//import useState hook to create menu collapse state
import React, { useState } from "react";
import girl from "../girl.png";
import givism from "../givism.png";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
// import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
// import { RiPencilLine } from "react-icons/ri";
// import { BiCog } from "react-icons/bi";

import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";

const Sidebar = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const [checked, setChecked] = React.useState();
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}

              <img src={givism} />
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu>
              <MenuItem className="profile-name">My Profile</MenuItem>
              <MenuItem>
                <img
                  src={girl}
                  alt="girl profile"
                  className="profile-pic-inner"
                />
              </MenuItem>
              <MenuItem>My Interests </MenuItem>
              <MenuItem>
                <FormControlLabel
                  control={
                    <Switch
                      color="primary"
                      checked={checked}
                      onChange={handleChange}
                      name="checked"
                    />
                  }
                  label="switch"
                />
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu>
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;