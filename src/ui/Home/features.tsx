import { featuresData } from '../../constants';
import Feature from './feature';

const Features = () => {
  return (
    <section
      id="features"
      className="flex flex-col px-6 pb-10 justify-between font-inter items-start md:gap-7 md:py-10 md:mt-10 md:px-10"
    >
      {featuresData.map((item, index) => (
        <Feature index={index} key={item.header} {...item} />
      ))}
    </section>
  );
};

export default Features;
