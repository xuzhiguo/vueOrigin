import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: '/api',
	timeout: 1000
});

axiosInstance.interceptors.request.use(function(config) {

    //加上认证token
    config.params.showapi_appid = '41605';
    config.params.showapi_sign = '4e08cead209f4fb695115be721ba5ff7';

	return config;
}, function(error) {
	return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function(response) {
	return response;
}, function(error) {
    var msg = ['抱歉', '服务器有点累,请您稍后重试'];
	
	if(error.response==undefined) {
		return Promise.reject(msg);
	}
	
	// 响应状态码
	switch (error.response.status) {
		case 400: {
			msg = ['抱歉', '请尝试刷新浏览器或者返回用户首页']
			break;
		}
		case 401: {
			msg = ['抱歉', '您未获得操作此类资源的授权']
			break;
		}
		case 404: {
			msg = ['抱歉', '您访问的某些资源不存在或者已经被移除']
			break;
		}
	}
	return Promise.reject(msg);
});

axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axiosInstance;

