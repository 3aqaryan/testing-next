import React, { useState, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import axios from "axios";
import Image from "next/image";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useTranslation from "next-translate/useTranslation";

// VANILLAAAA
function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default function Store() {

  const { t } = useTranslation();

  const [t1, setT1] = useState([]);
  const ClickHandler = () => {
    // axios.post("http://localhost/newmobile/php/showdatabase_product.php")
    // .then(response => {
    //   console.log(response)
    //   const data = response.data;
    //     // console.log("data", data)
    //     setT1([...data])
    // })
  };
  // useEffect(() => {
  //   ClickHandler();
  // }, []);

  useEffect(() => {
    setT1([
      {
        id : 1,
        status_sell : "inStock",
        image : "/images/iphone12promax.png",
        name : "Iphone 13 Pro",
        price : 400000,
        cash : 386000,
        credit : "22200",
      },
      {
        id : 1,
        status_sell : "inStock",
        image : "/images/iphone12promax.png",
        name : "Iphone 13 Pro",
        price : 400000,
        cash : 386000,
        credit : "22200",
      },
      {
        id : 1,
        status_sell : "outOfStock",
        image : "/images/iphone12promax.png",
        name : "Iphone 13 Pro",
        price : 400000,
        cash : 386000,
        credit : "22200",
      },
      {
        id : 1,
        status_sell : "limited",
        image : "/images/iphone12promax.png",
        name : "Iphone 13 Pro",
        price : 400000,
        cash : 386000,
        credit : "22200",
      },
      {
        id : 1,
        status_sell : "new",
        image : "/images/iphone12promax.png",
        name : "Iphone 13 Pro",
        price : 400000,
        cash : 386000,
        credit : "22200",
      }
    ]);
  }, []);

  return (
    <>
      <div className="store" id="store">
        {t1.map((e) => {
          return (
            <>
              <Tilt>
                <div className="wrap" key={e.id}>
                  <div className="head">
                    <p className={e.status_sell}>{t(`storeItems:${e.status_sell}`)}</p>
                  </div>
                  <div className="image">
                    <Image src={e.image} alt={e.name} width={215} height={245} />
                  </div>
                  <div className="text">
                    <b>{e.name}</b>
                    <span>{e.price}</span>
                    <br></br>
                    {e.cash !== "" ? <i>{t("storeItems:cash")}{e.cash} {t("storeItems:amd")}</i> : null}
                    {e.credit !== "" ? (
                      <p>
                        <span>{t("storeItems:monthly")}</span> {e.credit} {t("storeItems:amd")}
                      </p>
                    ) : null}
                  </div>
                  <span className="advance">
                    <AddShoppingCartIcon /> {t("storeItems:advance")}
                  </span>
                  {/* <a href="/newmobile/product/' . $link . '/' . $row['id'] . '-' .  $row["REPLACE(name, ' ', '-')"] . '_' .$row['id'] . '.php"  className="advance" data-id="' . $row['id'] . '">Avelin</a> */}
                </div>
              </Tilt>
            </>
          );
        })}
      </div>
    </>
  );
}
