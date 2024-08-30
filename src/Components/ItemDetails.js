import Button from "./Button";

function ItemDetails({phone, onHandleItemList, onCloseId}) {

    function handleAdd() {
      const newItemMovie = {
        id: phone.id,
        name: phone.name,
        image: phone.image,
        year: phone.year,
        desc: phone.desc
      };
      onHandleItemList(newItemMovie);
      onCloseId();
    }
  
    return (
      <div className="itemDetails">
        <button className="btn-back" onClick={onCloseId}>&larr;</button>
       <img src={phone.image} alt={phone.id} />
       <h1>{phone.name}</h1>
       <p>{phone.desc}</p>
       <p>{`Price: ${phone.price}$`}</p>
        <Button onClick={handleAdd}>Add to Card</Button>
        {/* add to card */}
      </div>
      
    )
  
}

export default ItemDetails;