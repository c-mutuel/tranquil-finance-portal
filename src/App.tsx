
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import AccountDetails from "./pages/AccountDetails";
import Transfers from "./pages/Transfers";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          {/* Private Routes */}
          <Route path="/" element={
            <>
              <Sidebar />
              <Dashboard />
            </>
          } />
          <Route path="/accounts" element={
            <>
              <Sidebar />
              <Accounts />
            </>
          } />
          <Route path="/accounts/:accountId" element={
            <>
              <Sidebar />
              <AccountDetails />
            </>
          } />
          <Route path="/transfers" element={
            <>
              <Sidebar />
              <Transfers />
            </>
          } />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
