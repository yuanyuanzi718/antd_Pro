import React, { useRef } from 'react'
import { PageContainer } from '@ant-design/pro-layout'
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { Button, Tag, Space, Menu, Dropdown } from 'antd';
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons';

export default function UserList () {
  const actionRef = useRef();
  const columns = []
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
        form={{
          // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
          syncToUrl: (values, type) => {
            if (type === 'get') {
              return {
                ...values,
                created_at: [values.startTime, values.endTime],
              };
            }
            return values;
          },
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
