import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../components/common/Layout"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
