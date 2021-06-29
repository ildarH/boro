import {
  CLEAR_CLOSED_CARDS,
  FETCH_DATA,
  HIDE_ERROR,
  HIDE_LOADER,
  SET_CLOSED_CARDS,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGES,
  SHOW_ERROR,
  SHOW_LOADER,
} from './types';

import {Http} from './../api/http'

export const fetchData = (params) => async dispatch => {

  console.log('fetch data');

  dispatch({type: SHOW_LOADER})
  try {
    const response = await Http.get(params)
    console.log('response: ', await response);
    // dispatch({type: FETCH_DATA, payload: response})
  } catch (error) {
    console.error('error: ', error.results);
    console.error('error: ', error.result);
    console.error('error: ', error);
    dispatch({type: SHOW_ERROR, payload: error})
  } finally {
    dispatch({type: HIDE_LOADER})
  }
}