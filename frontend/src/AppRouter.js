import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import MainMenu from './components/MainMenu';
import CreateReport from './components/CreateReport';
import AdminLogin from './components/AdminLogin';

const AppRouter = () => (
    <Router>
        <div>
            <Routes>
                <Route path='/' element={<MainMenu />} exact={true} />
                <Route path='/createReport' element={<CreateReport />} />
                <Route path='/adminLogin' element={<AdminLogin />} />
            </Routes>
        </div>
    </Router>
);

export default AppRouter;