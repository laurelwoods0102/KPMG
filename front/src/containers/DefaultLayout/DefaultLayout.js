import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';

const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed className="border-0 header-sizeup">
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>

        <div className="app-body">
          <AppSidebar className="sidebar-show sidebar-customstyle" fixed display="lg">
            <AppSidebarHeader className="sidebar-header-customstyle" />
            <AppSidebarForm className="sidebar-form-customstyle" />
            <Suspense>
            <AppSidebarNav navConfig={navigation} {...this.props} router={router} className="sidebar-nav-customstyle"/>
            </Suspense>
            <AppSidebarFooter />
          </AppSidebar>
          <main className="main">
          </main>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
