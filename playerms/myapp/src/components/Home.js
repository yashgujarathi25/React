import { useState } from 'react';
import { useNavigate } from 'react-router';
import PlayerService from './PlayerService';
const Home =()=>{
    let[sname,setsname]=useState({name:""});
    const handleNameChange=(e)=>{
        const name=e.target.name;
        setsname({...sname,[name]:e.target.value})
        console.log(sname.name)
    }
    
    const navigate = useNavigate();

    const displayData=()=>{
        PlayerService.display()
        .then((result)=>{
            console.log(result.data)
        })
        .catch(()=>{
            console.log("error")
        })
    }
    const searchData=()=>{
        console.log(sname.name)
        console.log(sname)
        PlayerService.search(sname)
        .then((result)=>{
            console.log(result.data)
            navigate('/search',{state : { s : result.data}})
        })
        .catch(()=>{
            console.log("error")
        })
       

    }

    return(
        <div>
            <div class="container">
                Name : <input type ="text" name="name" id="name"
                value={sname.name}
                onChange={handleNameChange}></input><br/><br/>
                <button type="button" name="btn" id="btn" onClick={searchData}>Search</button>&nbsp;&nbsp;
                <button type="button" name="btn1" id="btn1" onClick={displayData}>Display</button>&nbsp;&nbsp;
                <button type="reset" name="btn2" id="btn2" >Reset</button>&nbsp;&nbsp;
            </div>
        </div>
    );

}

export default Home;