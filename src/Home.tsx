import Hero from './components/hero';
import InstalationService from './components/instalation-service';
import Navbar from './components/navbar';
import ProgrammingService from './components/programming-service';
import ShowCase from './components/show-case';
import Team from './components/team';
import Title from './components/title';
import LazyLoadComponent from './layout/lazy-load';

function Home(): JSX.Element {
    return (
        <>
            <Navbar active='home' />
            <Hero />
            <ProgrammingService />
            <InstalationService />
            <LazyLoadComponent>
                <Title title={'Show Case'} />
                <ShowCase />
            </LazyLoadComponent>
            <Title title={'Our Team'} />
            <Team />
        </>
    );
}

export default Home;
