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
          <div className="mb-[2px]">
            <p className="text-xs">
              Challenge by{" "}
              <span>
                <a
                  href="https://www.frontendmentor.io?ref=challenge"
                  className="text-emerald-700 underline"
                >
                  Frontend Mentor
                </a>
              </span>
              . Designed and coded by
              <span>
                {" "}
                <a
                  href="https://github.com/spicyBeefPho"
                  className="text-emerald-700 underline"
                >
                  CJ Lawson
                </a>
              </span>
              .
            </p>
          </div>
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
