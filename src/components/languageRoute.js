const LanguageRoute = ({ language, ...rest }) => {
    const location = useLocation();
    const path = `/${language}${location.pathname}`;
    return <Route {...rest} path={path} />;
  };

  export default LanguageRoute;