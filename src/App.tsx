import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Hero from './components/hero';
import InstalationService from './components/instalation-service';
import Navbar from './components/navbar';
import ProgrammingService from './components/programming-service';
import ShowCase from './components/show-case';
import Team from './components/team';
import Title from './components/title';
import ContentLayout from './layout/content';
import MainLayout from './layout/main';
import Home from './Home';
import Order from './order';
import './App.css';

function App(): JSX.Element {
    return (
        <MainLayout>
            <ContentLayout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/order' element={<Order />} />
                </Routes>

                <Footer />
            </ContentLayout>
        </MainLayout>
    );
}

export default App;
