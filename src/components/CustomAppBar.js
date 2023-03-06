import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LoadingIndicator, SidebarToggleButton, UserMenu } from 'react-admin';

const MyAppBar = (props) => (
  <AppBar
    {...props}
    sx={{
      //   '& .RaAppBar-title': {
      //     flex: 1,
      //     textOverflow: 'ellipsis',
      //     whiteSpace: 'nowrap',
      //     overflow: 'hidden',
      //   },
      '& .MuiToolbar-root': {
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    }}
  >
    <Toolbar>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <SidebarToggleButton />
        <Typography variant='h6' color='inherit' id='react-admin-title' />
      </span>
      <Typography variant='h6' color='inherit'>
        SerendibLifeTrust
      </Typography>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <LoadingIndicator />
        <UserMenu />
      </span>
    </Toolbar>
    {/* <span className={} /> */}
  </AppBar>
);

export default MyAppBar;
