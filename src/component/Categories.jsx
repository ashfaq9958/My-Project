import React from "react";

const Categories = () => {
  return (
    <div className=" w-[85%] mx-auto  flex">
      <div className=" gap-2 p-2">
        <img
          src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="h-[450px] mb-2 object-cover"
        />
        <img
          src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="h-[200px] object-cover"
        />
      </div>

      <div className="h-[50%]">
        <img
          src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="h-[658px] mt-2 w-[90%]"
        />
      </div>

      <div className=" -ml-9 w-[565px]">
        <div className="flex gap-2 mt-2">
          <div>
            <img
              src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="h-[420px]"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="h-[420px]"
            />
          </div>
        </div>

        <div className=" border-2">
          <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-[100%] h-[237px] object-fil"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
