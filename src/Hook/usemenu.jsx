import { useEffect, useState } from "react";

const usemenu = () => {
    const [menu, setMenu]=useState([])
    const [loding,setLoding]=useState(true)
    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data=> {
            setMenu(data)
            setLoding(false)
        })
    },[])
    return {menu,loding}
};

export default usemenu;