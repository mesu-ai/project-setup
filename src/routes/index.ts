// src/routes/index.ts
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { createBrowserRouter } from 'react-router';
import { routers } from './routes.config';
import Layout from '@/layouts/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    ErrorBoundary: ErrorBoundary,
    children: routers.map((route) => ({
      path: route.path,
      async lazy() {
        const Component = route.element;
        return { Component };
      },
      children: route.children?.map((childRoute) => ({
        path: childRoute.path,
        async lazy() {
          const Component = childRoute.element;
          return { Component };
        },
      })),
    })),
  },
]);
