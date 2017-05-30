import * as types from './types'

export function logIn(username, password) {
	
	return (dispatch, getState) => {
		console.log('username:'+username+' pass:'+password);
		var loginValue = false;
		if(username == 'Sagar' && password == 'musale') {
			loginValue = true;
		}
		dispatch(setIsLoggedInUser({ isLoggedIn: loginValue }));
	}
}


export function setIsLoggedInUser({isLoggedIn}) {
	
	return {
		type: types.LOG_IN,
		isLoggedIn
	}
}