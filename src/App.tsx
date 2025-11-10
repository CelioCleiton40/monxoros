import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import ConsumerRights from "@/pages/ConsumerRights";
import DiscoverMyWorkProducts from "@/pages/DiscoverMyWorkProducts";
import CCPARequest from "@/pages/CCPARequest";
import { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import CookieBanner from "@/components/CookieBanner";
import { useCookieConsent } from "@/hooks/useCookieConsent";

export default function App() {
  const { hasConsent, isLoading } = useCookieConsent();
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);

  useEffect(() => {
    if (!isLoading) {
      setCookieConsent(hasConsent);
    }
  }, [hasConsent, isLoading]);

  const handleConsentChange = (consent: boolean) => {
    setCookieConsent(consent);
  };
  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isProtected = target.tagName === "IMG" || target.tagName === "VIDEO" || !!target.closest("img, video");
      if (isProtected) {
        e.preventDefault();
      }
    };

    const onDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/consumer-rights" element={<ConsumerRights />} />
        <Route path="/discover-my-work-products" element={<DiscoverMyWorkProducts />} />
        <Route path="/ccpa-request" element={<CCPARequest />} />
        <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
      </Routes>
      
      {/* Only loads Speed Insights if user has consented */}
      {cookieConsent === true && <SpeedInsights />}
      
      {/* Cookie banner - only shows if there's no consent yet */}
      {cookieConsent === null && (
        <CookieBanner onConsentChange={handleConsentChange} />
      )}
    </Router>
  );
}
