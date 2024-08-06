import Navbar from "./components/Navbar";
import { Button, ButtonReset } from "./components/Button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const Tambah = () => setCount(count + 1);
  const Kurang = () => setCount(count - 1);
  const Reset = () => setCount(0);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h3 className="text-center">Simple Counting App 📱</h3>

            <h3 className="text-center mt-4">
              {count == 10 || count < 0 ? "Finish" : count}
            </h3>
            <div className="d-flex justify-content-center align-items-center mb-2">
              <Button operasi="+" handleClick={Tambah} checkCount={count} />
              <Button operasi="-" handleClick={Kurang} checkCount={count} />
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <ButtonReset handleReset={Reset} checkCount={count} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
