import "./App.css";
// Components Folder
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="grid place-items-center bg-[#FFF] pr-4 pl-4 h-screen">
      <div>
        <ProductCard />
      </div>
      <footer className="pb-2">
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-xs text-center">
              Photos and copy from
              <span>
                {" "}
                <a
                  href="https://stagprovisions.com/products/credit-card-case-orange?refSrc=457905535&nosto=productpage-nosto-2"
                  className="text-emerald-700 underline"
                >
                  STAG
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
