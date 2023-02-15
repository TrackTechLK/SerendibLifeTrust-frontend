import { defaultTheme } from "react-admin";

const theme = {
  ...defaultTheme,
  components: {
    ...defaultTheme.components,
    RaDatagrid: {
      styleOverrides: {
        root: {
          "& .RaDatagrid-headerCell": {
            backgroundColor: "#ddd", //change colors later
          },
        },
      },
    },
  },
};

export default theme;
