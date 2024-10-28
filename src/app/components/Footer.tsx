import Link from "next/link";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer(){
    return(
        <div>
            <footer className="mt-16 px-40 pt-16 pb-5 w-full h-auto bg-gray-900">
                <section className="flex gap-20">
                    <div>
                        <h1 className="text-[18px] text-white mb-3">Cars By Make</h1>
                        <ul className="text-[14px] text-gray-400">
                            <li>
                                <Link href="/" className="hover:underline">Toyota Cars for Sale</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Suzuki Cars for Sale</Link> 
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Honda Cars for Sale</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Hyundai Cars for Sale</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">BMW Cars for Sale</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-[18px] text-white mb-3">Cars By City</h1>
                        <ul className="text-[14px] text-gray-400">
                            <li>
                                <Link href="/" className="hover:underline">Cars in Lahore</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Cars in Karachi</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Cars in Islamabad</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Cars in Rawalpindi</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Cars in Faisalabad</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-[18px] text-white mb-3">Explore PakWheels</h1>
                        <ul className="text-[14px] text-gray-400">
                            <li>
                                <Link href="/" className="hover:underline">Used Cars</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Used Bikes</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">New Cars</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Auto Parts & Accessories</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Cool Rides</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-[18px] text-white mb-3">PakWheels.com</h1>
                        <ul className="text-[14px] text-gray-400">
                            <li>
                                <Link href="/" className="hover:underline">About PakWheels.com</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Our Products</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Advertise With Us</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">How To Pay</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">FAQs</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-[18px] text-white mb-3">Sell On PakWheels</h1>
                        <ul className="text-[14px] text-gray-400">
                            <li>
                                <Link href="/" className="hover:underline">Sell Your Car</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Sell Your Bike</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Sell Accessory</Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="mt-10 flex gap-20 border-b-[1px] border-b-gray-500 pb-7">
                    <div>
                        <h1 className="text-[18px] text-white mb-3">Cars By Category</h1>
                        <ul className="text-[14px] text-gray-400">
                            <li>
                                <Link href="/" className="hover:underline">Jeep</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Imported Cars</Link> 
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Automatic Cars</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Low Priced Cars</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Japanese Cars</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-[18px] text-white mb-3">Cars By Body Type</h1>
                        <ul className="text-[14px] text-gray-400">
                            <li>
                                <Link href="/" className="hover:underline">Sedan</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Hatchback</Link> 
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">SUV</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Van</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Mini Van</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-[18px] text-white mb-3">Cars By Color</h1>
                        <ul className="text-[14px] text-gray-400">
                            <li>
                                <Link href="/" className="hover:underline">White Cars</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Silver Cars</Link> 
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Black Cars</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Blue Cars</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Green Cars</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-[18px] text-white mb-3">Cars By Province</h1>
                        <ul className="text-[14px] text-gray-400">
                            <li>
                                <Link href="/" className="hover:underline">Cars in Punjab</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Cars in Sindh</Link> 
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Cars in Balochistan</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Cars in KPK</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Tribal Areas</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-[18px] text-white mb-3">Follow Us</h1>
                        <div className="flex gap-3">
                            <AiFillTwitterCircle size={35} className="text-gray-400 cursor-pointer hover:text-blue-500" />
                            <FaFacebook size={30} className="text-gray-400 cursor-pointer hover:text-blue-500" />
                            <FaInstagramSquare size={30} className="text-gray-400 cursor-pointer hover:text-blue-500" />
                            <Link href="https://www.linkedin.com/in/mahrukh-noor-4323b5296">
                                <FaLinkedin size={30} className="text-gray-400 cursor-pointer hover:text-blue-500" />
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="pt-7">
                    <p className="text-center text-[14px] text-gray-400">Copyright © 2003 - 2024 PakWheels - All Rights Reserved.</p>
                    <Link href="https://www.linkedin.com/in/mahrukh-noor-4323b5296">
                        <p className="text-center font-bold hover:text-white text-[14px] text-gray-400">Designed by Mahrukh Noor</p>
                    </Link>
                </section>
            </footer>
        </div>
    );
}