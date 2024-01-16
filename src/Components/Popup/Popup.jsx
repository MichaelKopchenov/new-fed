/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Popup.css";
import "../Header/Header.css";
import { useState } from "react";
import PopupServices from "../PopupServices/PopupServices";

export default function Popup({
  active,
  setActive,
}) {
  const [modalActive, setModalActive] =
    useState(false);

  function Popups() {
    setActive(false);
    setModalActive(true);
  }

  return (
    <>
      <PopupServices
        active={modalActive}
        setActive={setModalActive}
      />
      <div
        id="popup"
        className={
          active ? "popup active" : "popup"
        }
        onClick={() => setActive(false)}
      >
        <PopupServices
          active={modalActive}
          setActive={setModalActive}
        />
        <div
          className={
            active
              ? "popup__content active"
              : "popup__content"
          }
          onClick={(e) => e.stopPropagation()}
        >
          <ul
            className={
              active ? "header__ul active" : ""
            }
          >
            <li
              className={
                active ? "header__li active" : ""
              }
            >
              <a
                href="#"
                className={
                  active
                    ? "header__li-link active"
                    : ""
                }
                onClick={() => setActive(false)}
              >
                Главная
              </a>
            </li>
            <li
              className={
                active ? "header__li active" : ""
              }
            >
              <a
                href="#Team"
                className={
                  active
                    ? "header__li-link active"
                    : ""
                }
                onClick={() => setActive(false)}
              >
                Наша команда
              </a>
            </li>
            <li
              className={
                active ? "header__li active" : ""
              }
            >
              <a
                href="#Works"
                className={
                  active
                    ? "header__li-link active"
                    : ""
                }
                onClick={() => setActive(false)}
              >
                Наши проекты
              </a>
            </li>
            <li
              className={
                active ? "header__li active" : ""
              }
            >
              <a
                className={
                  active
                    ? "header__li-link active"
                    : ""
                }
                onClick={Popups}
              >
                Услуги
              </a>
            </li>
            <li
              className={
                active ? "header__li active" : ""
              }
            >
              <a
                href="#Footer"
                className={
                  active
                    ? "header__li-link active"
                    : ""
                }
                onClick={() => setActive(false)}
              >
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}