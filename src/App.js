import "./App.css";
import Address from "./profile/Address";
import FullName from "./profile/FullName";
import ProfilePhoto from "./profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <FullName />
      <div className="adressimge">
        <ProfilePhoto />
        <Address />
      </div>
    </div>
  );
}

export default App;
