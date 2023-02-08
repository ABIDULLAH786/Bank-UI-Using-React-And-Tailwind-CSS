import { useEffect, useState } from "react";

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width,
    };
  }
  
  // Custome Hoke to get get width and height with the help of above function
  export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
  }