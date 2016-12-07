/*
* $resource- 账户相关 
* --Mondooo
* 
*/
export default ($resource, BASE_URL) => {
	'ngInject';
	return {
		/**
		* 登录api
		* @Request Headers: X-Username; X-Password
		* @Request Params: null
		*/
		account: (headers) => {
			return $resource(BASE_URL+'/token', {}, {
				post: {
					method: 'POST',
					headers: headers, 
				},
				get: {
					method: 'GET',
					headers: headers,
				}
			});
		},
		/**
		* 获取所有的账户信息
		* @Request Headers: X-Auth-Token
		* @Request Params: null
		*/
		accountAll: (headers) => {
			return $resource(BASE_URL+'/account/all', {}, {
				get: {
					method: 'GET',
					headers: headers,
				}
			});
		},
		/**
		* 根据id对账户信息进行增删查
		* @Request Headers: X-Auth-Token
		* @Request Params: userid
		*/
		accountById: (headers) => {
			return $resource(BASE_URL+'/account/:userid', {userid: '@userid'}, {
				post: {
					method: 'POST',
					headers: headers, 
				},
				get: {
					method: 'GET',
					headers: headers,
				},
				delete: {
					method: 'DELETE',
					headers: headers,
				}
			});
		},
		/**
		* 更改当前账户密码
		* @Request Headers: X-Auth-Token
		* @Request Params: null
		*/
		resetPsw: (headers) => {
			return $resource(BASE_URL+'/account/resetPassword', {}, {
				post: {
					method: 'POST',
					headers: headers, 
				},
			});
		},
	};
};