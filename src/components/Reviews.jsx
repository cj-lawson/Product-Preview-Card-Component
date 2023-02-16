import { StarIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Reviews = ({ reviews }) => {
  return (
    <>
      <div>
        <h2 className="sr-only">Reviews</h2>
        <div className="flex items-center">
          <p className="text-sm text-gray-700">
            <span className="sr-only"> out of 5 stars</span>
          </p>
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  reviews.average > rating ? "text-[#1a1a1a]" : "text-gray-200",
                  "h-3 w-3 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
            ·
          </div>
          <div className=" flex">
            <a
              href="#"
              className="text-sm font-medium text-[#1a1a1a] underline"
            >
              {reviews.totalCount} reviews
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
