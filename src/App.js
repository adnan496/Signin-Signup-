

import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import SignIn from './components/SignIn';

function App() {
  return (
    <>
    <BrowserRouter>

    <Routes>

      < Route path="/" element ={<SignIn />} />
      < Route path="/SignUp" element ={<SignUp />} />

    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
