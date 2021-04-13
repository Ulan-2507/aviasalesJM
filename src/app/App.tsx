import React from 'react';
import logo from './logo.svg';
import aviaLogo from '../img/tiket-logo.svg';

import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
      </header>
      <main className="main">
        <aside className="sidebar" tabIndex={-1}>
          <button className="sidebar__toggle-btn btn" type="button" hidden>
            Фильтер
            <span className="sidebar__btn-icon"></span>
          </button>
          <div className="filter">
            <h3 className="filter__title">Количество пересадок</h3>
            <ul className="filter__list">
              <li className="filter__item selected-item">
                <label className="check">
                  <input className="check__input" type="checkbox"/>
                  <span className="check__box"></span>
                  Все
                </label>
              </li>
              <li className="filter__item">
                <label className="check">
                  <input className="check__input" type="checkbox"/>
                  <span className="check__box"></span>
                  Без пересадок
                </label>
              </li>
              <li className="filter__item">
                <label className="check">
                  <input className="check__input" type="checkbox"/>
                  <span className="check__box"></span>
                  1 пересадка
                </label>
              </li>
              <li className="filter__item">
                <label className="check">
                  <input className="check__input" type="checkbox"/>
                  <span className="check__box"></span>
                  2 пересадка
                </label>
              </li>
              <li className="filter__item">
                <label className="check">
                  <input className="check__input" type="checkbox"/>
                  <span className="check__box"></span>
                  3 пересадки
                </label>
              </li>
            </ul>
          </div>
        </aside>
        <section className="tikets">
          <nav className="tikets__nav">
            <button className="tikets__link btn">Самый дешевый</button>
            <button className="tikets__link btn">Самый быстрый</button>
            <button className="tikets__link btn">Оптимальный</button>
          </nav>
          <ul className="tikets__list">
            <li className="tiket">
                <div className="tiket__header">
                  <span className="tiket__price">13 400 Р </span>
                  <span className="tiket__logo">
                    <img src={aviaLogo} alt="avialogo"/>
                  </span>
                </div>
                <div className="tiket__flight">
                  <div className="tiket__data">
                    <p className="tiket__titile">MOW – HKT</p>
                    <p className="tiket__subtitle">11:20 – 00:50</p>
                  </div>
                  <div className="tiket__data">
                    <p className="tiket__titile">В пути</p>
                    <p className="tiket__subtitle">13ч 30м</p>
                  </div>
                  <div className="tiket__data">
                    <p className="tiket__titile">1 пересадка</p>
                    <p className="tiket__subtitle">HKG</p>
                  </div>
                </div>
                <div className="tiket__flight">
                  <div className="tiket__data">
                    <p className="tiket__titile">MOW – HKT</p>
                    <p className="tiket__subtitle">11:20 – 00:50</p>
                  </div>
                  <div className="tiket__data">
                    <p className="tiket__titile">В пути</p>
                    <p className="tiket__subtitle">13ч 30м</p>
                  </div>
                  <div className="tiket__data">
                    <p className="tiket__titile">1 пересадка</p>
                    <p className="tiket__subtitle">HKG</p>
                  </div>
                </div>
            </li>

            <li className="tiket">
                <div className="tiket__header">
                  <span className="tiket__price">13 400 Р </span>
                  <span className="tiket__logo">
                    <img src={aviaLogo} alt="avialogo"/>
                  </span>
                </div>
                <div className="tiket__flight">
                  <div className="tiket__data">
                    <p className="tiket__titile">MOW – HKT</p>
                    <p className="tiket__subtitle">11:20 – 00:50</p>
                  </div>
                  <div className="tiket__data">
                    <p className="tiket__titile">В пути</p>
                    <p className="tiket__subtitle">13ч 30м</p>
                  </div>
                  <div className="tiket__data">
                    <p className="tiket__titile">1 пересадка</p>
                    <p className="tiket__subtitle">HKG</p>
                  </div>
                </div>
                <div className="tiket__flight">
                  <div className="tiket__data">
                    <p className="tiket__titile">MOW – HKT</p>
                    <p className="tiket__subtitle">11:20 – 00:50</p>
                  </div>
                  <div className="tiket__data">
                    <p className="tiket__titile">В пути</p>
                    <p className="tiket__subtitle">13ч 30м</p>
                  </div>
                  <div className="tiket__data">
                    <p className="tiket__titile">1 пересадка</p>
                    <p className="tiket__subtitle">HKG</p>
                  </div>
                </div>
            </li>

            <li className="tiket">
                <div className="tiket__header">
                  <span className="tiket__price">13 400 Р </span>
                  <span className="tiket__logo">
                    <img src={aviaLogo} alt="avialogo"/>
                  </span>
                </div>
                <div className="tiket__flight">
                  <div className="tiket__data">
                    <p className="tiket__titile">MOW – HKT</p>
                    <p className="tiket__subtitle">11:20 – 00:50</p>
                  </div>
                  <div className="tiket__data">
                    <p className="tiket__titile">В пути</p>
                    <p className="tiket__subtitle">13ч 30м</p>
                  </div>
                  <div className="tiket__data">
                    <p className="tiket__titile">1 пересадка</p>
                    <p className="tiket__subtitle">HKG</p>
                  </div>
                </div>
                <div className="tiket__flight">
                  <div className="tiket__data">
                    <p className="tiket__titile">MOW – HKT</p>
                    <p className="tiket__subtitle">11:20 – 00:50</p>
                  </div>
                  <div className="tiket__data">
                    <p className="tiket__titile">В пути</p>
                    <p className="tiket__subtitle">13ч 30м</p>
                  </div>
                  <div className="tiket__data">
                    <p className="tiket__titile">1 пересадка</p>
                    <p className="tiket__subtitle">HKG</p>
                  </div>
                </div>
            </li>
          </ul>
          <button className="tikets__show-btn btn">Показать еще 5 билетов!</button>
        </section>
      </main>
    </div>
  );
}

export default App;
