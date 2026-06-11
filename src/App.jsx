
import { useState, useEffect } from "react";
import styled from 'styled-components';
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
`;

const MainContentStyled = styled.main`
  flex: 1;
  padding-top: 4.25rem;
`;

export default App;
