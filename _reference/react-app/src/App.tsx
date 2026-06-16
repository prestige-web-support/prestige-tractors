import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const Home = lazy(() => import("@/pages/Home"));
const EquipmentCatalogue = lazy(() => import("@/pages/EquipmentCatalogue"));
const CategoryPage = lazy(() => import("@/pages/CategoryPage"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const ServiceCentre = lazy(() => import("@/pages/ServiceCentre"));
const SpareParts = lazy(() => import("@/pages/SpareParts"));
const Finance = lazy(() => import("@/pages/Finance"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const News = lazy(() => import("@/pages/News"));
const FleetMaintenance = lazy(() => import("@/pages/FleetMaintenance"));
const Disclaimer = lazy(() => import("@/pages/Disclaimer"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function PageLoader() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="flex flex-col gap-[3px]">
          <span className="block h-[3px] w-9 animate-pulse rounded-full bg-brand-500" />
          <span className="block h-[3px] w-6 animate-pulse rounded-full bg-brand-500/70 [animation-delay:120ms]" />
          <span className="block h-[3px] w-4 animate-pulse rounded-full bg-brand-500/50 [animation-delay:240ms]" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-400">Loading</span>
      </div>
    </div>
  );
}

export function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/equipment" element={<EquipmentCatalogue />} />
          <Route path="/equipment/category/:slug" element={<CategoryPage />} />
          <Route path="/equipment/product/:slug" element={<ProductDetail />} />
          <Route path="/service" element={<ServiceCentre />} />
          <Route path="/parts" element={<SpareParts />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/fleet-maintenance" element={<FleetMaintenance />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
