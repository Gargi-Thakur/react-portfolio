
import { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import DemoPage from './Pages/DemoPage';
import ContactPage from './Pages/ContactPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('light-theme');
  const [checked, setChecked] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setChecked(true);
    } else {
      setTheme('light-theme');
      setChecked(false);
    }
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
        themeChecked={checked}
      />
      <MainContentStyled>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainContentStyled>
      <Footer />
    </AppStyled>
  );
}

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
    animation: ${keyframes`
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(-3%, 4%) scale(1.05); }
    `} 18s ease-in-out infinite;
  }

  .ambient-two{
    width: 36vw;
    height: 36vw;
    max-width: 440px;
    max-height: 440px;
    bottom: 10%;
    left: -8%;
    background: var(--mesh-2);
    animation: ${keyframes`
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(4%, -3%); }
    `} 22s ease-in-out infinite;
  }

  .ambient-three{
    width: 28vw;
    height: 28vw;
    max-width: 320px;
    max-height: 320px;
    top: 42%;
    left: 38%;
    background: var(--mesh-3);
    animation: ${keyframes`
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(-2%, 2%); }
    `} 26s ease-in-out infinite;
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
  padding-top: 6.5rem;
  position: relative;
  z-index: 1;
  animation: pageFadeIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export default App;
