import { useState } from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";
import Main from "./Main";
import Box from "./Box";
import ItemList from "./ItemList";
import CardList from "./CardList";
import ItemDetails from "./ItemDetails";



const added = [

  {
    id: 0,
    name: "Iphone 15 Promax",
    image: "https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/blt24173242c100c773/6501b50dbb60f72800481566/Sky_Mobile_PDP1_iPhone15Pro_Natural_Titanium-PreOrder.png",
    year: 2023,
    
    desc: "This is Iphone 15 Promax"
  },
  {
    id: 1,
    name: "Google Pixel 8 Pro",
    image: "https://www.ourfriday.co.uk/image/cache/catalog/Google/google-pixel-8-pro-obsidian-1-1-800x800.png",
    year: 2023,
    
    desc: "This is Google Pixel 8 Pro"
    
  }
  
]

const phones = [
  {
    id: 0,
    name: "Google Pixel 8 Pro",
    image: "https://www.ourfriday.co.uk/image/cache/catalog/Google/google-pixel-8-pro-obsidian-1-1-800x800.png",
    year: 2023,
    price: 999,
    desc: "This is Google Pixel 8 Pro"
    
  },
  {
    id: 1,
    name: "Iphone 15 Promax",
    image: "https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/blt24173242c100c773/6501b50dbb60f72800481566/Sky_Mobile_PDP1_iPhone15Pro_Natural_Titanium-PreOrder.png",
    year: 2023,
    price: 1200,
    desc: "This is Iphone 15 Promax"
  },
  {
    id: 2,
    name: "Galaxy S24 Ultra",
    image: "https://rentoza.co.za/cdn/shop/files/SamsungGalaxyS24256GBUltratitaniumgreyfrontandrear_4075475e-e2e2-44f4-8989-e214deeea834.png?v=1712924880",
    year: 2024,
    price: 1299,
    desc: "This is Samsung Galaxy S24 Ultra"
  },
  {
    id: 3,
    name: "Xiaomi 14 Ultra",
    image: "https://i05.appmifile.com/856_item_uk/21/02/2024/d0d81f33dec4af6db73cdf0cc6a02d3a!400x400!85.png",
    year: 2024,
    price: 1120,
    desc: "This is Xiaomi 14 Ultra"
  },
  {
    id: 4,
    name: "OnePlus 12",
    image: "https://timetouch.co.ke/wp-content/uploads/2024/05/oneplus-12-grn-timetouch.webp",
    year: 2023,
    price: 899,
    desc: "This is OnePlus 12"
  }
]

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [addedToCard, setAddedToCard] = useState([]);
  

  function handleSelection(phone) {
    setSelectedId((selectedId) => selectedId?.id === phone.id ? null : phone);
    console.log(phone.id)
  }

  function handleAddedItem(item) {
    setAddedToCard((items) => [...items, item]);
  }

  
  function handledDeleteAdded(id) {
    setAddedToCard((added) => added.filter((item) => item.id !== id));
  }

  function handleCloseId() {
    setSelectedId(null);
  }


  return (
    <>
    <NavBar>
      <Logo />
    </NavBar>

    <Main>
      <Box>
        <ItemList 
        phones={phones} 
        key={phones.id} 
        selectedId={selectedId}
        onSelection={handleSelection}
        />
      </Box>

      <Box>
        {selectedId ? 
        (<ItemDetails phone={selectedId} onHandleItemList={handleAddedItem} onCloseId={handleCloseId}/>)
        : <CardList addedToCard={addedToCard} onDeleteAdded={handledDeleteAdded}/>
      }
      </Box>
    </Main>
    </>
  )
}


// function NavBar({children}) {
//   return (
//     <div className="navbar">
//       {children}
//     </div>
//   )
// }

// function Logo() {
//   return (
//     <div className="logo">
//           <span role="img"><a href="/">🛍️</a></span>
//           <h1><a href="/my-app">myShopping</a></h1>
//           <h2>😍ئایفۆنەکە؟ یان مەلیکی ئەندرۆید؟</h2>
//         </div>
//   )
// }

// function Button({children, onClick}) {
//   return (
//     <button className='button' onClick={onClick}>{children}</button>
//   )
// }



// function Main({children}) {
//   return (
//     <div className="main">
//       {children}
//     </div>
//   )
// }

// function Box({children}) {
//   return (
//     <div className="box">
//       {children}
//     </div>
//   )
// }

// function ItemList({phones, selectedId, onSelection}) {
//   return (
//     <div className="itemList">
//     <ul>
//       {phones.map((phone) => 
//         <Item 
//         phone={phone}
//         key={phone.id}
//         selectedId={selectedId}
//         onSelection={onSelection}
//         />
//       )}
      
//     </ul>
    
//     </div>
//   )

// }

// function Item({phone, selectedId, onSelection}) {

//   const selectedPhone = selectedId?.id === phone.id;

//   return (
//     <div className="items">
//     <li >
//       <img src={phone.image} alt={phone.name} />
//       <h3>{phone.name}</h3>
//       <p>{phone.year}</p>
//       <Button onClick={() => onSelection(phone)}>
//     {
//       selectedPhone ? "Close" : "Select"
//     }
//       </Button>
      
//     </li>
//     </div>
//   )

// }

// function ItemDetails({phone, onHandleItemList, onCloseId}) {

//   function handleAdd() {
//     const newItemMovie = {
//       id: phone.id,
//       name: phone.name,
//       image: phone.image,
//       year: phone.year,
//       desc: phone.desc
//     };
//     onHandleItemList(newItemMovie);
//     onCloseId();
//   }

//   return (
//     <div className="itemDetails">
//       <button className="btn-back" onClick={onCloseId}>&larr;</button>
//      <img src={phone.image} alt={phone.id} />
//      <h1>{phone.name}</h1>
//      <p>{phone.desc}</p>
//      <p>{`Price: ${phone.price}$`}</p>
//       <Button onClick={handleAdd}>Add to Card</Button>
//       {/* add to card */}
//     </div>
    
//   )

// }


// function CardList({addedToCard, onDeleteAdded}) {
//   return (
//     <div className="cardList">
//       <ul>
//         <h2 className="card-header">Card List</h2>
//       {addedToCard.map((phone) => (
//                     // 
//                     <ItemAdded
//                     phone={phone}
//                     key={phone.id}
//                     onDeleteAdded={onDeleteAdded}
//                     />
//                   ))}
//       </ul>

//     </div>
//   )
// }


// function ItemAdded({phone, onDeleteAdded}) {
//   return (
//     <div className="itemsAdded">
//     <li key={phone.id}>
//       <img src={phone.image} alt={phone.name} />
//       <h3>{phone.name}</h3>
//       <p className="desc">{phone.desc}</p>
//       <p className="year">{phone.year}</p>
//       <Button onClick={() => onDeleteAdded(phone.id)}>
//         ❌
//       </Button>
      
//     </li>
//     </div>
    
//   )
// }