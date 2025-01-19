import { RouterConfig } from '@/types/common.types';
import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Service = lazy(() => import('@/pages/Service'));
const Project = lazy(() => import('@/pages/Project'));
const Contact = lazy(() => import('@/pages/Contact'));
const ProjectDetails = lazy(
  () => import('@/pages/Project/components/ProjectDetails')
);

export const routers: RouterConfig[] = [
  {
    path: '/',
    element: Home,
    title: 'Home',
    showInNavbar: true,
  },
  {
    path: '/about',
    element: About,
    title: 'About',
    showInNavbar: true,
  },

  {
    path: '/service',
    element: Service,
    title: 'Service',
    showInNavbar: true,
  },
  {
    path: '/project',
    element: Project,
    title: 'Project',
    showInNavbar: true,
    children: [
      {
        path: ':slug/:id',
        element: ProjectDetails,
        title: 'Project Details',
        showInNavbar: false,
      },
    ],
  },
  {
    path: '/contact',
    element: Contact,
    title: 'Contact',
  },
];
