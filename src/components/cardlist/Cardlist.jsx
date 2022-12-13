import './Cardlist.css'
import Card from "../card/Card.jsx";

const CardList = ({filteredMonsters}) => {

    return(

    <div className="cardList" >
        
        {filteredMonsters.map((monster) => {
        return(
        <Card monster={monster}/>
            )
        })}
        
    </div>

    ) 
}
export default CardList;