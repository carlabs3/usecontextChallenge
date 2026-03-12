import "./App.css"; // Archivo de estilos CSS
import { ThemeProvider, useTheme } from "./themes/ThemeContext";
import RoutesApp from "./routes/RoutesApp";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <section className={`App ${theme}`}>
      <RoutesApp />
    </section>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
