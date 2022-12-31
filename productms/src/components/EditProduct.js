import { useState } from "react";
const EditProduct=(props)=>{
    let [prodob,setprodob]=useState(props.product);

    const handleEvent=(event)=>{
        const {name,value}=event.target;
        setprodob({...prodob,[name]:value});
    }

    const updatedata=()=>{
        props.modifyProd(prodob);
        setprodob({pid:"",pname:"",price:"",qty:""});
    }


    return(
        <div>
            <br/>
            <h3>Update Product</h3>
            <br/>
            <form>
                <div className="form-group">
                    <label for="pid">Product Id : </label>
                    <input type="text" className="form-control" id="pid" 
                    value={prodob.pid}
                    onChange={handleEvent}
                    placeholder="Enter Product Id" name="pid" />
                </div>
                <div className="form-group">
                    <label for="pname">Product Name : </label>
                    <input type="text" className="form-control" id="pname"
                    value={prodob.pname} 
                    onChange={handleEvent}
                    placeholder="Enter Product Name" name="pname" />
                </div>
                <div className="form-group">
                    <label for="price">Price : </label>
                    <input type="text" className="form-control" id="price"
                    value={prodob.price} 
                    onChange={handleEvent}
                    placeholder="Enter Price" name="price" />
                </div>
                <div className="form-group">
                    <label for="qty">Quantity</label>
                    <input type="text" className="form-control" id="qty" 
                    value={prodob.qty}
                    onChange={handleEvent}
                    placeholder="Enter Product Name" name="qty" />
                </div>
                <button type="button" className="btn btn-primary" onClick={updatedata}>Update Product</button>
            </form>
        </div>
    );
}

export default EditProduct;