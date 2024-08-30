import Button from "./Button"

function ItemAdded({phone, onDeleteAdded}) {
    return (
      <div className="itemsAdded">
      <li key={phone.id}>
        <img src={phone.image} alt={phone.name} />
        <h3>{phone.name}</h3>
        <p className="desc">{phone.desc}</p>
        <p className="year">{phone.year}</p>
        <Button onClick={() => onDeleteAdded(phone.id)}>
          ❌
        </Button>
        
      </li>
      </div>
      
    )
}

export default ItemAdded;