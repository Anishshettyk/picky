import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup, ForgotPassword, Pins } from "./pages";
import { Layout } from "./components";

function App() {
  return (
    <Routes>
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='pins' element={<Pins />} />
      </Route>
    </Routes>
  );
}

export default App;
