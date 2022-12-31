import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/AddProduct';
import DisplayProduct from './components/DisplayProduct';

function App() {
  let [prodarr, setprodarr]=useState([
    {pid:"1",pname:"chips",price:"30",qty:"50"},
    {pid:"2",pname:"chair",price:"1500",qty:"100"},
    {pid:"3",pname:"table",price:"5000",qty:"75"}
  ])

  const insertData=(ob)=>{
    setprodarr([...prodarr,{...ob}])
  }

  const deleteProd=(id)=>{
    var newArr = prodarr.filter(ob=>ob.pid!=id);
    setprodarr(newArr);
  }

  const upProd=(ob)=>{
    let newarr = prodarr.map(prod=>prod.pid===ob.pid?{...ob}:{...prod});
    setprodarr(newarr)
  }

  return(
    <div>
      <Header></Header>
      <div className='container'>
        <div className='row'>
          <div className="col-sm-12 col-md-6">
            <AddProduct addProduct={insertData}></AddProduct>
          </div>
          <div className="col-sm-12 col-md-6">
            <DisplayProduct product={prodarr} removeP={deleteProd} EditProduct={upProd}></DisplayProduct>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
