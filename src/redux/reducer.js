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

const initialState = {
  isDataLoading: true,
  data: [],
  error: null,
  closedCards: [],
  totalPages: 0,
  currentPage: 1
}

export const rootReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SHOW_LOADER: {
      const newState = {
        ...state,
        isDataLoading: true
      }
      return newState
    }
    case HIDE_LOADER: {
      const newState = {
        ...state,
        isDataLoading: false
      }
      return newState
    }
    case FETCH_DATA: {
      const newState = {
        ...state,
        data: payload
      }
      return newState
    }
    case SHOW_ERROR: {
      const newState = {
        ...state,
        error: payload
      }
      return newState
    }
    case HIDE_ERROR: {
      const newState = {
        ...state,
        error: null
      }
      return newState
    }
    case SET_CLOSED_CARDS: {
      const newState = {
        ...state,
        closedCards: [...state.closedCards, payload]
      }
      return newState
    }
    case CLEAR_CLOSED_CARDS: {
      const newState = {
        ...state,
        closedCards: []
      }
      return newState
    }
    case SET_TOTAL_PAGES: {
      const newState = {
        ...state,
        totalPages: payload
      }
      return newState
    }
    case SET_CURRENT_PAGE: {
      const newState = {
        ...state,
        currentPage: payload
      }
      return newState
    }
    default:
      return state
  }
}