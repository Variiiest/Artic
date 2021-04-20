import first from './images/Serv1.svg'
import second from './images/Serv2.svg'
import third from './images/Serv3.svg'

const Stats = () => (
    <div>
        <section className="xl:px-0 bg-gray-100">
            <div className="mx-auto container py-6">
                <div className="flex flex-col lg:items-center text-center justify-center w-full pt-6">
                    <h1 className="font-semibold text-gray-800 text-3xl sm:text-4xl"> Case Study</h1>
              
                </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2  bg-white rounded-lg overflow-hidden shadow-2xl">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center color2" src={first} alt="case"/>
                <div className="p-4">
                  <h1 className="title-font text-2xl font-bold text-gray-900 mb-3"><span>TOYOTA</span></h1>
                  <p className="leading-relaxed mb-3 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit elit metus, ac eleifend augue porttitor eget</p>
             
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2  bg-white rounded-lg overflow-hidden shadow-2xl">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center color2" src={second} alt="case"/>
                <div className="p-4">
                  <h1 className="title-font text-2xl font-bold text-gray-900 mb-3">SINCHIN</h1>
                  <p className="leading-relaxed mb-3 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit elit metus, ac eleifend augue porttitor eget</p>
                  
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2  bg-white rounded-lg overflow-hidden shadow-2xl">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center color2" src={third} alt="case"/>
                <div className="p-4">
                  <h1 className="title-font text-2xl font-bold text-gray-900 mb-3">ADIDAS</h1>
                  <p className="leading-relaxed mb-3 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit elit metus, ac eleifend augue porttitor eget</p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
        </section>
    </div>
);
export default Stats;
