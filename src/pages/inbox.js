import { useState } from "react";
import Card from "../themes/card";
import TopSection from "../themes/topSection";
import { useTranslation } from "react-i18next";
import Button from "../themes/button";
import { buttonStyle } from "../styles";

const lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
  ja: { nativeName: "Japanes" },
};
const Inbox = () => {
  const [activeMenu, setActiveMenu] = useState(false); // managing profile dropdown menu of table
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="">
        {/* <div className="xsm:bg-green-800 sm:bg-green-400 md:bg-green-100 lg:bg-red-300 xl:bg-red-500 2xl:bg-red-900"> */}
        <TopSection
          heading="Inbox"
          subHeading="see history a transfer from user to user and from admin to users"
          headingClass="text-[20px] text-heading-color font-semibold mt-[37px] ml-[36px]"
          subHeadingClass="mt-[8px] ml-[36px] text-tcolor text-[14px] font-normal"
          setActiveMenu={setActiveMenu}
          activeMenu={activeMenu}
        />
      </div>
     
      <Card
        className="bg-white pb-[40px] rounded-[30px]"
        outerDivClassName="ml-[36px] mr-[24px] my-[36px]  "
      >
        {/* <div className='h-screen w-screen bg-[url("../public/images/logo512.png")] bg-no-repeat bg-contain'></div> */}
      </Card>
    </>
  );
};

export default Inbox;
