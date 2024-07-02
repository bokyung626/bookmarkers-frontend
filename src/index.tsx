import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import GlobalStyle from "./assets/styles/global";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <React.StrictMode> */}
        <GlobalStyle />
        <App />
        {/* </React.StrictMode> */}
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
reportWebVitals();
