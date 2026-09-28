import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import CtaBar from "./components/CtaBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Goals from "./pages/Goals";
import Home from "./pages/Home";
import Volunteer from "./pages/Volunteer";
import { Page } from "./ui";

const Program = lazy(() => import("./pages/Program"));

function NotFound() {
  return (
    <Page title="Page not found" lede="The page you were looking for is not here.">
      <p className="text-muted">
        It may have moved, or the link may have been written by hand.{" "}
        <Link to="/">Go back to the home page</Link>.
      </p>
    </Page>
  );
}

function Shell() {
  const location = useLocation();
  const [shown, setShown] = useState(location);
  const [leaving, setLeaving] = useState(false);
  const home = shown.pathname === "/";

  useEffect(() => {
    if (location.pathname === shown.pathname) return;

    setLeaving(true);
    const timer = setTimeout(() => {
      setShown(location);
      setLeaving(false);
    }, 140);

    return () => clearTimeout(timer);
  }, [location, shown.pathname]);

  return (
    <div className={`flex min-h-screen flex-col bg-paper ${home ? "night" : ""}`}>
      <Navbar />

      <main
        key={shown.pathname}
        className={`page-in page-swap flex flex-1 flex-col ${leaving ? "opacity-0" : ""}`}
      >
        <Routes location={shown}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/goals" element={<Goals />} />
          <Route
            path="/program"
            element={
              <Suspense fallback={<p className="px-6 py-24 text-muted">Loading…</p>}>
                <Program />
              </Suspense>
            }
          />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {shown.pathname === "/volunteer" && <CtaBar />}

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
