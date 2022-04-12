import './App.css';
import Header from './Components/header/Header';
import Body from './Components/body/Body';
import Footer from './Components/footer/Footer';
import Container from './Components/container/Container';

function App() {
  return (
    <div className="App">
     <Container>
       <Header />
       <Body />
       <Footer />
     </Container> 
    </div>
  );
}

export default App;
