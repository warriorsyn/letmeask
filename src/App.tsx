import { BrowserRouter, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/auth';
import { Home } from './pages/home';
import { NewRoom } from './pages/NewRoom';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
