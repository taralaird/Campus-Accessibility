import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import MainMenu from './components/MainMenu';
import CreateReport from './components/CreateReport';
import AdminLogin from './components/AdminLogin';
import AboutUs from './components/AboutUs';
import Predictor from './components/Predictor';
import ViewMap from './components/ViewMap';
import ViewReports from './components/ViewReports';
import ViewTrends from './components/ViewTrends';
import Help from './components/Help';
import DeleteReports from './components/DeleteReports';

const AppRouter = () => (
    <Router>
        <div>
            <Routes>
                <Route path='/' element={<MainMenu />} exact={true} />
                <Route path='/createReport' element={<CreateReport />} />
                <Route path='/adminLogin' element={<AdminLogin />} />
                <Route path='/aboutUs' element={<AboutUs />} />
                <Route path='predictor' element={<Predictor />} />
                <Route path="/map" element={<ViewMap />} />
                <Route path='trends' element={<ViewTrends />} />
                <Route path='reports' element={<ViewReports />} />
                <Route path="/help" element={<Help />} />
                <Route path="/delete" element={<DeleteReports />} />
            </Routes>
        </div>
    </Router>
);

export default AppRouter;