import { API } from './api';

export const feedService = {
  getFeed, getCategory
};

function getFeed() {
  const requestOptions = {
    method: 'GET'
  };
  const API_ = API+'/random';

  return fetch(API_, requestOptions).then(handleResponse);
}

function getCategory(query){
  const requestOptions = {
    method:'GET'
  };
  const API_ = API+ query;

  return fetch(API_, requestOptions).then(handleResponse);
}


function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
             // location.reload(true);
          }
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }
      return data;
  });
}