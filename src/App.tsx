import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import {
  Blocks,
  Dashboard,
  NotFound,
  Proposals,
  Transactions,
  Validators,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/proposals" element={<Proposals />} />
          <Route path="/validators" element={<Validators />} />
          <Route path="/blocks" element={<Blocks />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
