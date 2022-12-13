import { Component } from "react";
import './Cardlist.css'
import Card from "../card/Card.jsx";

class CardList extends Component{
    render() {
        const { filteredMonsters } = this.props
        
       return(
        
        <div className="cardList">
            {filteredMonsters.map((monster) => {
                
                
                return(
                <Card monster={monster}/>
            )
            })}
        </div>

       ) 
    }

}

export default CardList;