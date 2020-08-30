import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { normalize } from 'styled-normalize';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Register } from './pages/Register/Register';
import { theme } from './theme';
import { ProtectedRoute } from './atoms/ProtectedRoute/ProtectedRoute';
import { Login } from './pages/Login/Login';
import { Profile } from './pages/Profile/Profile';
import { Container } from './atoms/Container/Container';
import { Navbar } from './organisms/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { persistor, store } from './store/store';
import { ProfileEdit } from './pages/ProfileEdit/ProfileEdit';
import { Spinner } from './atoms/Spinner/Spinner';
import { FlashMessage } from './atoms/FlashMessage/FlashMessage';
import { Dashboard } from './pages/Dashboard/Dashboard';

export const GlobalStyle = createGlobalStyle`
 ${normalize}
 a {
  color: #000
 }
`;

export const App = () => {
  const [rehydrated, setRehydrated] = useState(false);

  useEffect(() => {
    persistStore(store, {}, () => {
      setRehydrated(true);
    });
  }, []);

  if (!rehydrated) {
    return <Spinner />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} />
        <GlobalStyle />
        <FlashMessage />
        <BrowserRouter>
          <div>
            <Navbar />
            <div
              style={{
                paddingBottom: '70px',
              }}
            >
              <Container>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/register" component={Register} />
                  <Route path="/login" component={Login} />

                  <ProtectedRoute path="/dashboard" exact component={Dashboard} />
                  <ProtectedRoute path="/profile" exact component={Profile} />
                  <ProtectedRoute path="/profile-edit" exact component={ProfileEdit} />
                </Switch>
              </Container>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};
