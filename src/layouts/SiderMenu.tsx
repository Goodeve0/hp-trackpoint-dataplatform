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

const { Sider } = Layout;

const menuItems = [
  {
    label: <Link to="/">数据总览</Link>,
    key: 'home',
    icon: <SwitcherOutlined />,
  },
  {
    label: <Link to="/trendanalysis">趋势分析</Link>,
    key: 'trendanalysis',
    icon: <LineChartOutlined />,
  },
  {
    label: <Link to="/visitoranalysis">访客分析</Link>,
    key: 'visitoranalysis',
    icon: <UserOutlined />,
  },
  {
    label: <Link to="/visitanalysis">访问分析</Link>,
    key: 'visitanalysis',
    icon: <SlidersOutlined />,
  },
  {
    label: <Link to="/useranalysis">用户分析</Link>,
    key: 'useranalysis',
    icon: <TeamOutlined />,
  },
  {
    label: <Link to="/appcrash">App崩溃分析</Link>,
    key: 'appcrash',
    icon: <FundViewOutlined />,
  },
  {
    label: <Link to="/eventanalysis">事件分析</Link>,
    key: 'eventanalysis',
    icon: <FundViewOutlined />,
  },
];

export default function SiderMenu() {
  return (
    <Sider
      collapsible
      theme="light"
      width={200}
      style={{
        position: 'fixed',
        height: '100vh',
        left: 0,
        zIndex: 2, // 确保侧边栏在顶部栏之上
      }}
    >
      <Menu items={menuItems} />;
    </Sider>
  );
}
