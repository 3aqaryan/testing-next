import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import SearchButton from "../../UI/buttons/SearchButton";
import CloseButton from "../../UI/buttons/CloseButton";

import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

// import { Link as LinkScroll } from "react-scroll";
// import { Link, Link as LinkRoute } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const HeaderComponent = () => {
  // Languages
  const { locales, route } = useRouter();
  const { t } = useTranslation();

  const languageText = (locale) => {
    if (locale === "am-AM") {
      return "Հայ";
    } else if (locale === "ru-RU") {
      return "Рус";
    } else if (locale === "en-US") {
      return "Eng";
    }
  };
  //
  const [close, setClose] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [navbar, setNavbar] = useState(false);

  // const changeBackground = () => {
  //   if (window.scrollY >= 5) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // window.addEventListener("scroll", changeBackground);
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
    <>
      <div className="allheader">
        <div className="fixedHeader">
          <div className="header">
            <div className="upheader">
              <div className="upheadercontent">
                <div className="upheaderspace">
                  <div className="upheaderleft">
                    <Link
                      href="https://www.facebook.com/doctors.am.website"
                      passHref
                    >
                      <a target="_blank">
                        <Image
                          src="/images/icons/facebook.svg"
                          alt="Facebook"
                          width={24}
                          height={24}
                        />
                      </a>
                    </Link>
                    <Link
                      href="https://www.youtube.com/user/Doctorsamofficial/videos"
                      className="logo"
                      passHref
                    >
                      <a target="_blank">
                        <Image
                          src="/images/icons/youtube.svg"
                          alt="Youtube"
                          width={24}
                          height={24}
                        />
                      </a>
                    </Link>
                    <div className="adress__of__store">
                      <aside>{t("header:store1")}, <span>{t("header:store2")}</span></aside> 
                    </div>
                  </div>
                  <div className="upheaderright">
                    <div className="number__of__phone">
                        <Image src="/images/icons/phone.svg" width={12} height={12} />
                        <i>098 - 83 - 01 - 80</i>
                    </div>
                    {locales?.map((locale) => (
                      <div key={locale} className="armruseng">
                        <Link href={route} locale={locale}>
                          <a>{languageText(locale)}</a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <header className={`downheader ${navbar ? "active" : ""}`}>
              <div className="downheadercontent">
                <div className="logodoc">
                  <Link href="/">
                  <a onClick={toTop}>
                    <Image
                      src="/images/nmobile_white.png"
                      alt="Facebook"
                      width={100}
                      height={100}
                    />
                  </a>
                  </Link>
                </div>
                <div className="nav">
                  <ul>
                    <li>
                      <Link href="/">
                        <a onClick={toTop}>{t("header:main")}</a>
                      </Link>
                    </li>
                    <li>
                      {/* <HashLink smooth to='/#mainPage'>
                      Store
                    </HashLink> */}
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
                {/* <div className="fakeItem"></div> */}
                <div
                  className={`styleFaSearch ${
                    isOpen ? "activeFaSearch" : "disableFaSearch"
                  }`}
                >
                  <div className="btn" onClick={() => setIsOpen(true)}>
                    <SearchButton />
                  </div>
                  {isOpen ? (
                    <div className="close_btn" onClick={() => setIsOpen(false)}>
                      <div className="closeInput">
                        <CloseButton />
                        <span>{t("header:close")}</span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <input
                    type="text"
                    disabled={isOpen ? false : true}
                    placeholder={isOpen ? t("header:search") : ""}
                    autoFocus
                  />
                </div>
              </div>

              {/* Tablet menu */}
              <div className="allhidedispnone">
                <div className="allhidden" onClick={() => setClose(!close)}>
                  {close ? <CloseButton /> : <AiOutlineMenu />}
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
      {close ? (
        <div className="menucontext">
          <div className="menucontent">
            <div className="menuspace">
              <div className="menutext">
                {/* <LinkRoute to='/' onClick={toTop}>Home</LinkRoute> */}
                <Link href="/">
                  <a onClick={toTop}>{t("header:main")}</a>
                </Link>
              </div>
              <div className="menutext">
                {/* <HashLink smooth to='/#mainPage'>
                      Store
                  </HashLink> */}
                <Link href="/#mainPage">
                  <a onClick={animateTo}>{t("header:store")}</a>
                </Link>
              </div>
              <div className="menutext">
                <Link href="/about">{t("header:aboutUs")}</Link>
              </div>
              <div className="menutext">
                <Link href="/">{t("header:contactUs")}</Link>{" "}
              </div>
            </div>
          </div>
          <div className="menulanguages">
            <div className="languages">
              {locales?.map((locale) => (
                <div key={locale} className="armruseng1">
                  <Link href={route} locale={locale}>
                    <a>{languageText(locale)}</a>
                  </Link>
                </div>
              ))}
            </div>
            <div className="logos">
              <Link href="https://www.facebook.com/doctors.am.website">
                <Image
                  src="/images/icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://www.youtube.com/doctors.am.website">
                <Image
                  src="/images/icons/youtube.svg"
                  alt="Youtube"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HeaderComponent;
