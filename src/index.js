import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//router
import { BrowserRouter } from "react-router-dom";

//material-ui
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { red, blueGrey } from "@material-ui/core/colors";

//redux
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
const store = configureStore();
const persistor = persistStore(store)

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary:blueGrey,
    custom: {
      primary: "#8EC957",
      secondary: "#21295C",
      color1: "#8E53FC",
      color2: "#E40066",
      color3: "#EAC435",
      color4: "#437F97",
      color5: "#03CEA4",
      color6: "#FF5964",
      color7: "#F3FBEE",
      colorText: "#ffffff",
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
