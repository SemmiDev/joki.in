import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/main';
import Home from './Home';
import Order from './order';
import './App.css';
import Navbar from './components/navbar';

function App(): JSX.Element {
    return (
        <MainLayout>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/order' element={<Order />} />
            </Routes>
        </MainLayout>
    );
}

export default App;
