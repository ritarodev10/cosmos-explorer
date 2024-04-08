import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/layouts/Layout";
import {
  Blocks,
  Overview,
  NotFound,
  Proposals,
  Transactions,
  Validators,
} from "./pages";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/overview" />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/proposals" element={<Proposals />} />
            <Route path="/validators" element={<Validators />} />
            <Route path="/blocks" element={<Blocks />} />
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </QueryClientProvider>
  );
}

export default App;
