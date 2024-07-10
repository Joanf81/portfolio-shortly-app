import BrandRecognitionIcon from "../Svg/BrandRecognitionIcon";

export default function StatisticsSection() {
  return <section id="statistics" className="bg-gray-100 pb-96">
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto bg-s text-center md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl ">
        <div className="flex flex-col max-w-md px-4">
          <h3 className="mt-24 text-4xl text-black font-bold lg:mt-24">Advanced Statistics</h3>
          <p className="mt-6 text-md text-grayishViolet">
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
        </div>
        <div className="relative flex flex-col items-start mt-14 md:flex-row md:space-x-6">
          <span className="absolute h-4 w-3/4 top-24 left-12 bg-cyan"></span>

          <div className="relative flex flex-col max-w-[297px] p-6 bg-white rounded-xl text-left">
            <div className="absolute -top-8 left-6 p-4 bg-veryDarkViolet rounded-full">
              <BrandRecognitionIcon />
            </div>
            
            <h4 className="mt-12 text-xl text-black font-bold ">Brand Recognition</h4>
            <p className="mt-6 text-md text-grayishViolet">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
          </div>

          <div className="relative flex flex-col max-w-[297px] p-6 mt-8 bg-white rounded-xl text-left">
            <div className="absolute -top-8 left-6 p-4 bg-veryDarkViolet rounded-full">
              <BrandRecognitionIcon />
            </div>
            
            <h4 className="mt-12 text-xl text-black font-bold ">Brand Recognition</h4>
            <p className="mt-6 text-md text-grayishViolet">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
          </div>

          <div className="relative flex flex-col max-w-[297px] mt-16 p-6 bg-white rounded-xl text-left">
            <div className="absolute -top-8 left-6 p-4 bg-veryDarkViolet rounded-full">
              <BrandRecognitionIcon />
            </div>
            
            <h4 className="mt-12 text-xl text-black font-bold ">Brand Recognition</h4>
            <p className="mt-6 text-md text-grayishViolet">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
          </div>
        </div>
      </div>
    </section>;
}
