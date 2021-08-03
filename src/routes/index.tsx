import React from 'react';
import { router } from 'dva';
import dynamic from 'dva/dynamic';
import { Layout } from 'antd';

const { Sider, Content } = Layout;
const { Router, Route, Switch, Link } = router;
const menuGlobal = [
  {
    id: '1',
    pid: '0',
    name: '首页',
    icon: '',
    path: '/',
    models: () => [import('./Home/model')],
    component: () => import('./Home/Index'),
  },
  {
    id: '2',
    pid: '0',
    name: 'aaa',
    icon: '',
    path: '/aaa',
    models: () => [import('./AAA/model')],
    component: () => import('./AAA/Index'),
  },
];

const Index = ({ history, app }: any) => {
  return (
    <React.StrictMode>
      <Router history={history}>
        <Layout>
          <Sider className="site-side site-background">
            <div className="site-side-main">
              {menuGlobal.map(({ path, name }, index) => (
                <div key={index}>
                  <Link to={path}>{name}</Link>
                </div>
              ))}
            </div>
          </Sider>
          <Layout className="site-layout">
            <Content className="site-layout-main">
              <div className="layout-main">
                <Switch>
                  {menuGlobal.map(({ path, models, component }, index) => (
                    <Route
                      key={index}
                      path={path}
                      exact
                      component={dynamic({ app, models, component } as any) as any}
                    />
                  ))}
                </Switch>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </React.StrictMode>
  );
};

export default Index;
