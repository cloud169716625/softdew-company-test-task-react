/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/**
 * Large list causes lags in react-select based on this issue
 * https://github.com/JedWatson/react-select/issues/3128
 *
 * So following this solution
 * https://github.com/JedWatson/react-select/issues/3128#issuecomment-847149453
 */
import React from 'react';
import { FixedSizeList as List } from 'react-window';

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

export const SelectMenu = ({ children, innerProps }) => (
  <div className="w-100 position-relative" {...innerProps}>
    {children}
  </div>
);

export const ValueContainer = ({ children, innerProps }) => (
  <div className="form-group mt-auto mb-3" {...innerProps}>
    {children}
  </div>
);

export const Control = ({ children, innerProps }) => (
  <div
    className="w-100 position-relative bg-light"
    style={{ borderRadius: '0.75rem' }}
    {...innerProps}>
    {children}
  </div>
);

export const IndicatorsContainer = () => <div />;

const hoverOption = (e) => {
  const parentOption = e.target.closest('.d-flex');
  const hoverClass = 'bg-success-light';
  parentOption.className =
    parentOption.className.indexOf(hoverClass) !== -1
      ? parentOption.className.replace(hoverClass, '')
      : `${parentOption.className}${hoverClass}`;
};

export const Option = ({ isSelected, innerProps, data, selectProps }) => {
  const { fieldsInfo } = selectProps;
  return (
    <div
      key={innerProps.id}
      className={`px-3 d-flex flex-row justify-content-between align-items-center bg-white rounded ${
        isSelected ? 'bg-success-light' : ''
      }`}
      onMouseEnter={hoverOption}
      onMouseLeave={hoverOption}
      style={{ lineHeight: '1.5rem', height: '2.75rem', cursor: 'pointer' }}
      id={innerProps.id}
      tabIndex={innerProps.tabIndex}
      onClick={innerProps.onClick}
      role="button"
      onKeyDown={null}>
      {fieldsInfo.map((field) => {
        switch (field.type) {
          case 'text':
            return (
              <div key={field.data} className={field.class}>{`${field.prefix || ''}${
                data[field.data]
              }`}</div>
            );
          case 'img':
            return (
              <div key={field.data} className={field.class}>
                <img
                  className={field.img.class}
                  src={`${field.img.sourcePath}${data[field.data]}${field.img.ext}`}
                  alt={data[field.data]}
                  style={
                    field.img.size
                      ? { width: field.img.size.width, height: field.img.size.height }
                      : { width: '1.5rem', height: '1.5rem' }
                  }
                />
              </div>
            );
          default:
            return <React.Fragment key={field.data} />;
        }
      })}
    </div>
  );
};

export const Placeholder = () => <div />;

const Menu = ({ children, innerProps }) => (
  <div
    style={{ zIndex: 2 }}
    className={`select_menu-container ${children.props.containerClass}`}
    {...innerProps}>
    {children}
  </div>
);
const Blanket = (props) => (
  <div
    style={{
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: 'fixed',
      zIndex: 1,
    }}
    {...props}
  />
);

export const Dropdown = ({ children, isOpen, target, onClose, dropDownParentClass }) => (
  <div className={dropDownParentClass}>
    <div style={{ zIndex: 10 }} className="w-100 position-relative">
      {target}
    </div>
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? (
      <Blanket
        onClick={(e) => {
          onClose(e);
        }}
      />
    ) : null}
  </div>
);
const Svg = (p) => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...p} />;

export const ChevronDown = ({ style, className }) => (
  <Svg style={style}>
    <path
      d="M2.52493 4.07061L1.33301 5.26253L7.99968 11.9292L14.6663 5.26253L13.4744 4.07061L7.99968 9.54536L2.52493 4.07061Z"
      fill="currentColor"
      className={className}
    />
  </Svg>
);
