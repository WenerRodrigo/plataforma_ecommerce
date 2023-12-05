import './App.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { AppRoutes } from './routes';

function App() {
  return (
    <div>
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
