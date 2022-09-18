import AgeCalculator from "./components/age-calculator";
import MyNav from "./components/my-nav";

function App() {
  return (
    <div>
      <div className='h-screen flex flex-col'>
        <MyNav />
        <AgeCalculator />
      </div>
    </div>
  );
}

export default App;
