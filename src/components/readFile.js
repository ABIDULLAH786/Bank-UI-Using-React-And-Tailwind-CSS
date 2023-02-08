import userInfo from "../assets/userInfo.csv";
import { readString } from "react-papaparse";

export default function ReadString({setLogin,setCredentials}) {
  const papaConfig = {
    complete: (results) => {
      console.log("Parsing complete:", results.data[0]);
      setLogin(false)
      setCredentials({...results.data[0]})
    },
    download: true,
    error: (error, file) => {
      console.log("Error while parsing:", error, file);
      setLogin(false)
    },
  };

  readString(userInfo, papaConfig);
}
