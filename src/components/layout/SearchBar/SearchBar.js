import React from 'react';
import styles from './SearchBar.scss';
import className from 'classnames';
import { Search, Input } from 'semantic-ui-react';

const SearchBar = ({ value, onChange }) => {
  const wrapperClasses = className('input-group', styles.wrapper);
  const addonClasses = className('input-group-text', styles.addon);
  return (
    <div className={wrapperClasses}>
      <Input
        icon="search"
        onChange={onChange}
        value={value}
        placeholder="search courses/profs..."
        fluid
      />
      {/* <Search
        onSearchChange={onChange}
        value={value}
        placeholder="search courses/profs..."
        fluid
      /> */}
    </div>
  );
};

export default SearchBar;
