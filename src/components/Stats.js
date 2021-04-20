const Stats = () => (
    <div>
        <section className="px-6 xl:px-0">
            <div className="mx-auto container py-20">
                <div className="flex flex-col lg:items-center justify-center w-full">
                    <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">User Reviews</h1>
                    <p className="mt-2.5 lg:w-2/5 lg:text-center text-2xl text-gray-800">More than 1000 users are satisfied with our services and want to share their experience with you</p>
                </div>
                <div className="mt-24 flex items-center justify-center w-full">
                    <div className="w-10/12">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center justify-center">
                            <p>544</p>
                                <p className="text-base text-gray-800 leading-7 mt-5 text-center w-8/12">We have reached more than 1.1 million users around the globe</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p>4364</p>
                                <p className="text-base text-gray-800 leading-7 mt-5 text-center w-8/12">We have reached more than 1.1 million users around the globe</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p>32432</p>
                                <p className="text-base text-gray-800 leading-7 mt-5 text-center w-8/12">We have reached more than 1.1 million users around the globe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);
export default Stats;
