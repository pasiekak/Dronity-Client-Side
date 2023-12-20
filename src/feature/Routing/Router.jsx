import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import MainLayout from "../../pages/Layouts/MainLayout/MainLayout";
import ErrorPage from "../../pages/Error/ErrorPage";
import AuthLayout from "../../pages/Layouts/AuthLayout/AuthLayout";
import Register from "../../pages/Register/Register";
import Activation from "../../pages/Activation/Activation";
import Account from "../../pages/Account/Account";
import ProtectedRoute from "./ProtectedRoute";
import AccountSettings from "../../pages/Account/BottomContent/AccountSettings/AccountSettings";
import AccountCommissions from "../../pages/Account/BottomContent/AccountCommissions/AccountCommissions";
import AccountAdmin from "../../pages/Account/BottomContent/AccountAdmin/AccountAdmin";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <MainLayout/> } errorElement={<ErrorPage/>}>
        <Route path='/' element={ <Home /> } />
        <Route path='/auth' element={ <AuthLayout/> }>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='activation' element={<Activation/>}/>
        </Route>
        <Route path='account' element={<ProtectedRoute><Account/></ProtectedRoute>}>
            <Route path={''} element={<AccountSettings/>}/>
            <Route path={'settings'} element={<AccountSettings/>}/>
            <Route path={'commissions'} element={<AccountCommissions/>}/>
            <Route path={'administrator'} element={<AccountAdmin/>}/>
        </Route>
    </Route>
))

export default router;