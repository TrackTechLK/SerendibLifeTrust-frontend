import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LoadingIndicator, SidebarToggleButton, UserMenu } from 'react-admin';

const MyAppBar = (props) => {
  return (
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
          // backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
      }}
    >
      <Toolbar style={{ maxHeight: '48px' }}>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <SidebarToggleButton />
          <Typography variant='h6' color='inherit' id='react-admin-title' />
        </span>
        <Typography style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', }} variant='h6' color='inherit'>
          Serendib Life Trust
        </Typography>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <LoadingIndicator />
          <UserMenu />
        </span>
      </Toolbar>
      {/* <span className={} /> */}
    </AppBar>
  )
};

export default MyAppBar;
