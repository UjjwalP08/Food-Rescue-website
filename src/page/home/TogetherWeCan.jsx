import { Link } from "react-router-dom";

const TogetherWeCan = () => {
  const foodWasteBooks = [
    {
      id: 1,
      title: "Food Waste Management: Principles and Practices",
      author: "Ram K. Vashist, Neelam Dhingra",
    },
    {
      id: 2,
      title:
        "Achieving Zero Food Waste: Strategies and Solutions for Food Service and Retail Operations",
      author: "Andrew Shakman and Martin K. Law",
    },
  ];

  return (
    <>
      <div className="bg-[#fff] py-10 px-5 w-full max-w-[60rem] mx-auto">
        <p className="text-black text-4xl font-bold text-center">
          Together We Can!
        </p>
        <p className="text-center text-xl font-medium pt-10">
          We are trying our best to solve the problem of food waste and its
          management. But we need help from your side as well. Apart from
          donating food, you can contribute much more towards the society.&nbsp;
          <Link
            className="text-[#0000EE]"
            to={
              "https://economictimes.indiatimes.com/news/economy/indicators/estimated-931-mn-tonnes-of-food-wasted-globally-in-2019-indias-share-68-mn-un-report/articleshow/81345719.cms"
            }
            target="_blank"
          >
            Click here
          </Link>{" "}
          to view how much food was wasted globally in 2019.
        </p>
        <p className="text-center text-xl font-medium py-10">
          There are few books available on food waste and its management.
        </p>
        <div>
          {foodWasteBooks.map((ele, i) => (
            <div key={ele?.id}>
              <p className="font-medium text-xl text-center">
                {i + 1}&#41; {ele?.author}:&nbsp;{ele?.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TogetherWeCan;
