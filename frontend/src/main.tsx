import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FHTWaysPage from "./pages/FHTWaysPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HowItWorksPage from "./pages/HowItWorksPage.tsx";
import ContactUsPage from "./pages/ContactUsPage.tsx";
import AdminPanel from "./pages/AdminPanel.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FHTWaysPage />} />
                    <Route path="/how-it-works" element={<HowItWorksPage />} />
                    <Route path="/contact-us" element={<ContactUsPage />} />
                    <Route path="/admin" element={<AdminPanel />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    </StrictMode>,
);
