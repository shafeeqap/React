export default function MenuBar(props) {
  return (
    <div className="relative">
      <div className="flex px-16 fixed items-center top-[80px] py-3 gap-4 shadow-sm h-10 bg-white w-full">
        <h1 className="cursor-pointer" onClick={()=>props?.setMenu('Shirt')}>Shirt</h1>
        <h1 className="cursor-pointer" onClick={()=>props?.setMenu('Jacket')}>Jacket</h1>
        <h1 className="cursor-pointer" onClick={()=>props?.setMenu('Phone')}>Mobile Phones</h1>
        <h1 className="cursor-pointer" onClick={()=>props?.setMenu('House')}>Hosue</h1>
        <h1 className="cursor-pointer" onClick={()=>props?.setMenu('Scooter')}>Scooter</h1>
        <h1 className="cursor-pointer" onClick={()=>props?.setMenu('Bike')}>Bike</h1>
        <h1 className="cursor-pointer" onClick={()=>props?.setMenu('Appartment')}>Appartment</h1>
      </div>
    </div>
  );
}
