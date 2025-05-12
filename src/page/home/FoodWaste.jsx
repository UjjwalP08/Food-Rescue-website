import foodWastImg1 from "../../assets/1.jpg";
import foodWastImg2 from "../../assets/2.jpg";
const FoodWaste = () => {
  const foodWasteCategories = [
    "Fruit and Vegetable waste",
    "Beverage waste",
    "Fish, Meat & Poultry waste",
    "Sugar Industry waste",
    "Dairy waste",
    "Mineral waste",
    "Oil residue waste",
  ];

  return (
    <div className="bg-white py-10 px-5 flex flex-col gap-10 items-center">
      <p className="text-black text-4xl font-bold">What is Food Waste?</p>
      <div className="max-w-[70rem] mx-auto flex flex-col gap-6 items-center">
        <p className="text-center text-xl font-medium">
          Food waste is any type of food that is discarded or not eaten. It can
          include uneaten food from meals, spoiled food, trimmings from food
          preparation, and food products that have been damaged and deemed unfit
          for human consumption.
        </p>
        <div className="flex flex-col gap-5 items-center">
          <p className="text-2xl font-bold text-center">Types of food waste:</p>
          <div>
            {foodWasteCategories.map((ele, i) => (
              <div key={ele}>
                <p className="font-medium text-xl text-center">
                  {i + 1}&#41; {ele}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <img src={foodWastImg1} alt="Food Waste" />
        </div>
        <div>
          <img src={foodWastImg2} alt="Food Waste" />
        </div>
      </div>
      <div className="max-w-[70rem] mx-auto flex flex-col gap-10 items-center">
        <p className="text-black text-4xl font-bold">
          What is Food Waste Management System??
        </p>
        <p className="text-center text-xl font-medium">
          Food waste management systems are designed to reduce the amount of
          food waste created by businesses and households. These systems
          typically involve practices such as composting, recycling, and
          anaerobic digestion. Additionally, food waste management systems often
          include education and awareness campaigns to help people understand
          how their food choices impact the environment. Such systems can also
          involve infrastructure changes, such as the implementation of
          collection systems that make it easier for businesses and households
          to separate and properly dispose of their food waste. Every day, food
          businesses throw out high-quality, delicious food. It could be pallets
          of fresh bell peppers that aren&apos;t the ideal shape. Or carrots
          that are a little crooked. Or milk that was over-ordered for a local
          school district. Point is, it&apos;s food that could feed people
          rather than ending up in a landfill. In India, the larger the
          marriage, the larger the party, and also the additional stupendous the
          waste. No doubt weddings and banquets are an enormous supply of food
          wastage, however, restaurants and hotels conjointly contribute to food
          wastage. Nearly 14% of the total food produced globally is lost
          between the harvest and retail stages. India&apos;s contribution to
          wasted food, at 68.8 million tonnes annually, is 7% of the global
          total, per the United Nations Environment Programme&apos;s Food Waste
          Index Report 2021.
        </p>
        <p className="text-center text-xl font-medium">
          Here, <span className="text-[#2bb722] font-bold">FoodRescue</span>{" "}
          comes into picture. We came up with an initiative to reduce the food
          wastage and hunger as much as possible with the goal of zero hunger
          and responsible consumption and production. We have our outlets in
          different parts of the country. We are in contact with some banquets.
          We collect the donated food and distribute it among the people who
          need it.
        </p>
      </div>
      <div>
        <div className="py-10">
          <iframe
            width="720"
            height="415"
            src="https://www.youtube-nocookie.com/embed/alljc5elqqw?si=bR8JWpFPl-XXHdSs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FoodWaste;
