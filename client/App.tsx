import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";

const Index = lazy(() => import("./pages/Index"));
const SolarSubsidy = lazy(() => import("./pages/SolarSubsidy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ProjectsGallery = lazy(() => import("./pages/ProjectsGallery"));
const PMSuryaGhar = lazy(() => import("./pages/PMSuryaGhar"));
const OnGridSystem = lazy(() => import("./pages/OnGridSystem"));
const SolarCapacityGuide = lazy(() => import("./pages/SolarCapacityGuide"));
const InstallationProcess = lazy(() => import("./pages/InstallationProcess"));
const SolarLoan = lazy(() => import("./pages/SolarLoan"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#FAFDFA]"><div className="w-8 h-8 rounded-full border-4 border-[#3A906D] border-t-transparent animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/projects" element={<ProjectsGallery />} />
            <Route path="/solar-subsidy" element={<SolarSubsidy />} />
            <Route path="/pm-surya-ghar-yojana" element={<PMSuryaGhar />} />
            <Route path="/on-grid-solar-system" element={<OnGridSystem />} />
            <Route path="/solar-capacity-guide" element={<SolarCapacityGuide />} />
            <Route path="/installation-process" element={<InstallationProcess />} />
            <Route path="/solar-loan" element={<SolarLoan />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
