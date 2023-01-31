
import { useState } from 'react';
import './App.css';
import { Topbar } from './components/index.js';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Sidebar from "./components/Sidebar"
import CenterContent from "./components/CenterContent"
// import AfterNavbar from './components/AfterNavbar';


const useStyles = makeStyles((theme) => ({
  root: {
    direction: theme.direction,
  },
}));
function App() {
  const classes = useStyles()
  const [Toggle, setToggle] = useState(true)
  const HandleToggle = () => {
    setToggle(!Toggle)

  }
  return (
    <div className={classes.root} dir="rtl">
      <Topbar HandleToggle={HandleToggle} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Sidebar Toggle={Toggle} />
        <Box mt={0} style={{ flex: "1" }}>
          <CenterContent />
        </Box>
      </Box>
    </div>
  );
}

export default App;
