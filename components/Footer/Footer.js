import React from "react";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const Footer = () => {
  const { t } = useTranslation();
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const animateTo = () => {
    window.scrollTo({
      behavior: "smooth",
    });
  };
  return (
    <div id="footer" className="footer">
      <div className="up">
        <ul className="ulf">
          <li className="follotowme">{t("footer:joinUs")}</li>
          <li className="inset">
            <Link href="https://www.facebook.com/MobileArmeniaNew" passHref>
              <a target="_blank">
                <FacebookIcon />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://instagram.co/newmobile" passHref>
              <a target="_blank">
                <InstagramIcon />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://youtube.com/newmobile" passHref>
              <a target="_blank">
                <YouTubeIcon />
              </a>
            </Link>
          </li>
        </ul>
        <ul className="menu_footer">
          <li>
            <Link href="/">
              <a onClick={toTop}>{t("header:main")}</a>
            </Link>
          </li>
          <li>
            <Link href="/#mainPage">
              <a onClick={animateTo}>{t("header:store")}</a>
            </Link>
          </li>
          <li>
            <Link href="/about">{t("header:aboutUs")}</Link>
          </li>
          <li>
            <Link href="/">{t("header:contactUs")}</Link>
          </li>
        </ul>
      </div>
      <div className="middle">
        <ul className="uld">
          <li>
            <span>
              <b>+374 44-25-05-25</b>
              <small>(WhatsApp(+374 44-25-05-25))</small> <br></br>
              <i>{t("footer:answerQuestions")}</i>
            </span>{" "}
          </li>
          <li className="worked_time">
            <span>
              <b>{t("footer:workinghours")}</b> <br></br>
              <i>
                {t("footer:monSat")} 10:00 - 20:00<br></br> {t("footer:sunday")}{" "}
                11:00 - 19:00
              </i>
            </span>
          </li>
          <li>
            {" "}
            <span>
              <b>{t("footer:serviceCenter")}</b> <br></br>
              <i>
                <Link href="/mysqltnayin/newmobile/" className="service_centre">
                  {t("footer:qualityService")}
                </Link>
              </i>
            </span>
          </li>
        </ul>
      </div>
      <div className="down">
        <ul className="ul_logo">
          <li>
            <Image
              src="/images/nmobile_white.png"
              className="logofooter"
              alt="Logo"
              width={70}
              height={70}
            />
          </li>
          {/* <img src={Logo} alt="NewMobileLogo" className="logofooter" /></li> */}
          <li>
            {new Date().getFullYear()} newmobile.am{" "}
            <span>
              {"\u00A0"}
              {t("footer:allRightsReserved")}
            </span>
          </li>
        </ul>
        <ul className="cards">
          <li>
            <Image src="/images/visa.png" alt="Visa" width={61} height={19} />
          </li>
          <li>
            <Image
              src="/images/mastercard.png"
              alt="MasterCard"
              width={49}
              height={29}
            />
          </li>
          <li>
            <Image
              src="/images/maestro.png"
              alt="Maestro"
              width={50}
              height={30}
            />
          </li>
          <li>
            <Image src="/images/arca.png" alt="Arca" width={50} height={31} />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
