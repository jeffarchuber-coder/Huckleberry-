/**
 * Fort Myers Field Guide: routing keeps every public page one clear step from
 * home, with a consistent shell and a branded recovery path for bad URLs.
 */
import { Analytics } from "@vercel/analytics/react";
import { lazy, Suspense } from "react";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const AffiliateDisclosure = lazy(() => import("./pages/AffiliateDisclosure"));
const Contact = lazy(() => import("./pages/Contact"));
const Checklist = lazy(() => import("./pages/Checklist"));
const Reviews = lazy(() => import("./pages/Reviews"));
const MedicalAlerts = lazy(() => import("./pages/MedicalAlerts"));
const FallPrevention = lazy(() => import("./pages/FallPrevention"));
const ProductReview = lazy(() => import("./pages/ProductReview"));
const Guides = lazy(() => import("./pages/Guides"));
const GuideDetail = lazy(() => import("./pages/GuideDetail"));
const HowWeReview = lazy(() => import("./pages/HowWeReview"));
const About = lazy(() => import("./pages/About"));


function Router() {
  return (
    <Suspense fallback={<main id="main-content" className="route-loading" aria-live="polite">Loading the guide…</main>}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/contact" component={Contact} />
        <Route path="/affiliate-disclosure" component={AffiliateDisclosure} />
        <Route path="/checklist" component={Checklist} />
        <Route path="/reviews/medical-alerts/:slug" component={ProductReview} />
        <Route path="/reviews/medical-alerts" component={MedicalAlerts} />
        <Route path="/reviews/fall-prevention" component={FallPrevention} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/guides/:slug" component={GuideDetail} />
        <Route path="/guides" component={Guides} />
        <Route path="/how-we-review" component={HowWeReview} />
        <Route path="/about" component={About} />
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router />
      <Analytics />
    </ErrorBoundary>
  );
}

export default App;
