import { Reducer } from 'redux';
import { Subscription, Effect } from 'dva';

export interface TestModelState {
  age: number;
  name: string;
  info: {};
}

export interface TestModelType {
  namespace: 'Test';
  state: TestModelState;
  effects: {
      addAge: Effect;
  };
  reducers: {
    updateState: Reducer<TestModelState>;
  };
  subscriptions: { setup: Subscription };
}

const TestModel: TestModelType = {
  namespace: 'Test',

  state: {
    age: 1,
    name: 'zs',
    info: {},
  },

  effects: {
    * addAge({ payload: { age } }, { call, select, put }) {
      const { data } = yield call(age);
      yield put({
        type: 'update',
        payload: { info: data },
      });
      const flag: boolean = yield select((state: TestModelState) => state.age === data.age);
      yield put({
        type: 'updateState',
        payload: { age, flag },
      });
    },

  },

  reducers: {
    updateState(state, { payload }): TestModelState {
      return {
        ...state,
        ...payload,
      };
    },
  },

  subscriptions: {
    setup({ history }): void {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      history.listen(({ pathname, search }): void => {
        if (pathname === '/test') console.log(1);
        if (search) console.log(2);
      });
    },
  },
};

export default TestModel;
