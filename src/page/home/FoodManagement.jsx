function FoodManagement() {
  const foodWasteTips = [
    "Reduce food waste at home by buying only what you need, planning meals, and storing food properly.",
    "Compost food scraps to create nutrient-rich soil for plants.",
    "Donate extra food to food banks, shelters, and other organizations.",
    "Recycle food packaging and containers.",
    "Use leftovers creatively in new meals and recipes.",
    "Contact your local government to find out what food waste programs are available in your area.",
  ];
  const wasteSolutions = [
    {
      id: 1,
      label: "Recycle by Composting",
      description:
        "Food producers will solve 100% of their waste matter issues by merely organizing a good composting strategy. And doing therefore not solely eliminates waste, it saves you cash as a result of you don’t have to be compelled to 'outsource' your compost production.",
    },
    {
      id: 2,
      label: "Turn Wasted Food into Animal Feed",
      description:
        "Cultivating compost is a method to recycle food, however it also can be drained of the bellies of cows, sheep, pigs, and alternative ethereal (themselves destined to become food).",
    },
    {
      id: 3,
      label: "Use Waste Food to provide Products",
      description:
        "From biofuels to liquid fertilizer, there are several helpful merchandises that may be factory-made from bound styles of waste foods, and infrequently 'leftovers' of one company might be helpful in another business for the food scrap.",
    },
    {
      id: 4,
      label: "Source Reduction and Food Donation",
      description:
        "The easiest method to curtail waste matter is to easily turn out less whenever production is clearly resulting in waste. Once excess foodstuffs are still safe to eat, there will be hungry and poor people who realize it troublesome to afford decent food in today’s dear economy.",
    },
  ];

  return (
    <>
      <div className="bg-[#f7f6f7] py-10 px-5 w-full">
        <p className="text-black text-4xl font-bold text-center">
          How can we Manage Food Waste?
        </p>

        <div className="py-5 font-medium">
          <p className="text-2xl mb-5">
            Here are few steps which we can follow in order to minimize food
            wastage:
          </p>
          {foodWasteTips.map((ele, i) => (
            <div key={ele}>
              <p className=" text-2xl font-medium">
                {i + 1}&#41; {ele}
              </p>
            </div>
          ))}
        </div>
        <div>
          <p className="text-black text-3xl font-bold text-center">
            Addressing Food Waste: Sustainable Approaches for India
          </p>
          <div className="my-4">
            {wasteSolutions.map((ele) => (
              <div className="mb-5" key={ele.id}>
                <p className=" text-2xl font-medium">
                  <span className="text-[#2bb722]">
                    {ele.id}&#41;&nbsp;{ele.label}:
                  </span>
                  &nbsp;
                  {ele.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center py-10">
            <iframe
              width="720"
              height="415"
              src="https://www.youtube-nocookie.com/embed/KZf9_GdDff0?si=tkTARc6V0XmUJh3h"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodManagement;
