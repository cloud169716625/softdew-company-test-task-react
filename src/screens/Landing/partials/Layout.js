import React from 'react';
import PropTypes from 'prop-types';

const PageLayout = ({ children }) => <div className="container-fluid w-100 p-0">{children}</div>;

export default PageLayout;

PageLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export const SectionContainer = ({ className, children }) => (
  <div className={`${className} wl-layout`}>{children}</div>
);

SectionContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

SectionContainer.defaultProps = {
  className: null,
};
