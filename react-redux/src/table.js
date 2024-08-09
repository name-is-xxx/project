import React from 'react';
import { Button, Form, Input, Dropdown, Space, Slider } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Table = () => {
  const items = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

  return (
    <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="收货人姓名"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="手机号码"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="手机验证码"
        rules={[{ required: true }]}
      >
        <Space>
          <Input />
          <Button type="primary" danger>
            获取手机验证码
          </Button>
        </Space>
      </Form.Item>

      <Form.Item label="选择地区" >
        <Dropdown menu={{ items }}>
          <Button style={{ width: '100%', display:'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            省份
            <DownOutlined />
          </Button>
        </Dropdown>
        <br />
        <Dropdown menu={{ items }}>
          <Button style={{ marginTop: 5, width: '100%', display:'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            城市
            <DownOutlined />
          </Button>
        </Dropdown>
      </Form.Item>

      <Form.Item label="详细地址">
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" danger style={{width:'100%'}}>
          提交订单
        </Button>
      </Form.Item>
    </Form >
  )
};
export default Table;