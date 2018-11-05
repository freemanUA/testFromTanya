import axios, { CancelToken } from 'axios';
import { Actions } from 'react-native-router-flux';
import { DATA_CHANGED, DATA_LOAD, DATA_LOAD_FAILED, DATA_LOAD_SUCCESS, DETAILS_ITEM_DATA_CHANGED } from './types';

export const getData = () => {
  return(dispatch) => {
      const url = 'https://dl.dropboxusercontent.com/s/zjjioeld6zbqu35/listings-temp.json';
      dispatch({ type: DATA_LOAD });
      const source = CancelToken.source();
      setTimeout(() => {
          source.cancel();
      }, 2000);
      axios.get(url, { cancelToken: source.token })
          .then(response => {
              console.log(response);
              dispatch({ type: DATA_CHANGED, payload: response.data });
              dispatch({ type: DATA_LOAD_SUCCESS });
          })
          .catch(error => {
              console.log(error);
              dispatch({ type: DATA_LOAD_FAILED, payload: 'no connection try again' });
          });
  }
};
export const showDetails = (item) => {
  return(dispatch) => {
      //console.log(item);
      dispatch({ type: DETAILS_ITEM_DATA_CHANGED, payload: item });
      Actions.DetailsScreen();
  }
};