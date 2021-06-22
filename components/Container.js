import LineChart from "./LineChart";
import ItemDetails from "./ItemDetails"
import Example from "./Header";
import Footer from "./Footer";

export default function Container() {
  return (
    <>
      <Example/>
        <div className="grid grid-cols-3 gap-4">
            <ItemDetails />
            <div className="col-span-2">
              <LineChart/>
            </div>
        </div>
      <Footer/>
    </>
  )
}