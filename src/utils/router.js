import React from 'react';
import { useLocation } from 'react-router';

/* eslint-disable import/prefer-default-export */
export const useUrlQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};
