import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import secure from "../assets/secure.png";
import fraud from "../assets/fraud-free.png";
import dispute from "../assets/dispute.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const devops = [
  {
    name: "100% Secured",
    image: secure,
    message:
      "We employ the latest encryption technologis to safeguard your financial information and senstive data",
  },
  {
    name: "Fraud Free",
    image: fraud,
    message:
      "FairTrade help prevent fraud by ensuring that both parties meet the agreed-upon terms before the funds are released",
  },
  {
    name: "Dispute Resolution",
    image: dispute,
    message:
      "FairTrade includes a dispute resolution mechanism. If there is a disagreement between the parties, the FairTrade agent can help mediate and find a fair resolution.",
  },
];
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export const Reasons = () => {
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {devops.map((devs) => (
          <div className="flex flex-col items-center shadow-sm w-full  tracking-[1px] zg leading-6 border-l border-r space-x-4">
            <p className="text-center w-[80%] h-[130px] mx-auto zg z-0">{devs.message}</p>
            <div className="flex justify-center">
              <Avatar className="w-[100px] h-[100px] my-3">
                <AvatarImage src={devs.image} alt="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="tracking-[2px] text-center">{devs.name}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};
