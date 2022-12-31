import Hero from './components/hero';
import Navbar from './components/navbar';
import Services from './components/services';
import ShowCase from './components/show-case';
import Team from './components/team';

function Home(): JSX.Element {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Team />
            <ShowCase />
        </>
    );
}

export default Home;
