import { GiCheckMark } from "react-icons/gi";

export default function HeroSection(){
    return(
        <div className="bg-white">
            <div className="relative mt-16 border border-gray-300 p-4 mx-40 h-[17rem]">
                <div className="absolute transform -translate-x-1 -top-4 left-[13.75rem] px-5 bg-white">
                    <h1 className="text-2xl font-semibold text-gray-600">Sell Your Car on PakWheels and Get the Best Price</h1>
                </div>
                <div className="flex gap-28 mt-8 px-20">
                    <div>
                       <h1 className="text-xl text-blue-900 font-[600] mb-5">Post your Ad on PakWheels</h1>
                       <ul className="text-[14px]">
                            <li className="flex gap-3 mt-2">
                                <GiCheckMark size={15} className="text-green-500" />
                                Post your Ad for Free in 3 Easy Steps 
                            </li>
                            <li className="flex gap-3 mt-2">
                                <GiCheckMark size={15} className="text-green-500" />
                                Get Genuine offers from Verified Buyers
                            </li>
                            <li className="flex gap-3 mt-2">
                                <GiCheckMark size={15} className="text-green-500" />
                                Sell your car Fast at the Best Price
                            </li>
                        </ul>
                        <button type="button" className="mt-5 bg-red-700 px-10 py-2 text-[18px] text-white rounded hover:opacity-90">Post Your Ad</button> 
                    </div>
                    <div className="border-r-[1px] border-gray-300">
                        <p className="-mr-3 mt-20 bg-white text-[20px] t emibold">OR</p>
                    </div>
                    <div>
                        <h1 className="text-xl text-blue-900 font-[600] mb-5">Try PakWheels Sell It For Me</h1>
                        <ul className="text-[14px]">
                            <li className="flex gap-3 mt-2">
                                <GiCheckMark size={15} className="text-green-500" />
                                Dedicated Sales Expert to Sell your Car
                            </li>
                            <li className="flex gap-3 mt-2">
                                <GiCheckMark size={15} className="text-green-500" />
                                We Bargain for you and share the Best Offer
                            </li>
                            <li className="flex gap-3 mt-2">
                                <GiCheckMark size={15} className="text-green-500" />
                                We ensure Safe & Secure Transection
                            </li>
                        </ul>
                        <button type="button" className="mt-5 bg-blue-500 px-5 py-2 text-[18px] text-white rounded hover:opacity-90">Register Your Car</button>
                    </div>
                </div>
            </div>
        </div>
    );
}