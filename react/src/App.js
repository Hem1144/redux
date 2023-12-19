import "./App.css";
import { useSelector } from "react-redux";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

function App({ store }) {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
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
      <h3>Current Amount : {amount}</h3>
      <h3>Total Bonus :{points} </h3>

      <Account></Account>

      <Bonus></Bonus>
    </div>
  );
}

export default App;
