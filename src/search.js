import React, {useState} from 'react'
import Sresult from "./Srresult";

const Search=()=>{
    const [img, setimg] = useState("")
    const handle=(e)=>{
        const data=e.target.value;
        console.log(data)
     setimg(data)

    };
    return (
    <><div className="ok">
    <h1 className="h1">Search Page By UnPlash.com</h1>
    <div className="searchbar">
     <input type="text"
      value={img} 
     onChange={handle} 
     placeholder="Search Anythings..." />
    </div>
   <Sresult name={img} />
   </div>
</>
);
}
export default Search