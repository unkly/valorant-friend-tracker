import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './homePage'

export default function RootNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
