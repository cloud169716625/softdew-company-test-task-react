// import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

import result from './site_content.json';
// const client = (function () {
//   let _client;
//   function createInstance() {
//     try {
//       return createClient({
//         // This is the space ID. A space is like a project folder in Contentful terms
//         space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
//         // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
//         accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_ACCESS_TOKEN,
//       });
//     } catch (error) {
//       console.log(error);
//       return null;
//     }
//   }

//   return {
//     get() {
//       if (!_client) {
//         _client = createInstance();
//       }
//       return _client;
//     },
//   };
// })();

export default () => {
  const [data, setData] = useState({
    fields: {
      termsPage1: '',
    },
  });

  useEffect(() => {
    setData(result.items[0]);
  }, []);

  return data;
};
