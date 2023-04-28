import { useState } from "react";

export const Header = () => {
  let [theme, setTheme] = useState("dark");
  let [isSearch, setIsSearch] = useState(false);

  const handleClickTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const handleClickSearch = () => {
    if (isSearch) {
      setTimeout(() => {
        setIsSearch(false);
      }, 300);
      document.querySelector(".header__search-panel").style.animation =
        "slideOff 0.3s linear forwards";
    } else {
      setIsSearch(true);
      document.querySelector(".header__search-panel").style.animation =
        "slideOn 0.3s linear forwards";
    }
  };

  return (
    <div className="header">
      <div className="header__wrapper">
        <img
          src="./src/assets/image/logo.svg"
          alt="Game Go"
          className="header__logo"
        />
        <div className="header__center">
          <p className="header__games">Games</p>
          <p className="header__news">News</p>
        </div>

        <div className="header__right">
          <img
            className="header__search"
            src={`./src/assets/image/${isSearch ? "close" : "search"}.svg`}
            alt="search"
            onClick={handleClickSearch}
          />
          <div className="header__wrap-switch-theme">
            <img
              className="header__switch-theme"
              src={`./src/assets/image/${theme}-theme.svg`}
              alt="switch theme"
              onClick={handleClickTheme}
            />
          </div>
          <div className="header__wrap-login">
            <img
              className="header__login"
              src="./src/assets/image/user.svg"
              alt="login"
            />
          </div>
        </div>
      </div>
      {isSearch && (
        <div className="header__search-panel">
          <input
            className="header__input-search"
            placeholder="Search the game"
            type="text"
          />
        </div>
      )}
    </div>
  );
};
