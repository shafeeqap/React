import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import Details from "../Details/Details";


export default function Home(props) {

  const [detailsPop, setDetailsPop] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick =(data)=>{
    setSelectedProduct(data)
    setDetailsPop(true)
  }


  return (
    <div>
      <div className="grid grid-cols-4 px-4 gap-4 items-center">
        {props?.products?.filter((data)=>data?.title?.includes(props?.search ? props?.search : props?.menu)).map((data) => {
          return (
            <div key={data.id} onClick={()=> handleProductClick(data)}>
              <div className="border border-spacing-1 p-2">
                <div className="flex justify-center">
                  <img
                    className="w-60 h-48"
                    src={data.image}
                    alt="productsImages"
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <FaRupeeSign />
                    <h1 className="font-bold"> {data.price}</h1>
                  </div>
                  <h1 className="truncate text-gray-500">{data.title}</h1>
                  <h1 className="text-gray-500">{data.category}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {detailsPop && <Details setDetailsPop={setDetailsPop} product={selectedProduct} />}
    </div>
  );
}
