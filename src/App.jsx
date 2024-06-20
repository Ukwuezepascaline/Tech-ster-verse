import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import FullScreen from "../FullScreen";
import EmailSent from "./components/EmailSent";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import UserLogin from "./components/UserLogin";
import PasswordReset from "./components/PasswordReset";
import VerifiedEmail from "./components/VerifiedEmail";
import CreateAccount from "./components/CreateAccount";
import WelcomeBack from "./components/WelcomeBack";
import VerifyEmail from "./components/VerifyEmail";
import VerifyAccount from "./components/VerifyAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FullScreen />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/email-sent" element={<EmailSent />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/verified-email" element={<VerifiedEmail />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/welcome-back" element={<WelcomeBack />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App