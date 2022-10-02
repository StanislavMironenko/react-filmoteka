import React from "react";
import '../../sass/components/_searchForm.scss';

export function SearchForm(): JSX.Element{
return <form id="search-form" className="search-form">
      <div className="search-form__container">
        <input
          className="search-form__input"
          type="text"
          name="searchQuery"
        //   autocomplete="off"
          placeholder="Search movie..."
        />
        <button className="search-form__btn" type="submit">
          <svg className="search-form__icon" aria-label="Search">
            <use
              className="icon-search"
              href="../../img/icons.svg#icon-search"
            
            ></use>
          </svg>
        </button>
      </div>
      
    </form>
}