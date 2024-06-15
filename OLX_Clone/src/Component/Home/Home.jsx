import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Home(props) {
  return (
    <div>
      <div className="grid grid-cols-4 px-4 gap-4 items-center">
        {props?.products?.filter((data)=>data?.title?.includes(props?.search ? props?.search : props?.menu)).map((data) => {
          return (
            <Link to="/details" state={{data}}>
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
            </Link>
          );
        })}
      </div>
    </div>
  );
}
