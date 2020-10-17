import AppConstant from '../../constant/AppConstant';

const initialState = {
  products: [],
  productsBackup: [],
};

const MockDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppConstant.FETCH_DATA_SUCCESS: {
      return {
        ...state,
        products: action.payload,
        productsBackup: [...action.payload],
      }
    }

    case AppConstant.FETCH_DATA_ERROR: {
      return {
        ...state,
      }
    }
      
    case AppConstant.PRODUCT_SEARCH_SUCCESS: {
      return {
        ...state,
        products: action.payload,
      }
    }
      
    case AppConstant.SORT_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: [ ...action.payload ],
      }
    }

    default: {
      return {
        ...state,
      }
    }
  }
}

export default MockDataReducer;