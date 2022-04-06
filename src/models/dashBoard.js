import { request } from 'umi';
const getDashBoard = () => {
  return request('/api/dashboard')
}
export default {
  namespace: 'dashBoard',
  urlPath: '/dashboard',
  state: { dataObj: {} },
  effects: {
    * query ({ payload }, { call, put }) {
      const { data } = yield call(getDashBoard)
      yield put({ type: 'setDashBoard', payload: data });
    }
  },
  reducers: {
    setDashBoard (state, action) {
      return { ...state, dataObj: action.payload }
    }
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/dashboard') {
          dispatch({
            type: 'query'
          });
        }
      })
    },
  },

}
