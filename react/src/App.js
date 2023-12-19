import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

function App({ store }) {
  // const [account, setAccount] = useState({ amount: 0 });
  // const [bonus, setBonus] = useState({ points: 0 });

  // const increment = () => {
  //   setAccount({ amount: account.amount + 1 });
  // };

  // const decrement = () => {
  //   setAccount({ amount: account.amount - 1 });
  // };

  // const incrementByAmount = (value) => {
  //   setAccount({ amount: account.amount + value });
  // };

  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount : {store.getState().account.amount}</h3>
      <h3>Total Bonus :{store.getState().bonus.points} </h3>

      <Account></Account>

      <Bonus></Bonus>
    </div>
  );
}

export default App;
