import React, { useState } from "react";

function Todolist(){
    const[activity,setActivity] = useState("");
    const [listData,setListData] = useState([]);

    function addActivity(){
        // setListData([...listData,activity])
        // console.log(listData)

        setListData((listData)=>{
            const updatedList = [...listData,activity]
            console.log(updatedList)
            return updatedList
        })
    }

    function removeActivity(i){
        const updatedListData = listData.filter((elem,id)=>{
            return i!=id;
        })

        setListData(updatedListData);
    }
    return(
        <>
        <div className="container">
            <div className="header">TO DO LIST</div>
            <input type="text" placeholder = "Add text" value={activity} onChange={(e)=>setActivity(e.target.value)}/>
            <button onClick={addActivity} className = "btn_add">Add</button>
            <p className="list_heading">Here is your List :{")"}</p>
             {listData!=[] && listData.map((data,i)=>{
                return(
                    <>
                    <p key={i}>
                        <div className="listData">{data}</div>
                        <div className="div_remove">
                        <button className="btn_remove" onClick={()=>removeActivity(i)}>Remove</button>
                        </div>
                    </p>
                    </>
                )
             })}
        </div>
        </>
    );
}

export default Todolist;