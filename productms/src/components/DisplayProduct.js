import { useState } from "react";
import ProductCard from "./ProductCard";
import EditProduct from './EditProduct'

const DisplayProduct=(props)=>{
let [displayFlag, setflag]=useState(false);
let [prodob,setprodob]=useState({pid:"",pname:"",price:"",qty:""});
    const updateProd=(ob)=>{
        setflag(true);
        setprodob({...ob});
    }
    const deletedata=(id)=>{
        props.removeP(id);
    }

    const modifydata=(ob)=>{
        props.EditProduct(ob);
        setflag(false);
    }

    const renderList=()=>{
        return props.product.map((prod)=>{
            return <ProductCard key={prod.pid} productarr={prod} removeprod={deletedata} editprod={updateProd}></ProductCard>
        });
    };

    return(
       
        <div>
            <br/>
        <h3>Product Details</h3>
        <br/>
        <br/>
        
        <div id="mydiv2">
        {renderList()}
        </div>
        {displayFlag?(<div><EditProduct product={prodob} modifyProd={modifydata}></EditProduct></div>):""}

        </div>
    );
}

export default DisplayProduct;