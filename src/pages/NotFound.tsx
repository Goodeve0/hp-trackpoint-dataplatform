import React from 'react';
import { Result, Card, Button } from 'antd';

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <Card>
        <Result
          status="404"
          title="404"
          subTitle="对不起，您访问的页面不存在。"
          extra={<Button type="primary">返回首页</Button>}
        />
      </Card>
    </div>
  );
};
export default NotFoundPage;
