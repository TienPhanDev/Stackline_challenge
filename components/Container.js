import LineChart from "./LineChart";
import ItemDetails from "./ItemDetails"
import Example from "./Header";
import Footer from "./Footer";

export default function Container() {
  return (
    <>
      <Example/>
        <div className="grid grid-cols-4 gap-4 mt-10">
            <ItemDetails/>
            <div className="col-span-3">
            <LineChart/>
            </div>
        </div>
      <Footer/>
    </>
  )
}