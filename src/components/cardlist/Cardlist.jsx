import { Component } from "react";

class CardList extends Component{

    render(){
        console.log(this.props.filteredMonsters)
        

        const { filteredMonsters } = this.props
        
       return(
        
        <div>
            {filteredMonsters.map((monster)=>(
                <h1 key={monster.id}>{monster.name}</h1>
            ))}
        </div>

       ) 
    }

}

export default CardList;