import seller from "../assets/b1.jpg";
import funds from "../assets/b2.jpg";
import deliver from "../assets/b3.png";
import ecosystem from "../assets/yes.png";
import ecosystem2 from "../assets/pay.png";
const cardProps = [
  {
    decription: "Buyer and Seller agree to terms",

    image: seller,
  },
  {
    decription: "Buyer submits payment to FairTrade which are converted to fairtrade coins",

    image: funds,
  },
  {
    decription: "Seller delivers goods or service to buyer",

    image: deliver,
  },
  {
    decription: "Buyer approves goods or services",

    image: ecosystem,
  },
  {
    decription: "FairTrade releases payment to seller",

    image: ecosystem2,
  },
];
export const CardProperties = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-4 mb-[20px] lg:mb-[30px] items-center justify-center">
      {cardProps.map((item) => (
        <div
          key={item.decription}
          className="  rounded-md hover:translate-x-1 py-2"
        >
          <div>
            <img
              src={item.image}
              alt=""
              width={200}
              height={200}
              className="w-full h-[200px] px-2 object-contain "
            />
            <div className="">
              <p className="px-2  w-full text-center">{item.decription}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};