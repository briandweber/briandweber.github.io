import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5F1F',
    },
    secondary: {
      main: '#6F76F6',
    },
    background: {
      main: '##0D1935',
    }
  },
  typography: {
    fontSize: 20,
  }
});

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Tabs
        borderColor='primary'
        textColor='secondary'
        indicatorColor='primary'
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{ borderRight: 1, borderColor: 'divider', alignItems: 'center' }}
        >
        <Tab sx={{ width: 300 }} label="About" {...a11yProps(0)} />
        <Tab label="Experience" {...a11yProps(1)} />
        <Tab label="Projects" {...a11yProps(2)} />
        <Tab label="Resume" {...a11yProps(3)} />
        <Tab label="Comment" {...a11yProps(4)} />
      </Tabs>
    </ThemeProvider>

  );
}


        {/* <div className="nav-heading">
          <div className="outline-marker"></div>
            <div className="nav-about">
              <a href="#About">About</a>
            </div>
            <div>
              <a href="#Experience">Experience</a>
            </div>
            <div>
              <a href="#Projects">Projects</a>
            </div>
            <div>
              <a href="#Projects">Contact</a>
            </div>

        </div> */}
