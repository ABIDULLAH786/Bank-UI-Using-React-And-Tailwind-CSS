import {
  CircleIocn,
  EditIocn,
  InstaIcon,
  LinkedinIcon,
  PaletteIcon,
  ThreeUserIcon,
  TwitterIcon,
} from "../assets/icons";
import { useTranslation } from "react-i18next";
import Card from "../themes/card";
import { useSelector } from "react-redux";

const Home = () => {
  const { t } = useTranslation();
  const theme = useSelector((state) => state.themes.theme);
  const paraTextColor = theme === "light" ? "text-[#848996]" : "text-gray-300";
  const headingTextColor =
    theme === "light" ? "text-[#474747]" : "text-gray-100";
  const blackHeading = theme === "light" ? "text-black" : "text-gray-100";
  return (
    <div
      className={`${theme === "light" ? "bg-[#f5f5f5]" : "dark:bg-gray-800"}`}
    >
      <div className="pt-[80px]  w-full ">
        <h1
          className={`${blackHeading} flex justify-center  text-[28px] font-semibold`}
        >
          {t("heading")}
        </h1>

        {/* Section-1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[66px] px-[20px] xl:px-[60px]">
          <div className="col-span-1 md:-mr-[50px]">
            <Card className="" outerDivClassName="md:mr-[50px]">
              <div className="inline-flex items-center">
                <span>
                  <CircleIocn color="#51CA9D" />
                </span>
                <h2
                  className={`${headingTextColor} text-[18px]  -ml-[15px] font font-semibold`}
                >
                  {t("description")}
                </h2>
              </div>
              <div className="mt-[29px] ml-[30px]">
                <p
                  className={`${paraTextColor} text-[12px] font-medium leading-loose `}
                >
                  {t("section1_col_1_paragraph")}
                </p>
              </div>
            </Card>
          </div>

          <div className="col-span-1 mt-[30px] md:mt-0  xl:ml-[50px]">
            <Card className="" outerDivClassName="md:ml-[27px]  md:mr-[24px]">
              <div className="inline-flex items-center">
                <span>
                  <CircleIocn color="#FFEABE" />
                </span>
                <h2
                  className={`${headingTextColor} text-[18px] -ml-[15px] font font-semibold`}
                >
                  {t("section1_col_2_heading")}
                </h2>
              </div>
              <div className="mt-[29px] ml-[30px] grid grid-cols-2 xl:grid-cols-[200px_minmax(0,150px)] gap-5">
                <div>
                  <EditIocn />
                  <p
                    className={`${paraTextColor} text-[12px] font-mediums mt-[4px]`}
                  >
                    {t("section1_col_2_edit_icon_tag")}
                  </p>
                </div>
                <div>
                  <ThreeUserIcon />
                  <p
                    className={`${paraTextColor} text-[12px] font-mediums mt-[4px]`}
                  >
                    {t("section1_col_2_user_icon_tag")}
                  </p>
                </div>
                <div>
                  <PaletteIcon />
                  <p
                    className={`${paraTextColor} text-[12px] font-mediums mt-[4px]`}
                  >
                    {t("section1_col_2_palette_icon_tag")}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Section-2 */}
        <div className="mt-[66px]  px-[20px] xl:px-[60px] md:mx-[30px] lg:mx-[150px]">
          <h2
            className={`${blackHeading} flex justify-center text-center text-[28px] font-semibold `}
          >
            {t("section2_heading_line_1")}
            <br />
            {t("section2_heading_line_2")}
          </h2>
          {/* visa card */}
          <span className="flex xsm:justify-center md:justify-end relative">
            <img
              src="/images/visa-card.png"
              // width={"250px"}
              className="md:absolute -top-[120px] w-[250px] md:w-[200px] xl:w-[280px] xl:-top-[150px]   "
            />
          </span>
          <Card className="" outerDivClassName="mt-[24px]">
            <div className="inline-flex items-center">
              <span>
                <CircleIocn color="#B0F0FF" />
              </span>
              <h2
                className={`${headingTextColor} text-[18px] -ml-[15px] font font-semibold`}
              >
                {t("description")}
              </h2>
            </div>
            <div
              className={`${paraTextColor} mt-[19px] ml-[30px] text-[12px] font-medium leading-loose `}
            >
              <p>{t("section2_col_paragraph_1")}</p>
              <p className="my-[20px]">{t("section2_col_paragraph_2")}</p>
              <p>{t("section2_col_paragraph_3")}</p>
            </div>
          </Card>
        </div>

        {/* Section-3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[66px] px-[20px] xl:px-[60px] ">
          {/* Left Card */}
          <div className="col-span-1 md:-mr-[50px]">
            <Card className="" outerDivClassName="mr-[24px]">
              <div className="inline-flex items-center">
                <span>
                  <CircleIocn color="#51CA9D" />
                </span>
                <h2
                  className={`${headingTextColor} text-[18px] -ml-[15px] font font-semibold`}
                >
                  {t("section3_col_heading")}
                </h2>
              </div>
              <div className="mt-[19px] ml-[30px]">
                <ul
                  className={`${paraTextColor} list-disc text-[12px] font-medium leading-loose`}
                >
                  <li>{t("section3_col_list_item_1")}</li>
                  <li>{t("section3_col_list_item_2")}</li>
                  <li>{t("section3_col_list_item_3")}</li>
                  <li>{t("section3_col_list_item_3")}</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Right Card */}
          <div className="col-span-1 mt-[20px] md:mt-0">
            <Card className="" outerDivClassName="">
              <span className="flex justify-center items-center md:float-right">
                <img src="/images/finance.png" />
              </span>
            </Card>
          </div>
        </div>

        {/* Section-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[66px] px-[20px] xl:px-[60px] ">
          {/* single card */}
          <div className="col-span-1 ">
            <Card className="" outerDivClassName="mr-[24px]">
              <div className="inline-flex items-center">
                <span>
                  <CircleIocn color="#B0F0FF" />
                </span>
                <h2
                  className={`${headingTextColor} text-[18px] -ml-[15px] font font-semibold`}
                >
                  {t("section4_col_heading")}
                </h2>
              </div>
              <div className="mt-[19px] ml-[30px]">
                <ul
                  className={`${paraTextColor} list-disc text-[12px] font-medium leading-loose `}
                >
                  <li>{t("section4_col_list_item_1")}</li>
                  <li>{t("section4_col_list_item_2")}</li>
                  <li>{t("section4_col_list_item_3")}</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        {/* Section-5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[66px] px-[20px] xl:px-[60px] ">
          {/* single card */}
          <Card className="" outerDivClassName=" md:mr-[24px]">
            <div className="inline-flex items-center">
              <span>
                <CircleIocn color="#FFEABE" />
              </span>
              <h2
                className={`${headingTextColor} text-[18px] -ml-[15px] font font-semibold`}
              >
                {t("section5_col_heading_p_1")} /{t("section5_col_heading_p_2")}
              </h2>
            </div>
            <div className="mt-[19px] ml-[30px]">
              <ul className=" list-disc text-[12px] font-medium leading-loose text-[#848996]">
                <li>{t("section5_col_list_item_1")}</li>
                <li>{t("section5_col_list_item_2")}</li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Section-6 */}
        <div className=" mt-[66px] px-[20px] xl:px-[60px]">
          {/* card top heading */}

          <div>
            <h1
              className={`${blackHeading} text-[28px] text-center font-semibold`}
            >
              {t("section6_heading")}
            </h1>
            <p className={`${paraTextColor} text-center text-[12px] mt-[35px]`}>
              {t("section6_paragraph_line_1")}
              <br />
              {t("section6_paragraph_line_2")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-[67px] ">
            {/* col-1 */}
            <Card
              className={`${theme!=="light"?"bg-gray-700":'bg-[#F9FBFD]'} rounded-[22px] `}
              outerDivClassName=" md:mr-[27px] mt-[20px] md:mt-0 md:mr-0"
            >
              <div>
                <span className="flex justify-center item-center pt-[51px]">
                  <img src="/images/user-hp-img.png" />
                </span>
                <h1 className={`${headingTextColor} flex justify-center item-center text-[14px] font-semibold mt-[15px]`}>
                  Tanjirou Kamadou
                </h1>
              </div>
              <div className="flex justify-center item-center mt-[26px]">
                <div className={`${theme!=="light"?`bg-gray-600 border-[#EFFFFF] ${paraTextColor}`:'bg-[#E3F5FF] text-[#626262]'}  border-2   rounded-[22px]  px-[25px] py-[20px]`}>
                  <p className="text-[12px] ">Age : 35</p>
                  <p className="text-[12px] ">Status : Single</p>
                  <p className="text-[12px]">Job : Wiraswasta</p>
                  <p className="text-[12px] ">Location : Ohayo</p>
                </div>
              </div>

              <div className="flex justify-center item-center mt-[28px] mx-[16px] pb-[23px] xl:px-[30px] 2xl:px-[100px]">
                <p className={`${paraTextColor} leading-4 text-[12px] font-normal`}>
                  {t("section6_col_1_paragraph")}
                </p>
              </div>
            </Card>
            {/* col-2 */}
            <Card
              className={``}
              outerDivClassName="md:ml-[27px]  mt-[20px] md:mt-0 md:mr-0"
            >
              {/* Row-1 */}
              <div className={`${theme!=="light"?"bg-gray-700":'bg-[#F7FCFE]'} bg-gray-700 rounded-[22px]`}>
                <h1 className={`${headingTextColor} text-[14px] font-semibold ml-[14px] pt-[21px]`}>
                  {t("section6_col_2_row_1_heading")}
                </h1>
                <ul className={`${paraTextColor} list-disc text-[12px] font-normal  pl-[30px] pr-[22px] pb-[12px] mt-[15px]`}>
                  <li>{t("section6_col_2_row_1_item_1")}</li>
                  <li>{t("section6_col_2_row_1_item_2")}</li>
                  <li>{t("section6_col_2_row_1_item_3")}</li>
                  <li>{t("section6_col_2_row_1_item_4")}</li>
                </ul>
              </div>
              {/* col2 row-2 */}
              <div className={`${theme!=="light"?"bg-gray-700":'bg-[#FFFAFA]'} bg-gray-700 rounded-[22px] mt-[25px]`}>
                <h1 className={`${theme!=="light"?"bg-gray-700":'text-white'} ${headingTextColor} text-[14px] font-semibold ml-[14px] pt-[21px] `}>
                  {t("section6_col_2_row_2_heading")}
                </h1>
                <ul className={`${paraTextColor} list-disc text-[12px] font-normal pl-[30px] pr-[22px] pb-[12px] mt-[15px]`}>
                  <li>{t("section6_col_2_row_2_item_1")}</li>
                  <li>{t("section6_col_2_row_2_item_2")}</li>
                  <li>{t("section6_col_2_row_2_item_3")}</li>
                  <li>{t("section6_col_2_row_2_item_4")}</li>
                </ul>
              </div>
            </Card>
            {/* col-3 */}
            <Card
              className=""
              outerDivClassName="md:ml-[27px]  mt-[20px] md:mt-0 "
            >
              {/* col3 row 1 */}
              <div className={`${theme!=="light"?"bg-gray-700":'bg-[#F7FFF7]'} rounded-[22px]`}>
                <h1 className={`${theme!=="light"&&"text-[#474747]"} ${headingTextColor} text-[14px] text-[#474747] font-semibold ml-[14px] pt-[21px]`}>
                  {t("section6_col_3_row_1_heading")}
                </h1>
                <ul className={`${paraTextColor} list-disc  text-[12px] font-normal pl-[30px] pr-[22px] pb-[12px] mt-[15px]`}>
                  <li>{t("section6_col_3_row_1_item_1")}</li>
                  <li className="my-[12px]">
                    {t("section6_col_3_row_1_item_2")}
                  </li>
                  <li>{t("section6_col_3_row_1_item_3")}</li>
                </ul>
              </div>

              {/* col3 row-2 */}
              <div className={`${theme!=="light"?"bg-gray-700":'bg-[#FFFDF7]'}  rounded-[22px] mt-[25px]`}>
                <h1 className={`${theme!=="light"&&"text-[#474747]"} ${headingTextColor} text-[14px] font-semibold ml-[14px] pt-[21px]`}>
                  {t("section6_col_3_row_2_heading")}
                </h1>
                <ul className={`${paraTextColor} list-disc text-[12px] font-normal pl-[30px] pr-[22px] pb-[12px] mt-[15px]`}>
                  <li>{t("section6_col_3_row_2_item_1")}</li>
                  <li className="my-[12px]">
                    {t("section6_col_3_row_2_item_2")}
                  </li>
                  <li>{t("section6_col_3_row_2_item_3")}</li>
                  <li className="mt-[12px]">
                    {t("section6_col_3_row_2_item_4")}
                  </li>
                </ul>
              </div>

              {/* col3 row-3 */}
              <div className={`${theme!=="light"?"bg-gray-700":'bg-[#FDF9FD]'}  rounded-[22px] mt-[25px]`}>
                <h1 className={`${theme!=="light"&&"text-[#474747]"}  ${headingTextColor} text-[14px] font-semibold ml-[14px] pt-[21px]`}>
                  {t("section6_col_3_row_3_heading_p1")} /{" "}
                  {t("section6_col_3_row_3_heading_p2")}
                </h1>
                <ul className={`${paraTextColor} list-disc text-[12px] font-normal pl-[30px] pr-[22px] pb-[12px] mt-[15px]`}>
                  <li>{t("section6_col_3_row_3_item_1")}</li>
                  <li className="my-[12px]">
                    {t("section6_col_3_row_3_item_2")}
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        {/* section with bg image  */}
        {/* Section-7 */}
        <div className=" mt-[66px] px-[20px] xl:px-[60px]">
          {/* card top heading */}
          <div>
            <h1
              className={`${blackHeading} text-[28px] text-center font-semibold`}
            >
              Desain UI/UX
            </h1>
            <p
              className={`${paraTextColor} text-center text-[12px]  mt-[35px]`}
            >
              Untuk menyelesaikan studi kasus, saya mencoba untuk membuat user
              persona atau persona yang dirasaka
              <br />
              oleh pengguna berdasarkan karakteristik tiap-tiap pengguna
              tersebut
            </p>
          </div>

          {/* login user card */}
          <div className="login-card bg-dot-login-card grid grid-cols-2 -mb-[000px]">
            <Card outerDivClassName="mr-[20px] -mb-[20px]">
              <span className="flex justify-end items-center ">
                <img
                  src="/images/logincar 3.png"
                  className="w-[67px] h-[88px]"
                />
              </span>
            </Card>
          </div>
          {/* content with bg image */}
          <div className={`bg-pattern md:ml-[27px]`}>
            {/* Section 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 pt-[40px]">
              {/* col-1 */}
              <Card outerDivClassName="md:pl-[200px]  pt-[20px] order-last md:order-first ">
                <span className="flex justify-center items-center">
                  <img src="/images/login 1.png" />
                </span>
              </Card>
              {/* col-2 */}
              <Card outerDivClassName="pt-[20px]">
                <h1 className={`${blackHeading} text-[18px]  font-semibold mb-[8px]`}>
                  Halaman Login
                </h1>
                <h3 className={`${paraTextColor} text-[14px] font-normal`}>
                  Halaman login yang informatif
                </h3>
                <p className={`${paraTextColor} text-[12px] font-medium leading-6 mt-[30px]`}>
                  Mengkombinasikan halaman login dengan menambahkan
                  elemen-elemen yang bisa menambah informasi untuk pengguna baru
                </p>
              </Card>
            </div>

            {/* transfer user card */}
            <div className="transfer-card grid grid-cols-2  mt-[80px]  2xl:mt-[100px]">
              <Card outerDivClassName=" mr-[110px] ">
                <span className=" flex justify-end items-center">
                  <img
                    src="/images/transfer 2.png"
                    className="w-[118px] h-[120px]"
                  />
                </span>
              </Card>
            </div>

            {/* Section2: Transfer Section */}
            <div className="grid grid-cols-1 md:grid-cols-2   pt-[50px]">
              {/* col-1 text content side*/}
              <Card outerDivClassName="flex md:justify-center pt-[10px]">
                <h1 className={`${blackHeading} text-[18px] font-semibold mb-[8px]`}>
                  Halaman Transfer
                </h1>
                <h3 className={`${paraTextColor} text-[14px] font-normal`}>
                  Halaman Transfer yang mudah dipahami
                </h3>
                <p className={`${paraTextColor} text-[12px] font-medium leading-6 mt-[30px]`}>
                  Pengguna dapat dengan mudah mengirim ke beberapa pengguna
                  lainyya.
                </p>
              </Card>

              {/* col-2 image side */}
              <Card outerDivClassName="">
                <span className="flex justify-center md:justify-start mb-[20px]">
                  <img src="/images/Transfer to Users 1.png" />
                </span>
              </Card>
            </div>

            {/* Security  card */}
            <div className="grid grid-cols-1   security-card">
              <Card outerDivClassName="-ml-[60px] mb-[100px]">
                <span className="flex justify-center items-center ">
                  <img src="/images/s 1.png" className="w-[118px] h-[120px] " />
                </span>
              </Card>
            </div>

            {/* Section 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              {/* col-1 */}
              <Card outerDivClassName="md:pl-[200px]  order-last md:order-first">
                <span className="flex justify-center mb-[20px]">
                  <img src="/images/Manage Bank Account 2.png" />
                </span>
              </Card>
              {/* col-2 */}
              <Card outerDivClassName="pt-[20px]">
                <h1 className={`${blackHeading} text-[18px] font-semibold mb-[8px]`}>
                  Halaman Profil
                </h1>
                <h3 className={`${paraTextColor} text-[14px] font-normal`}>
                  Halaman Profil untuk manajemen kartu
                </h3>
                <p className={`${paraTextColor} text-[12px] font-medium leading-6 mt-[30px] mr-[80px]`}>
                  Memberikan opsi bagi para pengguna yang ingin mengintegrasikan
                  kartu kredit miliknya, sehingga memudahkan pengguna dalam
                  mengelola keuangan mereka.
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Section-8 */}
        <div className="mt-[66px] px-[20px] xl:px-[60px]">
          {/* card top heading */}
          <div>
            <h1 className={`${blackHeading} text-[28px] text-center font-semibold`}>
              {t("section8_heading")}
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mt-[50px]">
            {/* 1st row of images */}
            {/* Left Card */}
            <div className="col-span-1 ">
              <Card>
                <span className="flex justify-center items-center">
                  <img src="/images/Daftar.png" />
                </span>
              </Card>
            </div>
            {/* Right Card */}
            <div className="col-span-1 ">
              <Card>
                <span className="flex justify-center items-center">
                  <img src="/images/History transfer.png" />
                </span>
              </Card>
            </div>

            {/* 2nd row of images */}
            {/* Left Card */}
            <div className="col-span-1 ">
              <Card className="" outerDivClassName="">
                <span className="flex justify-center items-center">
                  <img src="/images/Account.png" />
                </span>
              </Card>
            </div>
            {/* Right Card */}
            <div className="col-span-1 ">
              <Card className="" outerDivClassName="">
                <span className="flex justify-center items-center">
                  <img src="/images/Admin - Manage User.png" />
                </span>
              </Card>
            </div>

            {/* 3rd row of images */}
            {/* Left Card */}
            <div className="col-span-1">
              <Card className="" outerDivClassName="">
                <span className="flex justify-center items-center">
                  <img src="/images/Reset Password.png" />
                </span>
              </Card>
            </div>
            {/* Right Card */}
            <div className="col-span-1 mt-[20px] md:mt-0">
              <Card className="" outerDivClassName="">
                <span className="flex justify-center items-center">
                  <img src="/images/Forgot Password.png" />
                </span>
              </Card>
            </div>

            {/* 4th row of images */}
            {/* Left Card */}
            <div className="col-span-1">
              <Card className="" outerDivClassName="">
                <span className="flex justify-center items-center">
                  <img src="/images/Transfer Balance 1.png" />
                </span>
              </Card>
            </div>

            {/* Right Card */}
            <div className="col-span-1 mt-[20px] md:mt-0">
              <Card className="" outerDivClassName="">
                <span className="flex justify-center items-center">
                  <img src="/images/w 1.png" />
                </span>
              </Card>
            </div>
          </div>
        </div>

        {/* Section 9 */}
        <div className="mt-[50px] px-[20px] xl:px-[60px]">
          <h1 className={`${blackHeading} text-center  text-[28px] font-semibold`}>
            {t("seaction9_heading")}
          </h1>
          <p className={`${paraTextColor} text-center text-[12px] mt-[35px] leading-6`}>
            {t("seaction9_paragraph_line_1")}
            <br />
            {t("seaction9_paragraph_line_2")}
          </p>

          <span className="flex justify-center items-center mt-[30px]">
            <img src="/images/emoji.png" />
          </span>
        </div>

        {/* Footer */}
        <div className={`${theme==='light'?"bg-[#FFEABE]":"bg-gray-800"}mt-[66px] px-[20px] xl:px-[60px]`}>
          {/* card top heading */}

          <div className="grid grid-cols-2 sm:grid-cols-4 pt-[94px] ">
            {/* col-1 */}
            <Card className=" rounded-[22px] " outerDivClassName="">
              <h3 className={`${headingTextColor} text-[12px] font-semibold`}>Tutorify</h3>
              <ul className={`${paraTextColor} text-[12px] font-normal`}>
                <li className="mt-[15px]">Learn more than just a language</li>
              </ul>
              <div className="flex mt-[30px]">
                <span>
                  <TwitterIcon theme={theme} />
                </span>
                <span className="mx-[8px]">
                  <InstaIcon theme={theme}/>
                </span>
                <span>
                  <LinkedinIcon theme={theme}/>
                </span>
              </div>
            </Card>

            {/* col-2 */}
            <Card className="rounded-[22px] " outerDivClassName="ml-[27px]">
              <h3 className={`${headingTextColor} text-[12px] font-semibold`}>Discover</h3>
              <ul className={`${paraTextColor} text-[12px] font-normal`}>
                <li className="mt-[15px]">Pricing</li>
                <li className="my-[10px]">Refund Policy</li>
                <li>FAQ’s</li>
                <li className="mt-[10px]">Testimonials</li>
              </ul>
            </Card>

            {/* col-3 */}
            <Card
              className="rounded-[22px] "
              outerDivClassName="ml-[39px] mt-[40px] sm:mt-0 sm:ml-[27px]"
            >
              <h3 className={`${headingTextColor} text-[12px] font-semibold`}>Company</h3>
              <ul className={`${paraTextColor} text-[12px] font-normal`}>
                <li className="mt-[15px]">About</li>
                <li className="my-[10px]">How it Works</li>
                <li>Term</li>
                <li className="mt-[10px]">Privacy Policy</li>
              </ul>
            </Card>

            {/* col-3 */}
            <Card
              className="rounded-[22px] "
              outerDivClassName="ml-[27px] mt-[40px] sm:mt-0"
            >
              <h3 className={`${headingTextColor} text-[12px] font-semibold`}>Contact</h3>
              <ul className={`${paraTextColor} text-[12px] font-normal`}>
                <li className="mt-[15px]">Support Email</li>
                <li className="mt-[10px]">fitoutfit@support.com</li>
              </ul>
            </Card>
          </div>
          <h2 className={`${headingTextColor} flex justify-center items-center font-semibold text-[12px] mt-[30px] pb-[20px]`}>
            Copyright © by fitoutfit. Created with love.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
