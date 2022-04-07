import mockjs from 'mockjs';
// import Random from mockjs.Random
export default {
  // 使用 mockjs 等三方库
  'GET /api/admin/users': mockjs.mock({
    'data|20': [
      {
        'id|+1': 1,
        'avatar_url': mockjs.Random.image('200x100'),
        'name': '@cname',
        'email': '@email',
        'is_locked': true,
        'created_at': mockjs.Random.date()
      }
    ],
  }),
};
