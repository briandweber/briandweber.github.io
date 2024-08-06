import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ArticleIcon from '@mui/icons-material/Article';
import Resume from './assets/Resume.pdf';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import EngineeringIcon from '@mui/icons-material/Engineering';
import InfoIcon from '@mui/icons-material/Info';
// import { useHistory } from 'react-router-dom';


const theme = createTheme({
  palette: {
    primary: {
      main: '#E3462C',
    },
    secondary: {
      main: '#5D65D2',
    },
    background: {
      main: '#393A3A',
    }
  },
});

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  { icon: <Link className="speed-dial-icon" to='/comment'><FeedbackIcon /></Link>, name: 'Comment' },
  { icon: <Link className="speed-dial-icon" to='/contact'><ContactPageIcon /></Link>, name: 'Contact' },
  { icon: <a className="speed-dial-icon" href={Resume} target="_blank"><ArticleIcon /></a>, name: 'Résumé' },
  { icon: <Link className="speed-dial-icon" to='/'><HomeIcon /></Link>, name: 'Home' },
//   { icon: <HomeIcon />, link: '/', name: 'Home' },
];

export default function PlaygroundSpeedDial() {
  const [direction, setDirection] = React.useState('left');
  const [hidden, setHidden] = React.useState(false);
//   const history = useHistory();

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  const handleLink = async() => {
    <Link to='/' />
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: 'relative', mt: 3, height: 100 }}>
        <StyledSpeedDial
          ariaLabel="SpeedDial"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
        //   main="secondary"
            primary="primary"
          >
          {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={() => handleLink()}
              />
          ))}
        </StyledSpeedDial>
      </Box>
    </ThemeProvider>
  );
}
