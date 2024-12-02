import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useState, useEffect } from "react";

export const Carousel = () => {
  const cards = [
    {
      name: "Leslie Alexander",
      state: "Florida,US",
      src: "/Leslie.jpg",
      topic:'Effortless Selling Process with Excellent Results',
      review:[
        "Selling a home is often stressful,but Mapel’s team made it feel like a breeze.They provided clear", 
        "guidance on how to prepare our home for the market,used innovative marketing strategies, and ",
        "kept us updated throughout.Their deep knowledge of the local market meant that we were able", 
         "to sell quickly and at a price we very happy with. They took care of every detail, and we never felt",
          "pressured or uncertain.",
      ],
      icon:'/niet.svg',
    },
    {
      name: "Brooklyn Simmons",
      state: "Texas,US",
      src: "/brooly.jpg",
      topic:'A True Partner in Finding the Perfect Home!',
      review:
        "Working with Mapel was a game-changer for us. We were first-time buyers and felt overwhelmed by the entire process. The agents at Mapel took the time to understand what we were looking for and guided us through every step of the way—from initial property visits to negotiating the best deal. Their dedication and attention to detail truly set them apart. We couldn’t have asked for a better team to help us find our dream home.",
      icon:'/lightbox.svg',
    },
    {
      name: "Darlene Robertson",
      state: "Dallas,US",
      src: "/Darlene.jpg",
      topic:'Our Dream Home Became a Reality!',
      review:
        "The team at Mapel helped us find a home that we had only ever imagined. We were very particular about the kind of property we wanted and had high expectations, but Mapel delivered beyond what we thought was possible. Their commitment to finding the right home for us was evident in every interaction. Even after we moved in, they stayed in touch to ensure everything was perfect. We’re incredibly grateful for their efforts and will always remember this positive experience.",
      icon:'/global.svg',
    },
   
    {
      name: "Savannah Nguyen",
      state: "Georgia,US",
      src: "/Savannah.jpg",
      topic:'Best Real Estate Experience We’ve Ever Had!',
      review:
        "We’ve worked with several real estate agencies in the past, but our experience with Mapel was on a different level. The service was professional, the communication was clear, and their expertise was invaluable. The team went above &amp; beyond to find properties that matched our very specific criteria. Not only did they help us close on an amazing home, but they also provided expert advice on making the most out of our investment.",
      icon:'/corp.svg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [reviews, setReviews] = useState(cards); // State to manage reviews and ratings

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === reviews.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRatingChange = (index, newRating) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].rating = newRating;
    setReviews(updatedReviews);
  };

  return (
    <div>
      <div className="overflow-hidden flex-col flex gap-5 relative">
        <div className={`flex flex-col gap-8 `}>
          <div
            className={`flex gap-5 md:gap-3 lg:gap-8 px-2 transition-transform duration-300 ease-in-out`}
            style={{
              transform: `translateX(-${
                currentIndex *
                (viewportWidth <= 480 ? 100 : viewportWidth <= 768 ? 70 : 49)
              }%)`,
              scrollSnapType: "x mandatory",
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="-bg--background border border-border shadow-customShadow flex-col flex gap-5 p-7  flex-shrink-0 w-[90%] lg:w-full lg:h-full smd:w-[400px] md:w-[350px] md:h-[350px] lg:p-16 smd:p-16 md:p-16"
                style={{
                  scrollSnapAlign: "center",
                }}
              >
                <div>
                <div className="flex flex-col gap-3 lg:flex-row border ">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="h-[100] border lg:w-1/3"
                  />
                  <div className="border border-gray-400 p-4 lg:p-10">
                    <p className="text-xl font-medium lg:text-2xl ">{card.topic}</p>
                  <p className="text-[15px] mt-4 text-gray-700 lg:text-xl lg:mt-5 ">{card.review}</p>
                  </div>
                </div>
                <div className="lg:flex space-x-1 lg:mt-4">
                <div className="hidden lg:block ">
                  <img 
                  src={card.icon}
                  alt={card.icon}
                  className=""
                  />
                </div>
                <div class="hidden lg:block h-16 border-l border-gray-400"></div>

                <div className="lg:mx-7">
                <p className="text-[18px]">{card.name}</p>
                <p className="text-[13px] opacity-50">{card.state}</p>
                </div>
                </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-1 mt-0">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "-bg-tabs" : "-bg-brown"
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-5 -text--white-100">
          {/* Previous Button */}
          {currentIndex > 0 && (
            <button
              className="-text-white -bg-black/20 w-[26px] h-[26px] rounded-full -bg--green-700 flex justify-center items-center absolute bottom-[150px]  z-10"
              onClick={goToPrevious}
            >
              <FaChevronLeft />
            </button>
          )}
          {/* Next Button */}
          {currentIndex < reviews.length - 1 && (
            <button
              className="-bg-black/20 -text-white w-[26px] h-[25px] rounded-full -bg--green-700 flex justify-center items-center z-10 absolute right-0 bottom-[150px]"
              onClick={goToNext}
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
