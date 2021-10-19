import React from "react";
import Helmet from "../../../assets/images/helmet.png"

const getEquipment = (props = null) => {

    let equipment = [];
    let limit = 6;
    if(props){
        limit = (props.limit ? props.limit : limit);
    }

    for(var i = 0; i < limit; i++){
        equipment.push({
            id: i,
            title: "Equipment Title",
            price: "$50",
            favourited: false,
            image: Helmet,
            description: "Lorem ipsem dolor sit amet."
        });
    }
    return equipment;
};  

export default getEquipment;