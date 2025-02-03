import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  SwitcherOutlined,
  LineChartOutlined,
  UserOutlined,
  SlidersOutlined,
  TeamOutlined,
  FundViewOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'home',
    icon: <SwitcherOutlined />,
    label: <Link to="/">数据总览</Link>,
  },
  {
    key: 'trendanalysis',
    icon: <LineChartOutlined />,
    label: <Link to="/trendanalysis">趋势分析</Link>,
  },
  {
    key: 'visitoranalysis',
    icon: <UserOutlined />,
    label: <Link to="/visitoranalysis">访客分析</Link>,
  },
  {
    key: 'visitanalysis',
    icon: <SlidersOutlined />,
    label: <Link to="/visitanalysis">访问分析</Link>,
  },
  {
    key: 'useranalysis',
    icon: <TeamOutlined />,
    label: '用户分析',

    children: [
      {
        key: 'loyaltyanalysis',
        label: <Link to="/loyaltyanalysis">忠诚度分析</Link>,
      },
      {
        key: 'userportrait',
        label: <Link to="/userportrait">用户画像</Link>,
      },
    ],
  },
  {
    key: 'appcrash',
    icon: <FundViewOutlined />,
    label: <Link to="/appcrash">App崩溃分析</Link>,
  },
  {
    key: 'eventanalysis',
    icon: <FundViewOutlined />,
    label: <Link to="/eventanalysis">事件分析</Link>,
  },
];

const SiderMenu: React.FC = () => {
  return (
    <Sider
      collapsible
      theme="light"
      width={210}
      style={{
        position: 'fixed',
        height: '100vh',
        left: 0,
        top: 64,
        overflow: 'hidden',
        zIndex: 1001,
      }}
    >
      <Menu
        defaultSelectedKeys={['home']}
        mode="inline"
        theme="light"
        items={items}
      />
    </Sider>
  );
};

export default SiderMenu;
