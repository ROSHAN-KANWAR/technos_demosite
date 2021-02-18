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
    <><div className=" container">
    <h1 className=" text-center mt-3">Search Page By UnPlash.com</h1>
    <div className="searchbar text-center mt-4">
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