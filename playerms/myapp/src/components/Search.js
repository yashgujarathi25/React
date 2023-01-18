import { useLocation } from "react-router";

const Search = () => {

    const location = useLocation();
    console.log(location.state);

    return(
    <div> 
        <table>
            <th>
                <th>
                    <td>ID :</td>
                    <td>Name :</td>
                    <td>Sports:</td>
                    <td>DOB :</td>
                </th>

            </th>
        </table>
    </div>
    );
}

export default Search;