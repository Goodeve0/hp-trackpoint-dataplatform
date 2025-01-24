import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import SiderMenu from './SiderMenu';
import AppHeader from './Header';

const { Content } = Layout;

export default function MainLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 侧边栏 */}
      <SiderMenu />

      <Layout style={{ marginLeft: 200 }}>
        {/* 顶部导航栏 */}
        <AppHeader />

        {/* 内容区域 */}
        <Content
          style={{
            marginTop: 64, // 顶部栏高度补偿
            padding: '20px',
            overflow: 'auto', // 内容溢出时显示滚动条
          }}
        >
          <Outlet /> {/* 子路由内容在此处渲染 */}
        </Content>
      </Layout>
    </Layout>
  );
}
