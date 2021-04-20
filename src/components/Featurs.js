import React from "react";
function Featurs() {
    return (
        <section className="max-w-full mx-auto container bg-gray-200 pt-16 sm:px-16 px-4">
            <div>
                <div className="flex items-center flex-col sm:px-8 px-4">
                   
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-center leading-tight text-gray-900 lg:w-7/12 md:w-10/12 pt-4">What are the Benefits? </h2>
                </div>
                <div className="mt-20 flex flex-wrap justify-between ">
                    <div className="flex sm:w-full md:w-5/12">
                        <div className="w-20 h-20 relative mr-5">
                            <div className="absolute top-0 right-0 bg-pink-500 rounded w-16 h-16 mt-2 mr-1" />
                            <div className="absolute text-green-200 bottom-0 left-0 color1 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3 font-bold text-lg">
                      KPI
                            </div>
                        </div>
                        <div className="w-10/12">
                            <h4 className="text-xl font-bold leading-tight text-gray-900"> Lorem ipsum dolor sit amet</h4>
                            <p className="text-lg text-gray-700 leading-normal pt-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit elit metus, ac eleifend augue porttitor eget</p>
                        </div>
                    </div>
                    <div className="flex sm:w-full md:w-5/12 pb-20">
                        <div className="w-20 h-20 relative mr-5">
                            <div className="absolute top-0 right-0 bg-pink-500 rounded w-16 h-16 mt-2 mr-1" />
                            <div className="absolute text-white bottom-0 left-0 color1 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3 text-lg font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(157, 253, 180, 1)', transform: '', msFilter: ''}}><path d="M5 3L3 3 3 21 21 21 21 19 5 19z" /><path d="M13 12.586L8.707 8.293 7.293 9.707 13 15.414 16 12.414 20.293 16.707 21.707 15.293 16 9.586z" /></svg>
                            </div>
                        </div>
                        <div className="w-10/12">
                        <h4 className="text-xl font-bold leading-tight text-gray-900"> Lorem ipsum dolor sit amet</h4>
                            <p className="text-lg text-gray-700 leading-normal pt-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit elit metus, ac eleifend augue porttitor eget</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    );
}

export default Featurs;
