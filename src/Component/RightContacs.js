import React, { useState, useEffect } from "react";
import { TiDeleteOutline } from "react-icons/ti";

export default function RightContacs(props) {

  const [first, setfirst] = useState(props.newDetail);
  const delete1 = (newdescription, e) => {
    e.preventDefault();
    const newdata = first.filter((item)=>item.description.indexOf(newdescription)==-1);
    setfirst(newdata);
  };

  useEffect(() => {setfirst(props.newDetail);
  }, [props.newDetail]);

  return (
    <>
      <div className="shopping d-inline-flex">
        <h2 className="heading-2">My Shopping List</h2>
        <ul className="shopping__list">
          {first &&first.map((item, i) => {
              return (
                <li className="shopping__item" key={i}>
                  <div className="shopping__count" style={{ width: "82px" }}>
                    <input
                      type="number"
                      style={{ width: "40px" }}
                      value={(item.quantity * props.result).toFixed(2)}
                      step="100"
                    />
                    <p style={{ width: "42px" }}>{item.unit}</p>
                  </div>
                  <p className="shopping__description">{item.description}</p>
                  <button
                    className="shopping__delete btn-tiny"
                    onClick={delete1.bind(this, item.description)}>
                    <TiDeleteOutline />
                  </button>
                </li>
              );
            })}
        </ul>

        <div className="copyright mt-13">
          Created by &copy; Jonas Schmedtmann. Prepared by &copy; AhmK.
        </div>
      </div>
    </>
  );
}
