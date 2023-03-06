import { defaultTheme } from 'react-admin';

const theme = {
  ...defaultTheme,
  palette: { background: { default: 'rgba(0,0,0, 0)' } },
  components: {
    ...defaultTheme.components,
    RaMenu: {
      styleOverrides: {
        root: {
          marginLeft: 10,
          marginTop: 25,
          paddingTop: 10,
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderRadius: 5,
        },
      },
    },
    RaList: {
      styleOverrides: {
        root: {
          margin: 10,
          marginTop: 25,
          padding: 20,
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderRadius: 5,
        },
      },
    },
    RaDatagrid: {
      styleOverrides: {
        root: {
          marginTop: 25,
          padding: 10,
          backgroundColor: 'rgba(255,255,255,0.5)',
          borderRadius: 5,
          // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          // backgroundColor: 'rgba(255, 255, 255, 0.1)',
          // backdropFilter: 'blur(1.9px)',
          '& .RaDatagrid-headerCell': {
            backgroundColor: '#ddd', //change colors later
          },
        },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        active: {
          backgroundColor: 'red',
          borderLeftStyle: 'none',
          borderRightColor: defaultTheme.palette.secondary.main,
          // borderRightWidth: defaultTheme.spacing(0.5),
          borderRightStyle: 'solid',
          // backgroundColor: defaultTheme.palette.action.selected, // Defined in the default palette
          // color: defaultTheme.palette.primary.main,
          fontWeight: defaultTheme.typography.fontWeightBold,
        },
      },
    },
  },
};

export default theme;
