import { memo, FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from 'components/pages/Home';
import { Login } from 'components/pages/Login';
import { Page404 } from 'components/pages/Page404';
import { Setting } from 'components/pages/Setting';
import { UserManagement } from 'components/pages/UserManagement';
import { HeaderLayout } from 'components/templates/HeaderLayout';
import { LoginUserProvider } from 'provider/LoginUserProvider';

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home">
          <Route
            index
            element={
              <HeaderLayout>
                <Home />
              </HeaderLayout>
            }
          />
          <Route
            path="settings"
            element={
              <HeaderLayout>
                <Setting />
              </HeaderLayout>
            }
          />
          <Route
            path="user_management"
            element={
              <HeaderLayout>
                <UserManagement />
              </HeaderLayout>
            }
          />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
