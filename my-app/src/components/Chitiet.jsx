import React from "react";

function Chitiet(drops) {
  return (
    <div className="grid grid-cols-5  border px-4 py-4 bg-white space-x-7 ">
      {drops.arrSanPham.map((item, index) => {
        return (
          <div className="">
            <div className="">
              <button className="border-2 hover:border-green-300 duration-7000 py-2 px-2 "
        
              onClick={()=>{
                drops.hienthi(item)
              }}>
                <img  src={item.url} alt="" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Chitiet;
