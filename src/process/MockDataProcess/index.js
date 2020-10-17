import AppConstants from "../../constant/AppConstant";
import mockData from '../../DataSource/mock.json';

const fetchDataProcess = async ({ getState, action }, dispatch, done) => {
  dispatch({
    type: AppConstants.FETCH_DATA_SUCCESS,
    payload: mockData,
  });
  done();
}

const searchProductProcess = async ({ getState, action }, dispatch, done) => {
  const {
    productsBackup,
  } = getState().MockDataReducer;
  const {
    payload,
  } = action;
  const {
    searchTerm,
  } = payload;
  const searchResult = productsBackup.filter((product) => product.name.indexOf(searchTerm) > -1);
  dispatch({
    type: AppConstants.PRODUCT_SEARCH_SUCCESS,
    payload: searchResult,
  });
  done();
}

const sortProductProcess = async ({ getState, action }, dispatch, done) => {
  const {
    productsBackup,
  } = getState().MockDataReducer;
  const {
    payload,
  } = action;
  const {
    sort,
  } = payload;
  const searchResult = productsBackup.sort((a, b) => sort === 'Lowest Price'
    ? a.offerPrice - b.offerPrice
    : b.offerPrice - a.offerPrice);
  dispatch({
    type: AppConstants.SORT_PRODUCTS_SUCCESS,
    payload: searchResult,
  });
  done();
}

export default {
  fetchDataProcess,
  searchProductProcess,
  sortProductProcess
};