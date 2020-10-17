import {
  createLogic,
} from 'redux-logic';
import AppConstant from '../../constant/AppConstant';
import process from '../../process';

const fetchData = createLogic({
  type: AppConstant.FETCH_DATA,
  cancelType: AppConstant.FETCH_DATA_CANCELLED,
  process: process.fetchDataProcess
});

const searchProduct = createLogic({
  type: AppConstant.PRODUCT_SEARCH,
  cancelType: AppConstant.PRODUCT_SEARCH_CANCELLED,
  process: process.searchProductProcess
});

const sortProduct = createLogic({
  type: AppConstant.SORT_PRODUCTS,
  cancelType: AppConstant.SORT_PRODUCTS_CANCELLED,
  process: process.sortProductProcess
});

const mockDataPromiseArray = [fetchData, searchProduct, sortProduct];

export default mockDataPromiseArray;