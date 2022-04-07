import React, { useRef } from 'react'
import { PageContainer } from '@ant-design/pro-layout'
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { Button, Tag, Space, Menu, Dropdown, Avatar, Switch } from 'antd';
import { PlusOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import { getUsers } from '@/services/ant-design-pro/user';

export default function UserList () {
  const actionRef = useRef();
  const columns = [
    {
      title: '头像',
      dataIndex: 'avatar_url',
      hideInSearch: true,
      render: (_, record) => <Avatar src={record.avatar_url} size={32} icon={UserOutlined} />
    },
    {
      title: '姓名',
      hideInSearch: true,
      dataIndex: 'name',
    },
    {
      title: '邮箱',
      hideInSearch: true,
      dataIndex: 'email',
    },
    {
      title: '是否禁用',
      dataIndex: 'is_locked',
      hideInSearch: true,
      render: (_, record) => <Switch
        checkedChildren="开启"
        unCheckedChildren="禁用"
        defaultChecked={record.is_locked}
        onChange={() => { }}
      />
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      hideInSearch: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      hideInSearch: true,
      render: (_, record) => <a onChange={() => { }}>编辑</a>
    },
  ]
  return (
    <PageContainer>
      <ProTable
        columns={columns}
        actionRef={actionRef}
        cardBordered
        // request={async (params = {}, sort, filter) => {
        //   console.log(sort, filter);
        //   return request < {
        //     data: GithubIssueItem[];
        //   } > ('https://proapi.azurewebsites.net/github/issues', {
        //     params,
        //   });
        // }}
        request={async (params = {}) => getUsers(params)}
        editable={{
          type: 'multiple',
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
          onChange (value) {
            console.log('value: ', value);
          },
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        pagination={{
          pageSize: 5,
        }}
        dateFormatter="string"
        headerTitle="用户列表"
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary">
            新建
          </Button>,
        ]}
      />
    </PageContainer>
  )
}
