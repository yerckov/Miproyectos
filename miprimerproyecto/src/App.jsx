import './App.css';
import Header from './Components/Header/Header.jsx';
import MainSection from './Components/MainSection/MainSection.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
    return (
        <div>
            <Header />
            <MainSection title="Bienvenido a Mi Página Web" />
            <Footer />
        </div>
    );
}

export default App;

