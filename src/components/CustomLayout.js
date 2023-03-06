import { useState } from 'react';
import { Layout, Sidebar, useUserMenu, useSidebarState } from 'react-admin';

import CustomAppBar from './CustomAppBar';
import CustomMenu from './CustomMenu';


const MySidebar = (props) => {
  const [open, setOpen] = useState(false)

  return (
    <Sidebar
      open={open}
      {...props}
      sx={{
        "& .RaSidebar-drawerPaper": {
          backgroundColor: "red",
        },
      }}
      onMouseEnter={() => { setOpen(true) }}
      onMouseLeave={() => { setOpen(false) }}
    />
  );
}

const CustomLayout = (props) => (
  <Layout {...props}
    appBar={CustomAppBar}
    // sidebar={MySidebar}
    menu={CustomMenu}
    sx={{ '& .RaLayout-content': { marginTop: 2 } }} />
);

export default CustomLayout;

