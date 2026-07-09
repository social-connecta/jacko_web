import { Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Route>
    </Routes>
  )
}
