import {createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom";
import Home from "../landing/Home";
import Login from "../account/features/auth/features/login/Login";
import MainLayout from "./features/layout/components/main_layout/MainLayout";
import ErrorPage from "./components/ErrorPage";
import AuthLayout from "./features/layout/components/main_layout/layouts/auth_layout/AuthLayout";
import Register from "../account/features/auth/features/register/Register";
import Activation from "../account/features/auth/features/activation/Activation";
import Account from "../account/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import AccountSettings from "../account/features/content/features/settings/AccountSettings";
import AccountCommissions from "../account/features/content/features/commissions/AccountCommissions";
import AccountAdmin from "../account/features/content/features/admin/AccountAdmin";
import AccountPersonal from "../account/features/content/features/personal/AccountPersonal";
import AddCommission from "../account/features/content/features/adding_commission/AddCommission";
import CommissionViewer from "../browsing/features/commissions/CommissionViewer";
import CommissionPage from "../browsing/features/commissions/features/commission-page/CommissionPage";
import CommissionOutlet from "../browsing/features/commissions/CommissionOutlet";
import OperatorOutlet from "../browsing/features/operators/OperatorOutlet";
import OperatorViewer from "../browsing/features/operators/OperatorViewer";
import OperatorApplications from "../account/features/content/features/applications/OperatorApplications";
import OperatorPage from "../browsing/features/operators/features/operator-page/OperatorPage";
import AccountImages from "../account/features/content/features/images/AccountImages";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>} errorElement={<ErrorPage/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth" element={<AuthLayout/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="activation" element={<Activation/>}/>
            </Route>
            <Route path="account"
                   element={
                       <ProtectedRoute accessRoles={['administrator', 'client', 'operator']}>
                           <Account/>
                       </ProtectedRoute>
                   }>
                <Route path={""} element={<AccountSettings/>}/>
                <Route path={"settings"} element={<AccountSettings/>}/>
                <Route path={"personal"} element={<AccountPersonal/>}/>
                <Route path={"commissions"} element={<AccountCommissions/>}/>
                <Route path={"administrator"}
                       element={
                           <ProtectedRoute accessRoles={['administrator']}>
                               <AccountAdmin/>
                           </ProtectedRoute>}/>

                <Route path={"add_commission"} element={
                    <ProtectedRoute accessRoles={['client']} redirectPath={"/account"}>
                        <AddCommission/>
                    </ProtectedRoute>
                }/>

                <Route path={"applications"} element={
                    <ProtectedRoute accessRoles={['operator']} redirectPath={"/account"}>
                        <OperatorApplications/>
                    </ProtectedRoute>
                }/>

                <Route path={"images"} element={
                    <ProtectedRoute accessRoles={['operator']} redirectPath={"/account"}>
                        <AccountImages/>
                    </ProtectedRoute>
                }/>
            </Route>
            <Route path="/commission-viewer" element={
                <ProtectedRoute accessRoles={['administrator', 'operator']}>
                    <CommissionOutlet/>
                </ProtectedRoute>
            }>
                <Route path={""} element={<CommissionViewer/>}/>
                <Route path={"commission/:id"} element={<CommissionPage/>}/>
            </Route>
            <Route path="/operator-viewer" element={
                <ProtectedRoute accessRoles={['administrator', 'client']}>
                    <OperatorOutlet/>
                </ProtectedRoute>
            }>
                <Route path={""} element={<OperatorViewer/>}/>
                <Route path={"operator/:id"} element={<OperatorPage/>}/>
            </Route>
        </Route>,
    ),
);

export default router;
