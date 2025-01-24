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
      <Menu mode="inline" defaultSelectedKeys={['home']}>
        <Menu.Item key="home" icon={<SwitcherOutlined />}>
          <Link to="/">数据总览</Link>
        </Menu.Item>
        <Menu.Item key="trendanalysis" icon={<LineChartOutlined />}>
          <Link to="/trendanalysis">趋势分析</Link>
        </Menu.Item>
        <Menu.Item key="visitoranalysis" icon={<UserOutlined />}>
          <Link to="/visitoranalysis">访客分析</Link>
        </Menu.Item>
        <Menu.Item key="visitanalysis" icon={<SlidersOutlined />}>
          <Link to="/visitanalysis">访问分析</Link>
        </Menu.Item>
        <Menu.Item key="useranslysis" icon={<TeamOutlined />}>
          <Link to="/useranslysis">用户分析</Link>
        </Menu.Item>
        <Menu.Item key="appcrash" icon={<FundViewOutlined />}>
          <Link to="/appcrash">App崩溃分析</Link>
        </Menu.Item>
        <Menu.Item key="eventanalysis" icon={<FundViewOutlined />}>
          <Link to="/eventanalysis">事件分析</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
