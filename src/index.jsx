import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

// Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

// Root Reducer
import rootReducer from './redux/reducers/index.js'

// Router
import { HashRouter } from 'react-router-dom'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
const persistore = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <Provider store={store}>
      <React.StrictMode>
        <PersistGate persistor={persistore}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </Provider>
  </HashRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
