import { RouterProvider } from 'react-router-dom';
import { router } from './router'; // 导入路由配置

export default function App() {
  return <RouterProvider router={router} />;
}
