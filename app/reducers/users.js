import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const isLoggedIn = createReducer(false, {
	[types.LOG_IN](state, action) {
		return action.isLoggedIn;
	}
});