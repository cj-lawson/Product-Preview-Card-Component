import { useState } from "react";
import Button from "./Button";
import Reviews from "./Reviews";
import ColorPicker from "./ColorPicker";

const product = {
  name: "Il Bussetto",
  price: "$149.99",
  href: "#",
  sku: [
    {
      id: 1,
      imageSrcMobile: "/wallet-orange-mobile.png",
      imageSrcDesktop: "/wallet-orange-desktop.png",
      imageAlt: "Tan Leather Wallet",
      primary: true,
      name: "Tan Leather",
      bgColor: "bg-[#CF4C17]",
      selectedColor: "ring-[#CF4C17]",
    },
    {
      id: 2,
      imageSrcMobile: "/wallet-green-mobile.png",
      imageSrcDesktop: "/wallet-green-desktop.png",
      imageAlt: "Green Leather Wallet",
      primary: false,
      name: "Moss Green",
      bgColor: "bg-[#5D6D43]",
      selectedColor: "ring-[#5D6D43]",
    },
  ],
  reviews: {
    average: 4,
    totalCount: 28,
    featured: [
      {
        id: 1,
        title: "Can't say enough good things",
        rating: 4,
        content: `
              <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
              <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
            `,
        author: "Risako M",
        date: "May 16, 2021",
        datetime: "2021-01-06",
      },
      // More reviews...
    ],
  },
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductCard = ({}) => {
  const [selectedColor, setSelectedColor] = useState(product.sku[0]);

  return (
    <>
      <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-5xl lg:px-8 pb-8 ">
        <div className="flex flex-col lg:flex-row bg-[#f7f7f7] rounded-lg overflow-hidden ">
          {/* Product Image */}
          <div className="bg-[#EFE9D9] flex items-center basis-1/2 p-2">
            <img className="w-full" src={selectedColor.imageSrcMobile} alt="" />
          </div>

          {/* Product Details */}
          <div className="mt-6 pl-8 pr-8 pb-8 basis-1/2">
            <h1 className="text-[#1a1a1a] mb-2 font-fraunces font-normal text-4xl leading-none">
              {product.name}
            </h1>
            <p className="text-[#a7a597] mb-2 text-sm">{selectedColor.name}</p>
            <p className="text-[#1a1a1a] mb-2 text-sm leading-6">
              {product.price}
            </p>
            {/* Reviews/Rating */}
            <div className="mb-2">
              <Reviews reviews={product.reviews} />
            </div>
            <hr className="h-px my-4 bg-[#ddd] border-0 dark:bg-[#ddd]"></hr>
            {/* Color Picker */}
            <div className="mb-7">
              <ColorPicker
                colors={product.sku}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
            </div>
            {/* Add to Cart Button */}
            <div className="grid place-items-center mb-10">
              <Button price={product.price} />
              <span className="text-sm text-gray-600 mt-2">
                Free US Shipping $120+
              </span>
            </div>
            <p className="text-[#1a1a1a] pb-6 text-sm leading-6">
              {" "}
              Slim, classic Italian made wallet made to go the distance.
              Features the ability to hold 3 cards in a compact, vegetable
              tanned case. Il Bussetto's rich history of impeccably handcrafted
              leather goods culminates in an incredible assortment of functional
              wallets and cardholders.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
