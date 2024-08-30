import Button from "./Button";

function Item({phone, selectedId, onSelection}) {

    const selectedPhone = selectedId?.id === phone.id;
  
    return (
      <div className="items">
      <li >
        <img src={phone.image} alt={phone.name} />
        <h3>{phone.name}</h3>
        <p>{phone.year}</p>
        <Button onClick={() => onSelection(phone)}>
      {
        selectedPhone ? "Close" : "Select"
      }
        </Button>
        
      </li>
      </div>
    )
  
}

export default Item;