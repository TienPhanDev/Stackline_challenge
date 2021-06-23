import { useEffect, useState } from "react";
import axios from "axios";
import stackline_frontend_assessment_data_2021 from "../stackline_frontend_assessment_data_2021.json"

 export default function ItemsDetails() {
  const [data, setData] = useState(stackline_frontend_assessment_data_2021[0]);
  const [sales, setSales] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=example',
      );
 
      setSales(result.data);
    };
 
    fetchData();
  }, []);

  const returnStuff = () => {
    {data.tags.map((tag, index) => {
    return <p> x </p>
    })}
  }

   return (
    <div className="flex flex-col shadow-lg divide-y-2 divide-gray rounded bg-blueGray-700">
      <div>
        <div className="flex flex-col">
          <div className="mb-1 mt-4 p-3 mx-auto">
            <img src={data.image} width="100px"/>
          </div>
          <div className="p-2 mx-auto">
            {data.title}
          </div>
          <div className="mb-2 p-1 mx-auto text-center font-thin text-gray-300 text-xs">
            {data.subtitle}
          </div>
        </div>
      </div>
      <div className="my-4 p-1">
      {data.tags.map((value, index) => {
        return <div key={index} className="inline-flex text-black text-xs border border-gray-100 px-1 mx-0.5">{value}</div>
      })}
      </div>
      <div className="my-4 p-2 h-80">
      </div>
    </div>
   )
}