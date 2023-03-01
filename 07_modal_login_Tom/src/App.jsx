import React from 'react'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Company } from './pages/Company'
import { Contact } from './pages/Contact'
import { Shopping } from './pages/Shopping'
import { Purchase } from './pages/Purchase'
import { Admin } from './pages/Admin'
import { SalesByProduct } from './pages/SalesByProduct'
import { SalesByUser } from './pages/SalesByUser'
import { Profile } from './pages/Profile'
import { AuthRole } from './components/AuthRole'

const role = {
    home: '',
    shopping: '',
    company: 'admin editor public',
    contact: 'admin public',
    admin: 'admin editor',
    purchase: 'admin editor public',
    sales_by_product: 'admin editor',
    sales_by_user: 'admin editor',
    profile: 'admin user',
}

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <AuthRole role={role.home}>
                                <Home />
                            </AuthRole>
                        }
                    />
                    <Route
                        path="/shopping"
                        element={
                            <AuthRole role={role.shopping}>
                                <Shopping />
                            </AuthRole>
                        }
                    />
                    <Route
                        path="/purchase/:productId"
                        element={
                            <AuthRole role={role.purchase}>
                                <Purchase />
                            </AuthRole>
                        }
                    />
                    <Route
                        path="/company"
                        element={
                            <AuthRole role={role.company}>
                                <Company />
                            </AuthRole>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <AuthRole role={role.contact}>
                                <Contact />
                            </AuthRole>
                        }
                    />
                    <Route
                        path="/admin"
                        element={
                            <AuthRole role="admin editor">
                                <Admin />
                            </AuthRole>
                        }
                    />
                    <Route
                        path="/sales_by_product/:productId"
                        element={
                            <AuthRole role={role.sales_by_product}>
                                <SalesByProduct />
                            </AuthRole>
                        }
                    />
                    <Route
                        path="/sales_by_user/:email"
                        element={
                            <AuthRole role={role.sales_by_user}>
                                <SalesByUser />
                            </AuthRole>
                        }
                    />
                    <Route path="/profile/" element={<Profile />} />
                </Routes>
            </div>
        </>
    )
}

export default App
