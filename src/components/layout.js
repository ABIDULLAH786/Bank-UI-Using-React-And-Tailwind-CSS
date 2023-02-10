import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const PageLayout = () => {
  const [changeTheme, setChangeTheme] = useState(true);

  return(
  
  <>
    {/* <Navbar selectedTheme={changeTheme} setSeletedTheme={setChangeTheme}/> */}
    <Outlet /> 
  </>
)};

export default PageLayout;