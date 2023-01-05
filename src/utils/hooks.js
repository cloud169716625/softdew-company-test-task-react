import axios from 'axios';
import { useCallback, useState } from 'react';

const versionNumber = '999';
const Platform = 'android';

let axiosConnection = null;

const baseURL = process.env.REACT_APP_API_SERVER || 'https://waitlist.baanx.co.uk/';

const BAANX_API = 'api';
const IFRAME_API = 'iframe/api';

export function getAxiosConnection() {
  if (!axiosConnection) {
    axiosConnection = axios.create({
      baseURL,
      headers: {
        'X-Product-Version': `${versionNumber}`,
        'X-Platform': Platform,
        'Content-Type': 'application/json',
        'x-product': 'LEDGER',
      },
    });

    axiosConnection.interceptors.response.use((response) => {
      const { data } = response;
      if (data.error) {
        throw data.error;
      }
      return response;
    });
  }
  return axiosConnection;
}

export const useApi = (verb, endpoint, { type }) => {
  let api = IFRAME_API;
  if (type !== 'ledger') {
    api = BAANX_API;
  }

  const [result, setResult] = useState({
    data: null,
    error: null,
    isLoading: false,
  });

  const callApi = useCallback(
    async (payload) => {
      try {
        setResult({
          ...result,
          isLoading: true,
        });
        const { data } = await axiosConnection[verb](`${api}${endpoint}`, payload);
        setResult({
          ...result,
          isLoading: false,
          error: null,
          data,
        });
      } catch (error) {
        setResult({
          ...result,
          isLoading: false,
          error,
          data: null,
        });
      }
    },
    [api, endpoint, result, verb]
  );

  return { ...result, refetch: callApi };
};
