import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthProvider from '../context/AuthContext'
import BalanceProvider from '../context/BalanceContext'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import ProtectRoute from './ProtectRoute'

function AppRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <BalanceProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectRoute>
                  <Home />
                </ProtectRoute>
              }
            />

            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BalanceProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default AppRouter
