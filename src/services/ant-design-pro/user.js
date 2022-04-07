import { request } from 'umi';

/**
 * 获取用户列表
 */
export async function getUsers (params) {
  console.log(params);
  return request('/api/admin/users')
}