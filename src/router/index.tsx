import App from "@/App.js"
import HomePage from "@/pages/MainPages/HomePage"
import MainPage from "@/pages/MainPages/MainPage"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="" element={<MainPage />}>
      <Route index element={<Navigate to ="home" />} />
      <Route path="home" element={<HomePage />} />
    </Route>
  </Route>
))

export default router