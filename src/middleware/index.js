import {
  createLogicMiddleware,
} from 'redux-logic';

import Logics from '../logics';

const middleware = createLogicMiddleware(Logics);

export default middleware;