import React, { useState, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import axios from "axios";
import Image from "next/image";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

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
  useEffect(() => {
    ClickHandler();
  }, []);
  return (
    <>
      <div className="store" id="store">
        <Tilt>
          <div className="wrap" key="1">
            <div className="head">
              <p className="Arka">Arka e</p>
            </div>
            <div className="image">
              <Image
                src="/images/iphone12promax.png"
                alt={"phone"}
                width={215}
                height={245}
              />
            </div>
            <div className="text">
              <b>Iphone 12 mini</b>
              <span>452000</span>
              <br></br>
              <i>Kanxik 425000 DRAM</i>
              <p>
                <span>Amsekan</span>31000 AMD
              </p>
            </div>
            <span className="advance">
              <AddShoppingCartIcon /> Advance
            </span>
            {/* <a href="/newmobile/product/' . $link . '/' . $row['id'] . '-' .  $row["REPLACE(name, ' ', '-')"] . '_' .$row['id'] . '.php"  className="advance" data-id="' . $row['id'] . '">Avelin</a> */}
          </div>
        </Tilt>
        <Tilt>
          <div className="wrap" key="1">
            <div className="head">
              <p className="Arka">Arka e</p>
            </div>
            <div className="image">
              <Image
                src="/images/iphone12promax.png"
                alt={"phone"}
                width={215}
                height={245}
              />
            </div>
            <div className="text">
              <b>Iphone 12 mini</b>
              <span>452000</span>
              <br></br>
              <i>Kanxik 425000 DRAM</i>
              <p>
                <span>Amsekan</span>31000 AMD
              </p>
            </div>
            <span className="advance">
              <AddShoppingCartIcon /> Advance
            </span>
            {/* <a href="/newmobile/product/' . $link . '/' . $row['id'] . '-' .  $row["REPLACE(name, ' ', '-')"] . '_' .$row['id'] . '.php"  className="advance" data-id="' . $row['id'] . '">Avelin</a> */}
          </div>
        </Tilt>
        <Tilt>
          <div className="wrap" key="1">
            <div className="head">
              <p className="Arka">Arka e</p>
            </div>
            <div className="image">
              <Image
                src="/images/iphone12promax.png"
                alt={"phone"}
                width={215}
                height={245}
              />
            </div>
            <div className="text">
              <b>Iphone 12 mini</b>
              <span>452000</span>
              <br></br>
              <i>Kanxik 425000 DRAM</i>
              <p>
                <span>Amsekan</span>31000 AMD
              </p>
            </div>
            <span className="advance">
              <AddShoppingCartIcon /> Advance
            </span>
            {/* <a href="/newmobile/product/' . $link . '/' . $row['id'] . '-' .  $row["REPLACE(name, ' ', '-')"] . '_' .$row['id'] . '.php"  className="advance" data-id="' . $row['id'] . '">Avelin</a> */}
          </div>
        </Tilt>
        <Tilt>
          <div className="wrap" key="1">
            <div className="head">
              <p className="Arka">Arka e</p>
            </div>
            <div className="image">
              <Image
                src="/images/iphone12promax.png"
                alt={"phone"}
                width={215}
                height={245}
              />
            </div>
            <div className="text">
              <b>Iphone 12 mini</b>
              <span>452000</span>
              <br></br>
              <i>Kanxik 425000 DRAM</i>
              <p>
                <span>Amsekan</span>31000 AMD
              </p>
            </div>
            <span className="advance">
              <AddShoppingCartIcon /> Advance
            </span>
            {/* <a href="/newmobile/product/' . $link . '/' . $row['id'] . '-' .  $row["REPLACE(name, ' ', '-')"] . '_' .$row['id'] . '.php"  className="advance" data-id="' . $row['id'] . '">Avelin</a> */}
          </div>
        </Tilt>
        <Tilt>
          <div className="wrap" key="1">
            <div className="head">
              <p className="Arka">Arka e</p>
            </div>
            <div className="image">
              <Image
                src="/images/iphone12promax.png"
                alt={"phone"}
                width={215}
                height={245}
              />
            </div>
            <div className="text">
              <b>Iphone 12 mini</b>
              <span>452000</span>
              <br></br>
              <i>Kanxik 425000 DRAM</i>
              <p>
                <span>Amsekan</span>31000 AMD
              </p>
            </div>
            <span className="advance">
              <AddShoppingCartIcon /> Advance
            </span>
            {/* <a href="/newmobile/product/' . $link . '/' . $row['id'] . '-' .  $row["REPLACE(name, ' ', '-')"] . '_' .$row['id'] . '.php"  className="advance" data-id="' . $row['id'] . '">Avelin</a> */}
          </div>
        </Tilt>
        <Tilt>
          <div className="wrap" key="1">
            <div className="head">
              <p className="Arka">Arka e</p>
            </div>
            <div className="image">
              <Image
                src="/images/iphone12promax.png"
                alt={"phone"}
                width={215}
                height={245}
              />
            </div>
            <div className="text">
              <b>Iphone 12 mini</b>
              <span>452000</span>
              <br></br>
              <i>Kanxik 425000 DRAM</i>
              <p>
                <span>Amsekan</span>31000 AMD
              </p>
            </div>
            <span className="advance">
              <AddShoppingCartIcon /> Advance
            </span>
            {/* <a href="/newmobile/product/' . $link . '/' . $row['id'] . '-' .  $row["REPLACE(name, ' ', '-')"] . '_' .$row['id'] . '.php"  className="advance" data-id="' . $row['id'] . '">Avelin</a> */}
          </div>
        </Tilt>
        <Tilt>
          <div className="wrap" key="1">
            <div className="head">
              <p className="Arka">Arka e</p>
            </div>
            <div className="image">
              <Image
                src="/images/iphone12promax.png"
                alt={"phone"}
                width={215}
                height={245}
              />
            </div>
            <div className="text">
              <b>Iphone 12 mini</b>
              <span>452000</span>
              <br></br>
              <i>Kanxik 425000 DRAM</i>
              <p>
                <span>Amsekan</span>31000 AMD
              </p>
            </div>
            <span className="advance">
              <AddShoppingCartIcon /> Advance
            </span>
            {/* <a href="/newmobile/product/' . $link . '/' . $row['id'] . '-' .  $row["REPLACE(name, ' ', '-')"] . '_' .$row['id'] . '.php"  className="advance" data-id="' . $row['id'] . '">Avelin</a> */}
          </div>
        </Tilt>
        <Tilt>
          <div className="wrap" key="1">
            <div className="head">
              <p className="Arka">Arka e</p>
            </div>
            <div className="image">
              <Image
                src="/images/iphone12promax.png"
                alt={"phone"}
                width={215}
                height={245}
              />
            </div>
            <div className="text">
              <b>Iphone 12 mini</b>
              <span>452000</span>
              <br></br>
              <i>Kanxik 425000 DRAM</i>
              <p>
                <span>Amsekan</span>31000 AMD
              </p>
            </div>
            <span className="advance">
              <AddShoppingCartIcon /> Advance
            </span>
            {/* <a href="/newmobile/product/' . $link . '/' . $row['id'] . '-' .  $row["REPLACE(name, ' ', '-')"] . '_' .$row['id'] . '.php"  className="advance" data-id="' . $row['id'] . '">Avelin</a> */}
          </div>
        </Tilt>
        <Tilt>
          <div className="wrap" key="1">
            <div className="head">
              <p className="Arka">Arka e</p>
            </div>
            <div className="image">
              <Image
                src="/images/iphone12promax.png"
                alt={"phone"}
                width={215}
                height={245}
              />
            </div>
            <div className="text">
              <b>Iphone 12 mini</b>
              <span>452000</span>
              <br></br>
              <i>Kanxik 425000 DRAM</i>
              <p>
                <span>Amsekan</span>31000 AMD
              </p>
            </div>
            <span className="advance">
              <AddShoppingCartIcon /> Advance
            </span>
            {/* <a href="/newmobile/product/' . $link . '/' . $row['id'] . '-' .  $row["REPLACE(name, ' ', '-')"] . '_' .$row['id'] . '.php"  className="advance" data-id="' . $row['id'] . '">Avelin</a> */}
          </div>
        </Tilt>
        {t1.map((e) => {
          return (
            <>
              <Tilt>
                <div className="wrap" key={e.id}>
                  <div className="head">
                    <p className={e.status_sell}>{e.status_sell}</p>
                  </div>
                  <div className="image">
                    <Image src={e.image} alt={e.name} width={70} height={70} />
                  </div>
                  <div className="text">
                    <b>{e.name}</b>
                    <span>{e.price}</span>
                    <br></br>
                    {e.cash !== "" ? <i>Kanxik {e.cash} DRAM</i> : null}
                    {e.credit !== "" ? (
                      <p>
                        <span>Amsekan</span> {e.credit} AMD
                      </p>
                    ) : null}
                  </div>
                  <span className="advance">
                    <AddShoppingCartIcon /> Advance
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
