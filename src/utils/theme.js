const LIGHT_START_HOUR = 7;
const DARK_START_HOUR = 19;

export const THEME_MODE_KEY = 'portfolio-theme-mode';
export const THEME_MANUAL_KEY = 'portfolio-theme-manual';
/** @deprecated legacy single-key storage — migrated on read */
export const THEME_STORAGE_KEY = 'portfolio-theme';

export function getThemeForTimeOfDay(date = new Date()) {
  const hour = date.getHours();
  const isDaytime = hour >= LIGHT_START_HOUR && hour < DARK_START_HOUR;
  return isDaytime ? 'light-theme' : 'dark-theme';
}

export function msUntilNextThemeChange(date = new Date()) {
  const hour = date.getHours();
  const next = new Date(date);

  if (hour >= LIGHT_START_HOUR && hour < DARK_START_HOUR) {
    next.setHours(DARK_START_HOUR, 0, 0, 0);
  } else {
    if (hour >= DARK_START_HOUR) {
      next.setDate(next.getDate() + 1);
    }
    next.setHours(LIGHT_START_HOUR, 0, 0, 0);
  }

  return Math.max(next.getTime() - date.getTime(), 1000);
}

export function resolveTheme(mode, manualTheme, _tick = 0) {
  if (mode === 'manual' && (manualTheme === 'light-theme' || manualTheme === 'dark-theme')) {
    return manualTheme;
  }
  return getThemeForTimeOfDay();
}

function migrateLegacyThemeStorage() {
  const existingMode = localStorage.getItem(THEME_MODE_KEY);
  if (existingMode === 'auto' || existingMode === 'manual') {
    return;
  }

  const legacy = localStorage.getItem(THEME_STORAGE_KEY);

  // Legacy "dark-theme" default was written automatically for all visitors.
  // Treat unknown legacy values as auto so time-of-day works out of the box.
  if (legacy === 'light-theme' || legacy === 'dark-theme') {
    localStorage.setItem(THEME_MODE_KEY, 'auto');
    localStorage.removeItem(THEME_MANUAL_KEY);
  } else if (legacy === 'auto') {
    localStorage.setItem(THEME_MODE_KEY, 'auto');
  } else {
    localStorage.setItem(THEME_MODE_KEY, 'auto');
  }

  localStorage.removeItem(THEME_STORAGE_KEY);
}

export function getInitialThemeState() {
  migrateLegacyThemeStorage();

  const mode = localStorage.getItem(THEME_MODE_KEY);
  const manualTheme = localStorage.getItem(THEME_MANUAL_KEY);

  if (mode === 'manual' && (manualTheme === 'light-theme' || manualTheme === 'dark-theme')) {
    return { mode: 'manual', manualTheme };
  }

  return { mode: 'auto', manualTheme: getThemeForTimeOfDay() };
}

export function persistThemeState(mode, manualTheme) {
  localStorage.setItem(THEME_MODE_KEY, mode);
  if (mode === 'manual') {
    localStorage.setItem(THEME_MANUAL_KEY, manualTheme);
  } else {
    localStorage.removeItem(THEME_MANUAL_KEY);
  }
  localStorage.removeItem(THEME_STORAGE_KEY);
}

/** Used by index.html inline script before React loads */
export function getThemeForInitialPaint() {
  const mode = localStorage.getItem(THEME_MODE_KEY);
  const manualTheme = localStorage.getItem(THEME_MANUAL_KEY);
  const legacy = localStorage.getItem(THEME_STORAGE_KEY);

  if (mode === 'manual' && (manualTheme === 'light-theme' || manualTheme === 'dark-theme')) {
    return manualTheme;
  }

  if (mode === 'auto' || legacy === 'auto' || legacy === 'light-theme' || legacy === 'dark-theme') {
    return getThemeForTimeOfDay();
  }

  return getThemeForTimeOfDay();
}
