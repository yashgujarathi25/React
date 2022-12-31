import { Box, PenFill, Trash } from "react-bootstrap-icons";

const ProductCard=(props)=>{

const deleteprod=(pid)=>{
    props.removeprod(pid);
}

const updateprod=(ob)=>{
    props.editprod(ob);
}
return(

    <div className="container">
        <div className="row">
            <div className="col-md-1">
                <Box></Box>
            </div>
            <div className="col-md-7">
                <span>{props.productarr.pid}</span>&nbsp;&nbsp;
                <span>{props.productarr.pname}</span>&nbsp;&nbsp;
                <span>{props.productarr.price}</span>&nbsp;&nbsp;
                <span>{props.productarr.qty}</span>&nbsp;&nbsp;
            </div>
            <div className="col-md-2" onClick={()=>{updateprod(props.productarr)}}>
                <PenFill></PenFill>
            </div>
            <div className="col-md-2" onClick={()=>{deleteprod(props.productarr.pid)}}>
                <Trash></Trash>
            </div>
        </div>

    </div>
);
}

export default ProductCard;