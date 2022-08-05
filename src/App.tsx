import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import usePersistedState from './hooks/usePersistedState';

import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme/light'
import { darkTheme } from './styles/theme/dark'

Modal.setAppElement('#root');

export function App() {
  const [theme, setTheme] = usePersistedState('theme',lightTheme)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme)
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


