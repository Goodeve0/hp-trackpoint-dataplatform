import { Layout } from 'antd';
import React from 'react';
import { useEffect, useState } from 'react';
const { Header } = Layout;

export default function AppHeader() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // 设置定时器每秒更新时间
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // 组件卸载时清除定时器
    return () => clearInterval(timer);
  }, []);
  const formattedTime = currentTime.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // 24小时制
  });
  return (
    <Header
      style={{
        background: '#fff',
        padding: '0 20px',
        position: 'fixed',
        width: '100%',
        zIndex: 1,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex', // 新增：启用Flex布局
        alignItems: 'center', // 垂直居中
        gap: 20, // 元素间距
      }}
    >
      <h2 style={{ margin: 0 }}>TrackPoint平台</h2>
      <div
        style={{
          fontWeight: 'bold',
          color: '#1890ff',
          display: 'flex',
          gap: 8, // 时间与日期间距
        }}
      >
        <span>{formattedTime}</span>
      </div>
    </Header>
  );
}
