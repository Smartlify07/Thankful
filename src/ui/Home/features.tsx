import { featuresData } from '../../constants';
import Feature from './feature';

const Features = () => {
  return (
    <section
      id="features"
      className="flex flex-col  py-20 mt-10  px-20 justify-between items-start gap-5 font-rubikk"
    >
      <header className="py-2">
        <h1 className="text-5xl leading-[50px] font-medium text-[#111] lg:w-9/12">
          Turn Every <span className="text-warmorange">'Thank You' </span> Into
          a <span className="text-warmorange">Lasting Memory</span>
        </h1>
      </header>
      {featuresData.map((item, index) => (
        <Feature index={index} key={item.header} {...item} />
      ))}
    </section>
  );
};

export default Features;
