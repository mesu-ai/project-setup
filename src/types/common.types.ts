import { LazyExoticComponent, ReactNode, ComponentType } from 'react';

export interface RouterConfig {
  path: string;
  element: LazyExoticComponent<ComponentType<unknown>> | (() => ReactNode);
  title: string;
  isPrivate?: boolean;
  children?: RouterConfig[];
  showInNavbar?: boolean;
  showInFooter?: boolean;
  parentPath?: string;
}
