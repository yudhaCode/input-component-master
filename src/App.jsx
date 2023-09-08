import InputsPage from './pages/InputsPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="md:container md:mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div>
          <Navbar />
        </div>

        <div className="flex-grow p-4 lg:pl-20 pt-14">
          <InputsPage />
        </div>
      </div>
    </div>
  );
}

export default App;
