/**
 * Fort Myers Field Guide: routing keeps every public page one clear step from
 * home, with a consistent shell and a branded recovery path for bad URLs.
 */
import { Analytics } from "@vercel/analytics/react";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import Contact from "./pages/Contact";
import Checklist from "./pages/Checklist";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/contact" component={Contact} />
      <Route path="/affiliate-disclosure" component={AffiliateDisclosure} />
      <Route path="/checklist" component={Checklist} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
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
