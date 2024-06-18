import React, { useContext, useEffect, useState } from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { FirebaseContext } from '../../Context/FirebaseContext';
import { firestore } from '../../Firbase/firebse';
import { collection, getDocs } from 'firebase/firestore';
import Details from "../Details/Details";



const Posts = () => {
  const {firebase} = useContext(FirebaseContext);
  const [items, setItems] = useState([]);
  const [detailsPop, setDetailsPop] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const handleProductClick =(item)=>{
    setSelectedProduct(item)
    setDetailsPop(true)
  }



  useEffect(()=>{
    const fetchPosts = async ()=>{
      try {
        const itemsCollection = collection(firestore, 'items');
        const snapshot = await getDocs(itemsCollection);
          const allPosts = snapshot.docs.map((item)=>({
              ...item.data(),
              id:item.id
          
          }))
          setItems(allPosts);
          console.log('allposts',allPosts);
  
        
      } catch (error) {
        console.log('Error fetching posts:',error);
      }
    };

    fetchPosts();

  },[firebase])



  return (
    <div>
      <div className="grid grid-cols-4 px-4 gap-4 items-center py-4">
        {items.map((item) => (
            <div key={item.id} onClick={()=> handleProductClick(item)}>
              <div className="border border-spacing-1 p-2">
                <div className="flex justify-center">
                  <img
                    className="w-60 h-48"
                    src={item.url}
                    alt="productsImages"
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <FaRupeeSign />
                    <h1 className="font-bold">{item.price}</h1>
                  </div>
                  <h1 className="truncate text-gray-500">{item.name}</h1>
                  <h1 className="text-gray-500">{item.category}</h1>
                  {/* <h1 className="text-gray-500">{item.createdAt}</h1> */}
                </div>
              </div>
            </div>
        ))}
      </div>
      {detailsPop && <Details setDetailsPop={setDetailsPop} product={selectedProduct} />}
    </div>
  );
}

export default Posts