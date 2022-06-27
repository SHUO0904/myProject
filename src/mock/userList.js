let userList = {
  code: 200,
  message: 'success',
  data: {
    total: 100,
    'rows|10': [{
      id: '@guid',
      name: '@cname',
      'age|20-30': 23,
      'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师']
    }]
  }
};

let menuList = {
  code: 200,
  message: 'success',
  data: {
    total: 100,
    'rows|10': [{
      id: '@guid',
      "path": '/admin',
      'name':'AdminIndex',
      'nameZh':'首页',
      'component':'AdminIndex',
      'parentId':0,
      'children':[{
        'id':'@guid',
        'path': '/admin/user/profile',
        'name': 'Profile',
        'nameZh': '用户信息',
        'iconCls': null,
        'component': 'user/UserProfile',
        'parentId': 2,
        'children': null
      },{
        'id':'@guid',
        'path': '/admin/user/role',
        'name': 'Profile',
        'nameZh': '角色配置',
        'iconCls': null,
        'component': 'user/Role',
        'parentId': 2,
        'children': null
      }]
    }]
  }
};

export default {
  'get|/getUserList': menuList
}

