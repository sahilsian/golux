import.meta.glob("/src/events/**/*.ts", { eager: true });
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "react-redux";
import {systemStore} from "./reducers/system/systemStore.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={systemStore}>
          <App />
      </Provider>
  </StrictMode>,
)
