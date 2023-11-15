import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import MainMenu from './components/MainMenu';

const AppRouter = () => (
    <Router>
        <div>
            <Routes>
                <Route path='/' element={<MainMenu />} exact={true} />
            </Routes>
        </div>
    </Router>
);

export default AppRouter;