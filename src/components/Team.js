import React from "react";
function Team() {
    return (
        <div className="bg-gray-100">
            <div className="container flex justify-center mx-auto pt-16">
                <div>
                    
                    <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">Team</h1>
                </div>
            </div>
            <div className="w-full px-10">
                <div className="container mx-auto">
                    <div className="lg:flex md:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around pt-10">
                        <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
                            <div className="bg-top bg-cover bg-no-repeat h-64">
                                <img src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""  className="h-full w-full overflow-hidden object-cover rounded-2xl shadow-2xl" />
                            </div>
                            <div className="py-5 bg-yellow-100 flex flex-col justify-center w-11/12 mx-auto absolute rounded-full shadow-2xl -mt-12 right-0 left-0">
                                <p className="text-xl text-center text-gray-800 font-normal mb-1">Maj Hushain</p>
                                <p className="text-center text-base text-gray-600">CEO</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mx-4 mb-20 xl:max-w-sm lg:w-1/2 relative">
                            <div className="bg-top bg-cover bg-no-repeat h-64">
                                <img src="https://images.unsplash.com/photo-1595482189276-c6b8e0cc5e54?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""  className="h-full w-full overflow-hidden object-cover rounded-2xl shadow-2xl" />
                            </div>
                            <div className="py-5 bg-yellow-100 flex flex-col justify-center w-11/12 mx-auto absolute rounded-full shadow-2xl -mt-12 right-0 left-0">
                                <p className="text-xl text-center text-gray-800 font-normal mb-1">Aditya Sood</p>
                                <p className="text-center text-base text-gray-600">CMO</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
                            <div className="bg-top bg-contain bg-no-repeat h-64">
                                <img src="https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt=""  className="h-full w-full overflow-hidden object-cover rounded-2xl shadow-2xl" />
                            </div>
                            <div className="py-5 bg-yellow-100 flex flex-col justify-center w-11/12 mx-auto absolute rounded-2xl shadow-2xl -mt-12 right-0 left-0">
                                <p className="text-xl text-center text-gray-800 font-normal mb-1">George Steve</p>
                                <p className="text-center text-base text-gray-600">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
