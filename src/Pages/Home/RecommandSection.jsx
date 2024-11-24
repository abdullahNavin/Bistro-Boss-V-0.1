import { useEffect, useState } from "react";
import Title from "../Share/Title";
import SharedMenu from "../Share/SharedMenu";


const RecommandSection = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(item=> item.category === 'popular')
                setMenu(popularMenu)
            })
    }, [])
    return (
        <div className="container mx-auto">
            <Title subHeading={'Check it out'} heading={'from our menu'}></Title>
            <div className="grid grid-cols-2 gap-4 space-y-2">
                {
                    menu.map(item => <SharedMenu key={item._id} item={item}></SharedMenu>)
                }
            </div>
        </div>
    );
};

export default RecommandSection;