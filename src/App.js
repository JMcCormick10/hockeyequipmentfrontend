import React from "react";
import './App.css';
import AppRoutes from './routes/AppRoutes';
import Theme from 'utilities/styles/Theme';
import { ThemeProvider } from 'styled-components';
import store from "./store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
          <AppRoutes/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
