import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Appbar from "./components/Appbar/Appbar";
import BasicTextField from "./components/BasicTextField/BasicTextField";
import CardItem from "./components/CardItem/CardItem";
import ImageListContainer from "./components/ImageListContainer/ImageListContainer";
import DataTable from "./components/Table/Table";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter> 
        <Appbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cards" element={<CardItem/>} />
        </Routes >
      </BrowserRouter>
    </>
  );
}
export default App;
