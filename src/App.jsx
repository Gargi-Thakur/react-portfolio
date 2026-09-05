
import { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import DemoPage from './Pages/DemoPage';
import ContactPage from './Pages/ContactPage';
import PrivacyPage from './Pages/PrivacyPage';
import AiAutomationVancouverPage from './Pages/AiAutomationVancouverPage';
import AssessmentPage from './Pages/AssessmentPage';
import GuidesIndexPage from './Pages/GuidesIndexPage';
import GuidePage from './Pages/GuidePage';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  getInitialThemeState,
  getThemeForTimeOfDay,
  msUntilNextThemeChange,
  persistThemeState,
  resolveTheme,
} from './utils/theme';

function App() {
  const [themeState, setThemeState] = useState(getInitialThemeState);
  const [scheduleTick, setScheduleTick] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  const theme = resolveTheme(themeState.mode, themeState.manualTheme, scheduleTick);
  const isDark = theme === 'dark-theme';
  const isAuto = themeState.mode === 'auto';

  useEffect(() => {
    persistThemeState(themeState.mode, themeState.manualTheme);
  }, [themeState]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light-theme', 'dark-theme');
    root.classList.add(theme, 'is-hydrated');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', isDark ? '#09090b' : '#f7f6f3');
  }, [theme, isDark]);

  // The prerendered HTML inlines a snapshot of the styled-components output so
  // the page paints styled before JS loads. Once mounted, styled-components has
  // re-inserted its own rules and the snapshot is a stale duplicate.
  useEffect(() => {
    const snapshotStyles = document.getElementById('prerender-critical-css');
    if (!snapshotStyles) {
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => snapshotStyles.remove());
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!isAuto) {
      return undefined;
    }

    let timeoutId;

    const scheduleNextSwitch = () => {
      timeoutId = window.setTimeout(() => {
        setScheduleTick((tick) => tick + 1);
        scheduleNextSwitch();
      }, msUntilNextThemeChange());
    };

    scheduleNextSwitch();

    return () => window.clearTimeout(timeoutId);
  }, [isAuto]);

  const themeToggler = () => {
    const currentTheme = isAuto ? getThemeForTimeOfDay() : themeState.manualTheme;
    const nextTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';

    setThemeState({
      mode: 'manual',
      manualTheme: nextTheme,
    });
  };

  return (
    <AppStyled>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />
      <Header
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        theme={theme}
        onThemeToggle={themeToggler}
        themePreference={isAuto ? 'auto' : themeState.manualTheme}
      />
      <MainContentStyled>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/implementation" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ai-automation-vancouver" element={<AiAutomationVancouverPage />} />
          <Route path="/proof" element={<DemoPage />} />
          <Route path="/guides" element={<GuidesIndexPage />} />
          <Route path="/guides/ai-setup-for-a-trades-business" element={<Navigate to="/guides/ai-setup-for-a-small-business" replace />} />
          <Route path="/guides/voice-memo-to-job-report" element={<Navigate to="/guides/monday-briefing-from-a-messy-spreadsheet" replace />} />
          <Route path="/guides/write-a-job-post-that-filters" element={<Navigate to="/guides/do-you-need-ai-or-a-dashboard" replace />} />
          <Route path="/guides/:slug" element={<GuidePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          {/* legacy URLs */}
          <Route path="/services" element={<Navigate to="/implementation" replace />} />
          <Route path="/demo" element={<Navigate to="/proof" replace />} />
        </Routes>
      </MainContentStyled>
      <Footer />
    </AppStyled>
  );
}

const ambientDriftOne = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-3%, 4%) scale(1.05); }
`;

const ambientDriftTwo = keyframes`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(4%, -3%); }
`;

const ambientDriftThree = keyframes`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-2%, 2%); }
`;

const AppStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  isolation: isolate;

  .ambient{
    position: fixed;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    z-index: 0;
  }

  .ambient-one{
    width: 42vw;
    height: 42vw;
    max-width: 520px;
    max-height: 520px;
    top: -8%;
    right: -6%;
    background: var(--mesh-1);
    animation: ${ambientDriftOne} 18s ease-in-out infinite;
  }

  .ambient-two{
    width: 36vw;
    height: 36vw;
    max-width: 440px;
    max-height: 440px;
    bottom: 10%;
    left: -8%;
    background: var(--mesh-2);
    animation: ${ambientDriftTwo} 22s ease-in-out infinite;
  }

  .ambient-three{
    width: 28vw;
    height: 28vw;
    max-width: 320px;
    max-height: 320px;
    top: 42%;
    left: 38%;
    background: var(--mesh-3);
    animation: ${ambientDriftThree} 26s ease-in-out infinite;
  }

  .grid-overlay{
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: 0.35;
    background-image:
      linear-gradient(var(--border-color) 1px, transparent 1px),
      linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 70%);
  }

  @media (prefers-reduced-motion: reduce) {
    .ambient {
      animation: none;
    }
  }
`;

const MainContentStyled = styled.main`
  flex: 1;
  padding-top: 6.35rem;
  position: relative;
  z-index: 1;
`;

export default App;
