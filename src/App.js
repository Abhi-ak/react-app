import React from "react";
import { ThemeProvider } from "styled-components";
import './App.css'
import theme from "./config/theme";
import GlobalTheme from './config/theme/globalTheme'
import { Provider } from "react-redux";
import Routes from './Router'
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalTheme />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
    </Provider>
  );
};

export default App;
