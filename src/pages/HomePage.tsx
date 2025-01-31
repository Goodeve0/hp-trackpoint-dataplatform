import React, { useState, useEffect } from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Row, Col, Card, Skeleton } from 'antd';
// import type { Dayjs } from 'dayjs';
// import axios from 'axios';

interface CardItem {
  id: number;
  title: string;
  content: string; // 根据实际接口字段修改
  createdAt?: string; // 可选字段示例
  description?: string; // 可选字段示例
}

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const HomePage: React.FC = () => {
  const [data, setData] = useState<CardItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟数据获取
    const fetchData = async () => {
      try {
        // const { data } = await axios.get('your-api-endpoint');
        // setData(data);
        const example1: CardItem = {
          id: 1,
          title: 'Example 1',
          content: 'Hello from Example 1',
          createdAt: '2023-10-01',
          description: 'This is the first example',
        };

        const example2: CardItem = {
          id: 2,
          title: 'Example 2',
          content: 'Hello from Example 2',
          createdAt: '2023-10-02',
          description: 'This is the second example',
        };

        const example3: CardItem = {
          id: 3,
          title: 'Example 3',
          content: 'Hello from Example 3',
          createdAt: '2023-10-03',
          description: 'This is the third example',
        };

        setData([example1, example2, example3]);
      } catch (err) {
        console.error('数据加载失败:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <DatePicker onChange={onChange} needConfirm />
      <div style={{ padding: 24 }}>
        {loading ? (
          <Skeleton active paragraph={{ rows: 4 }} />
        ) : (
          <Row gutter={[16, 16]}>
            {' '}
            {/* 水平间距16px，垂直间距16px */}
            {data.map((item: CardItem) => (
              <Col
                key={item.id} // 使用数据唯一标识
                xs={24} // 手机端全宽
                sm={12} // 平板端半宽
                md={12} // 桌面端半宽
                lg={12} // 大屏幕半宽
                xl={12} // 超大屏幕半宽
              >
                <Card
                  title={item.title}
                  bordered={false}
                  hoverable
                  style={{ height: 200 }} // 统一高度示例
                >
                  <p>{item.description || 'No description available'}</p>
                  <p>创建时间：{item.createdAt || 'Unknown'}</p>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default HomePage;
