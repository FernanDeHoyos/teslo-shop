import { ShopLayout } from "./shop/layout/ShopLayout";
import { createBrowserRouter, Navigate } from "react-router";
import { HomePages } from "./shop/pages/home/HomePages";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { GenderPage } from "./shop/pages/gender/GenderPage";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";
import { ProductsAdminPages } from "./Admin/pages/products/ProductsAdminPages";
import { DashboardPage } from "./Admin/pages/dashboard/DashboardPage";
import { ProductAdminPage } from "./Admin/pages/product/ProductAdminPage";
import { lazy } from "react";


const AuthLayout = lazy(() => import("./auth/layout/AuthLayout"));
const AdminLayout = lazy(() => import("./Admin/Layout/AdminLayout"));


export const AppRouter = createBrowserRouter([

    // Shop ROUTES
    {
        path: '/',
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <HomePages />
            },
            {
                path: 'products/:slug',
                element: <ProductPage />
            },
            {
                path: 'gender/:gender',
                element: <GenderPage />
            }
        ]
    },
    // Auth ROUTES
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/auth/login" />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    },

    // Admin ROUTES
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: 'products',
                element: <ProductsAdminPages />
            },
            {
                path: 'product/:slug',
                element: <ProductAdminPage />
            }
        ]
    },
    // Not Found ROUTES
    {
        path: '*',
        element: <Navigate to="/" />
    }

])