import React, { useState } from "react";
function FAQ() {
    const [question, setquestion] = useState(0);
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto pt-16 bg-gray-100">
                <div className="text-center pb-3 md:pb-10 xl:pb-20">
                  
                    <h1 className="px-2 xl:px-0 xl:text-5xl md:text-3xl text-2xl font-extrabold text-gray-800">Frequently Asked Questions</h1>
                </div>
                <div className="w-10/12 mx-auto">
                    <ul>
                        <li className="py-6 px-4 border-gray-200 border-solid border-b bg-white shadow-2xl rounded-lg mb-2">
                            <div className="flex justify-between items-center">
                                <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">Lorem ipsum dolor sit amet?</h3>
                                <div className="cursor-pointer" onClick={() => (question === 0 ? setquestion(null) : setquestion(0))}>
                                    {question === 0 ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#601821" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={9} y1={12} x2={15} y2={12} />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#601821" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={9} y1={12} x2={15} y2={12} />
                                            <line x1={12} y1={9} x2={12} y2={15} />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {question === 0 && <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-white text-sm md:text-base  xl:text-lg rounded-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit elit metus, ac eleifend augue porttitor eget

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit elit metus, ac eleifend augue porttitor eget </p>}
                        </li>
                        <li className="py-6 border-gray-200 border-solid border-b px-4 bg-white shadow-2xl mb-2 rounded-lg">
                            <div className="flex justify-between items-center">
                                <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">Lorem ipsum dolor sit amet,?</h3>
                                <div className="cursor-pointer" onClick={() => (question === 1 ? setquestion(null) : setquestion(1))}>
                                    {question === 1 ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#601821" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={9} y1={12} x2={15} y2={12} />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#601821" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={9} y1={12} x2={15} y2={12} />
                                            <line x1={12} y1={9} x2={12} y2={15} />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {question === 1 && <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-white text-sm md:text-base  xl:text-lg rounded-b-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit elit metus, ac eleifend augue porttitor eget

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit elit metus, ac eleifend augue porttitor eget</p>}
                        </li>
                        <li className="py-6 px-4 bg-white shadow-2xl border-gray-200 border-solid border-b mb-2 rounded-lg">
                            <div className="flex justify-between items-center">
                                <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">Lorem ipsum dolor sit amet?</h3>
                                <div className="cursor-pointer" onClick={() => (question === 2 ? setquestion(null) : setquestion(2))}>
                                    {question === 2 ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#601821" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={9} y1={12} x2={15} y2={12} />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#601821" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={9} y1={12} x2={15} y2={12} />
                                            <line x1={12} y1={9} x2={12} y2={15} />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {question === 2 && <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-white text-sm md:text-base  xl:text-lg rounded-b-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit elit metus, ac eleifend augue porttitor eget

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit elit metus, ac eleifend augue porttitor eget </p>}
                        </li>
                        <li className="py-6 border-gray-200 border-solid border-b px-4 bg-white shadow-2xl rounded-lg mb-2">
                            <div className="flex justify-between items-center">
                                <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">Lorem ipsum dolor sit amet?</h3>
                                <div className="cursor-pointer" onClick={() => (question === 3 ? setquestion(null) : setquestion(3))}>
                                    {question === 3 ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#601821" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={9} y1={12} x2={15} y2={12} />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#601821" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={9} y1={12} x2={15} y2={12} />
                                            <line x1={12} y1={9} x2={12} y2={15} />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {question === 3 && <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-white text-sm md:text-base  xl:text-lg rounded-b-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit elit metus, ac eleifend augue porttitor eget

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit elit metus, ac eleifend augue porttitor eget</p>}
                        </li>
                        <li className="py-6 border-gray-200 border-solid border-b bg-white shadow-2xl px-4 rounded-lg">
                            <div className="flex justify-between items-center">
                                <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">Lorem ipsum dolor sit amet?</h3>
                                <div className="cursor-pointer" onClick={() => (question === 4 ? setquestion(null) : setquestion(4))}>
                                    {question === 4 ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#601821" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={9} y1={12} x2={15} y2={12} />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#601821" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={9} y1={12} x2={15} y2={12} />
                                            <line x1={12} y1={9} x2={12} y2={15} />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {question === 4 && <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-white text-sm md:text-base  xl:text-lg rounded-b-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit elit metus, ac eleifend augue porttitor eget

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit elit metus, ac eleifend augue porttitor eget</p>}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
