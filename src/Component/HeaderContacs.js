import React, { useState, useEffect } from "react";
import { logo, search } from "./img/root_img";
import {
  updateUser,
  showError,
  deleteUser,
  updateUserDetail,
} from "./Action/Action";
import { connect } from "react-redux";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { TiDeleteOutline } from "react-icons/ti";

const url = "https://forkify-api.herokuapp.com/api/v2/recipes";
const key = "c28a0d26-8d77-4966-bbe3-02b80f4a7fc6";

function HeaderContacs(props) {
  const [first, setfirst] = useState("pasta");
  const [notification, setnotification] = useState();
  useEffect(() => {
    if (props.Reducer.love.length > 0) {
      setnotification(true);
    } else {
      setnotification(false);
    }
  });

  async function apikey() {
    try {
      await fetch(`${url}?search=${first}&key=${key}`)
        .then((res) => res.json())
        .then((res) => props.updateUser(res.data.recipes));
    } catch (error) {
      props.showError(error);
    }
  }

  const onChange = (e) => {
    e.preventDefault();
    setfirst(e.target.value);
  };
  const lovedelete = (id, e) => {
    e.preventDefault();
    props.deleteUser(id);
  };
  const getLove = (id, e) => {
    e.preventDefault();
    props.updateUserDetail(id);
  };
  return (
    <>
      <header className="header">
        <img src={logo} alt="Logo" className="header__logo" />
        <div className="search">
          <input
            type="text"
            onChange={onChange}
            className="search__field"
            placeholder="Search over 1,000,000 recipes..."
          />
          <button className="btn search__btn" onClick={apikey}>
            <img className="search__icon" src={search}></img>
            <span>Search</span>
          </button>
        </div>

        <div className="likes">
          <div className="likes__field" style={{ display: "flex" }}>
            {props.Reducer.love.length > 0 ? (
              <FcLike size="3em" />
            ) : (
              <FcLikePlaceholder size="3em" />
            )}
            <div
              className="lovehid"
              style={{ visibility: notification ? "visible" : "hidden" }}
            >
              {props.Reducer.love.length > 0 && props.Reducer.love.length}
            </div>
          </div>
          <div className="likes__panel">
            <ul className="likes__list">
              {props.Reducer.love &&
                props.Reducer.love.map((item, i) => {
                  return (
                    <li className="likes__list" key={i}>
                      <a
                        className="likes__link "
                        href="#"
                        onClick={getLove.bind(this, item)}
                      >
                        <figure className="likes__fig">
                          <img className="item_img" src={item.image_url} />
                        </figure>

                        <div className="likes__data">
                          <h4 className="likes__name">{item.title}</h4>
                          <div className="btn-tinyy">
                            <button
                              className="btn-tiny"
                              onClick={lovedelete.bind(this, item)}
                            >
                              <TiDeleteOutline />
                            </button>
                          </div>
                        </div>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = {
  updateUser,
  showError,
  deleteUser,
  updateUserDetail,
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContacs);
