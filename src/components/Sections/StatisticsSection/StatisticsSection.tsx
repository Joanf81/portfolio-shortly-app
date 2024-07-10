import BrandRecognitionIconSvg from "../../Svg/BrandRecognitionIconSvg";
import DetailedRecordIconSvg from "../../Svg/DetailedRecordIconSvg";
import FullyCustomizableIconSvg from "../../Svg/FullyCustomizableIconSvg";
import StatisticsHeader from "./StatisticsHeader";
import FeaturesContainer from "./FeaturesContainer";
import FeatureBox from "./FeatureBox";

export default function StatisticsSection() {
  return (
    <section id="statistics" className="bg-gray-100 pb-96">
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto bg-s text-center md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl ">
        <StatisticsHeader />
        <FeaturesContainer>
          <FeatureBox
            key={0}
            index={0}
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
          >
            <BrandRecognitionIconSvg />
          </FeatureBox>

          <FeatureBox
            key={1}
            index={1}
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          >
            <DetailedRecordIconSvg />
          </FeatureBox>

          <FeatureBox
            key={2}
            index={2}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          >
            <FullyCustomizableIconSvg />
          </FeatureBox>
        </FeaturesContainer>
      </div>
    </section>
  );
}
