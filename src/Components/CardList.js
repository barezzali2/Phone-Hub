import ItemAdded from "./ItemAdded.js"

function CardList({addedToCard, onDeleteAdded}) {
    return (
      <div className="cardList">
        <ul>
          <h2 className="card-header">Card List</h2>
        {addedToCard.map((phone) => (
                      // 
                      <ItemAdded
                      phone={phone}
                      key={phone.id}
                      onDeleteAdded={onDeleteAdded}
                      />
                    ))}
        </ul>
  
      </div>
    )
}

export default CardList;