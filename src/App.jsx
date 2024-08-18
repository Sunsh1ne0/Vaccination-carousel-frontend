import { Route, Routes } from 'react-router-dom';
import { Main } from './layout/Main';
import { NotFound } from './components/NotFound/NotFound';
import { Home } from './components/Home/Home';
import { SettingsPage } from './components/SettingsPage/SettingsPage';
import { ReportPage } from './components/ReportPage/ReportPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;