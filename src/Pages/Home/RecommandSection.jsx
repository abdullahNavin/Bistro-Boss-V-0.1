import { useEffect, useState } from "react";
import Title from "../Share/Title";
import SharedMenu from "../Share/SharedMenu";
import usemenu from "../../Hook/usemenu";


const RecommandSection = ({menu}) => {
    
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-4 space-y-2">
                {
                    menu.map(item => <SharedMenu key={item._id} item={item}></SharedMenu>)
                }
            </div>
        </div>
    );
};

export default RecommandSection;