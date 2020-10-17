import {
  connect
} from 'react-redux';
import AppConstants from '../../../constant/AppConstant';
import Home from '../presentational';

const mapStateToProps = (state) => ({
  products: state.MockDataReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMockData: () => {
    dispatch({
      type: AppConstants.FETCH_DATA
    });
  },
  searchProducts: (payload) => {
    dispatch({
      type: AppConstants.PRODUCT_SEARCH,
      payload,
    })
  },
  sortProducts: (payload) => {
    dispatch({
      type: AppConstants.SORT_PRODUCTS,
      payload,
    });
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);