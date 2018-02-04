import React from 'react';
import styles from './SearchBar.scss';
import className from 'classnames';

const SearchBar = ({ value, onChange }) => {
  const wrapperClasses = className('input-group', styles.wrapper);
  const addonClasses = className('input-group-text', styles.addon);
  return (
    <div className={wrapperClasses}>
      <div className="input-group-prepend">
        <span className={addonClasses}>
          <i className="fa fa-search" />
        </span>
      </div>
      <input
        onChange={onChange}
        value={value}
        type="text"
        className="form-control"
        placeholder="Search courses/profs"
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBar;
