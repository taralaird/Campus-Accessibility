import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import MainMenu from './components/MainMenu';
import CreateReport from './components/CreateReport';

const AppRouter = () => (
    <Router>
        <div>
            <Routes>
                <Route path='/' element={<MainMenu />} exact={true} />
                <Route path='/createReport' element={<CreateReport />} />
            </Routes>
        </div>
    </Router>
);

export default AppRouter;