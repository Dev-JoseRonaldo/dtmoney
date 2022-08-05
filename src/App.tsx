import React, { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/theme/light'
import dark from './styles/theme/dark'

Modal.setAppElement('#root');

export function App() {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <TransactionsProvider>
        <Header toggleTheme = {toggleTheme} />
        <Dashboard />

        <GlobalStyle />
      </TransactionsProvider>
    </ThemeProvider>
  );
}


