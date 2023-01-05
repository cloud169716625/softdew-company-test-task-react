/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';
import Select, { components } from 'react-select';
import PropTypes from 'prop-types';
import { FixedSizeList as List } from 'react-window';

import { useApi } from '../../utils/hooks';

const BASE_ASSETS = process.env.REACT_APP_IS_TEST_BUILD ? '.' : '';
const OPTION_HEIGHT = 44;
const ROWS = 6;

export const MenuList = ({ options, children, getValue }) => {
  const [value] = getValue();
  const initialOffset =
    options.indexOf(value) !== -1
      ? Array.isArray(children) && children.length >= ROWS
        ? options.indexOf(value) >= ROWS
          ? options.indexOf(value) * OPTION_HEIGHT - OPTION_HEIGHT * 5
          : 0
        : 0
      : 0;
  return Array.isArray(children) ? (
    <List
      height={children.length >= ROWS ? OPTION_HEIGHT * ROWS : children.length * OPTION_HEIGHT}
      itemCount={children.length}
      itemSize={OPTION_HEIGHT}
      initialScrollOffset={initialOffset}>
      {({ style, index }) => (
        <div key={children[index].key} style={style}>
          {children[index]}
        </div>
      )}
    </List>
  ) : (
    <div>{children}</div>
  );
};

function arrayMove(arr, fromIndex, toIndex) {
  const element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}

const { Option, SingleValue } = components;
const IconOption = (props) => (
  <Option {...props}>
    <img
      src={`/assets/images/flags/1x1/${props.data.iso3166alpha2}.svg`}
      style={{ width: '1rem', borderRadius: '50%', marginRight: 8 }}
      alt={props.data.displayName}
    />
    {props.data.displayName}
  </Option>
);

const Svg = (p) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    {...p}
  />
);

const ChevronDown = ({ style, className }) => (
  <Svg style={style}>
    <path
      d="M2.52493 4.07061L1.33301 5.26253L7.99968 11.9292L14.6663 5.26253L13.4744 4.07061L7.99968 9.54536L2.52493 4.07061Z"
      fill="currentColor"
      className={className}
    />
  </Svg>
);

const IconSingleValue = (props) => (
  <SingleValue {...props}>
    <img
      src={`/assets/images/flags/1x1/${props.data.iso3166alpha2}.svg`}
      style={{
        width: '1rem',
        borderRadius: '50%',
        marginRight: 8,
        marginBottom: 4,
      }}
      alt={props.data.displayName}
    />
    {props.data.displayName}
  </SingleValue>
);

const Control = ({ children, ...props }) => (
  <components.Control {...props}>
    <span>
      <i className="fas fa-search pe-2" />
    </span>
    {children}
  </components.Control>
);

const SelectCountryDropdown = ({ value, onChange, name }) => {
  const [isDropdownOpen, openDropdown] = useState(false);
  const {
    data: countries,
    isLoading: isLoadingCountries,
    refetch,
  } = useApi('get', '/v2/waiting_list/supported_countries', { type: 'ledger' });
  const [sortedCountries, setSortedCountries] = useState([]);

  useEffect(() => refetch(), []);

  useEffect(() => {
    if (!isLoadingCountries && countries && sortedCountries.length === 0) {
      const frIndex = countries.findIndex((item) => item.iso3166alpha2 === 'FR');
      const deIndex = countries.findIndex((item) => item.iso3166alpha2 === 'DE');
      const ukIndex = countries.findIndex((item) => item.iso3166alpha2 === 'GB');
      const usIndex = countries.findIndex((item) => item.iso3166alpha2 === 'US');

      if (frIndex >= 0) arrayMove(countries, frIndex, 0);
      if (deIndex >= 0) arrayMove(countries, deIndex, 1);
      if (ukIndex >= 0) arrayMove(countries, ukIndex, 2);
      if (usIndex >= 0) arrayMove(countries, usIndex, 3);

      setSortedCountries(countries);
    }
  }, [isLoadingCountries, countries?.length]);

  return (
    <>
      <input
        value={value || ''}
        onChange={() => {}}
        style={{ pointerEvents: 'none', position: 'absolute', top: 0, left: 0, opacity: 0 }}
        required
      />
      <div
        onKeyDown={null}
        tabIndex={-1}
        role="button"
        style={{ marginBottom: '2.5rem' }}
        onClick={() => openDropdown(!isDropdownOpen)}
        className="wl-dropdown-label">
        {value && (
          <img
            src={`${BASE_ASSETS}/assets/images/flags/1x1/${value?.iso3166alpha2}.svg`}
            style={{
              width: '1rem',
              borderRadius: '50%',
              marginRight: 8,
              marginBottom: 4,
            }}
            alt={value?.displayName}
          />
        )}
        {value?.displayName || (
          <span className="text-white" style={{ opacity: !value ? 0.7 : 1 }}>
            Enter your country of residence
          </span>
        )}
        <i
          tabIndex={0}
          style={{ opacity: !value ? 0.7 : 1 }}
          className={`ms-auto ${isDropdownOpen ? 'text-primary' : ''}`}
          role="button"
          onKeyDown={() => {}}>
          <ChevronDown
            style={{
              transition: '0.3s',
              transform: `rotate(${isDropdownOpen ? '180deg' : '0deg'})`,
            }}
          />
        </i>
        {isDropdownOpen && (
          <div className="wl-dropdown-container">
            <Select
              autoFocus
              menuIsOpen
              backspaceRemovesValue={false}
              isLoading={isLoadingCountries}
              options={sortedCountries || []}
              tabSelectsValue={false}
              classNamePrefix="react-select"
              className="react-select-container"
              components={{
                Option: IconOption,
                SingleValue: IconSingleValue,
                IndicatorSeparator: null,
                DropdownIndicator: null,
                Control,
                MenuList,
              }}
              value={value}
              onChange={(_value) => {
                openDropdown(false);
                onChange({ target: { value: _value, name } });
              }}
              getOptionValue={(option) => option}
              getOptionLabel={(option) => option.displayName}
              controlShouldRenderValue={false}
              placeholder="Search country"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SelectCountryDropdown;

SelectCountryDropdown.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
SelectCountryDropdown.defaultProps = {
  value: null,
};
