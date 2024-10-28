import Image from "next/image";
import Link from "next/link";

export default function Toyota(){
    return(
        <div>
            <div className="flex flex-col items-center justify-center mt-10 py-10 bg-gray-100 h-auto w-auto">
                <div className="pb-5">
                    <h1 className="text-2xl font-bold underline">Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</h1>
                </div>
                <div className="flex flex-col items-center justify-center bg-white w-[50%] h-auto rounded-md">
                    <Image 
                        src={"/images/toyota.jpg"}
                        alt="image"
                        width={400}
                        height={400}
                    />
                    <div className="flex gap-5">
                        <button type="button" className="p-2 px-3 bg-white border-[1px] border-blue-800 rounded text-[12px] text-blue-800 hover:bg-blue-800 hover:text-white">Book a test drive</button>
                        <button type="button" className="p-2 px-3 bg-white border-[1px] border-blue-800 rounded text-[12px] text-blue-800 hover:bg-blue-800 hover:text-white">Request Bank Finance</button>
                        <button type="button" className="p-2 px-3 bg-white border-[1px] border-blue-800 rounded text-[12px] text-blue-800 hover:bg-blue-800 hover:text-white">Visit Place</button>
                        <button type="button" className="p-2 px-3 bg-white border-[1px] border-blue-800 rounded text-[12px] text-blue-800 hover:bg-blue-800 hover:text-white">Car Inspection</button>
                    </div>
                    <div className="flex flex-col items-center justify-center p-5 w-auto">
                        <h1 className="text-xl">Vehicle Description</h1>
                        <div className="flex flex-wrap gap-5 text-[12px] pt-5">
                            <p><span className="font-semibold">Number of Doors </span>4</p>
                            <p><span className="font-semibold">Engine </span>1800CC</p>
                            <p><span className="font-semibold">Condition </span>8.5 / 10</p>
                            <p><span className="font-semibold">Driven </span>9,500 KM</p>
                            <p><span className="font-semibold">Suspension Type </span>Soft Suspension</p>
                            <p><span className="font-semibold">Avg </span>13 KM per ltr</p>
                            <p><span className="font-semibold">Transmission </span>Automatic</p>
                            <p><span className="font-semibold">Fuel Type </span>High Octane</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center pb-10">
                        <p className="text-[22px] py-5 text-green-500">PKR 50,00,000</p>
                        <Link href="/checkOut">
                            <button type="button" className="p-2 px-3 text-white bg-blue-800 rounded text-[12px] hover:bg-green-500">Make Payment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}