import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "./navBar";
const PageLayout = () => {
  const [changeTheme, setChangeTheme] = useState(true);

  return(
  
  <>
    <Navbar selectedTheme={changeTheme} setSeletedTheme={setChangeTheme}/>
    <Outlet /> 
  </>
)};

export default PageLayout;