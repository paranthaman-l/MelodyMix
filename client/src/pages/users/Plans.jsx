import React from "react";
import { FiDivide } from "react-icons/fi";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { TiTickOutline } from "react-icons/ti";
// import Button from "@mui/material/Button";
const Plans = () => {
    const plans = [
        {
            "id":"2001",
            "planName":"Basic",
            "planName2":"Individual",
            "price":119,
            "upToLogin":1,
            "offers":["Ad-free music listening","Download 10k songs","128kbps audio Quality"]
        },
        {
            "id":"2002",
            "planName":"Advanced",
            "planName2":"Duo",
            "price":169,
            "upToLogin":2,
            "offers":["For couples who live together","Ad-free music listening","Download 10k songs","256kbps audio Quality"]
        },
        {
            "id":"2003",
            "planName":"Premium",
            "planName2":"Family",
            "price":219,
            "upToLogin":5,
            "offers":["For family who live together","Block explicit music","Dolby Audio Support","Ad-free music listening","Download 100k songs","512kbps audio Quality"]
        }
    ];
  return (
    <>
      <div className="flex flex-col h-full justify-center items-center max-lg:flex-col xax-lg:h-96 duration-300">
        <p className=" font-alata text-4xl text-mp-gray my-2">
          We've got a plan that's perfect for you
        </p>
        <p className="font-alata text-4xl text-mp-gray flex justify-center items-center flex-col my-2">
          Pick your Premium
          <p className="text-base my-2">
            Listen without limits on your phone, speaker, and other devices.
          </p>
        </p>
        <div className="flex justify-center h-full">
          {plans.map((plan) => {
            return (
              <div
                key={plan.id}
                className="group flex flex-col h-3/4 justify-center items-center mx-5 cursor-pointer"
              >
                <p className="invisible font-bold font-alata group-hover:visible opacity-0 group-hover:opacity-90  duration-500 flex justify-center items-center text-mp-white bg-mp-violet w-72 rounded-t-lg">
                  {plan.planName2}
                </p>
                <div
                  sx={{ width: 300, maxWidth: 345, backgroundColor: "white" }}
                  className="w-72 h-full duration-500 relative"
                >
                  <div className="duration-500">
                    <p className="text-mp-ramargreen text-2xl mx-auto w-full flex justify-center items-center font-bold group-hover:text-mp-violet duration-500">
                      {plan.planName.toUpperCase()}
                    </p>
                    <div className="mt-4">
                      <p className="flex items-center text-xl font-semibold">
                        <span className="flex">
                          <HiOutlineCurrencyRupee className="text-3xl" />
                          <span className="text-lg">
                            <span className="group-hover:text-mp-violet font-bold">
                              {" "}
                              {plan.price}
                            </span>
                            <span className="text-base">
                              {" "}
                              /month after offer period
                            </span>{" "}
                            {plan.upToLogin}{" "}
                            <span className="text-base"> account</span>
                          </span>
                        </span>
                      </p>
                      <hr className="my-3 text-mp-gray" />
                    </div>
                    <div className="flex justify-center text-justify">
                      <ul>
                        {plan.offers.map((offer,i) => {
                          return (
                            <li key={i} className="text-lg my-1 flex items-center">
                              <TiTickOutline className="mr-2 group-hover:text-mp-green text-xl" />
                              {offer}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-center items-center absolute w-full bottom-6">
                    <button variant="outlined" className="w-52">
                      Select Plan
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Plans;