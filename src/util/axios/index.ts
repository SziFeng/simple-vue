import axios, { AxiosResponse } from 'axios';
import Qs from 'qs';

/**
 * 请求拦截器
 */
axios.interceptors.request.use(
  // 请求发送之前做些什么
  (config) => {
    return config;
  },
  // 请求错误做些什么
  (error) => {
    return Promise.reject(error);
  },
);


interface ResponeData {
  data: any;
  type: string;
  msg: string;
  success: boolean;
  status: string;
}
/**
 * 响应拦截器
 */
axios.interceptors.response.use(
  // 对响应数据做些什么
  // 准备格式
  // data:数据
  // type:消息类型级别
  // msg：提示消息
  // success:true | flase 是否调用成功
  // status:success| fail 成功或者失败
  (res: AxiosResponse<ResponeData, any>) => {
    if (res.data.success) {
      return res.data;
    } else {
      // tslint:disable-next-line: no-console
      console.log('res :>> ', res);
    }
  },
  // 对响应错误做些什么
  (error) => {
    return Promise.reject(error);
  },
);

export class Http {

  public get(url: string, params: any) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params,
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

