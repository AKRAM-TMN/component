import logo from "./logo.svg";
import "./App.css";
import Photo from "./Component/ProfilePhoto";
import Name from "./Component/FullName";
import Add from "./Component/Address";
import Akram from "./img/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"

function App() {
  const categorieList = [
    {
      img: Akram,
      Name: "Akram Temani",
      Address: "Nabeul",
    },
  ];
  return (
    <div className="card">
      {categorieList.map((item, index) => {
        return (
          <div className="col-md-4" key={index}>
            {" "}
            <Photo item={item} />{" "}
          </div>
        );
      })}

      

      {categorieList.map((item, index) => {
        return (
          <div className="col-md-4" key={index}>
            {" "}
            <Name item={item} />{" "}
          </div>
        );
      })}

      {categorieList.map((item, index) => {
        return (
          <div className="col-md-4" key={index}>
            {" "}
            <Add item={item} />{" "}
          </div>
        );
      })}
    </div>
  );
}

export default App;
