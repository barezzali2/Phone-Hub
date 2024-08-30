import Item from "./Item.js"

function ItemList({phones, selectedId, onSelection}) {
    return (
      <div className="itemList">
      <ul>
        {phones.map((phone) => 
          <Item 
          phone={phone}
          key={phone.id}
          selectedId={selectedId}
          onSelection={onSelection}
          />
        )}
        
      </ul>
      
      </div>
    )
  
}

export default ItemList;