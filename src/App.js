import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/loginForm/loginForm.jsx';
import HomePage from './Components/Home/Home.jsx';
import Payment from './Components/Payment/payment.jsx';
import Register from './Components/loginForm/registerForm.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
