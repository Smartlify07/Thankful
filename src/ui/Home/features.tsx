import { featuresData } from '../../constants';
import Feature from './feature';

const Features = () => {
  return (
    <section
      id="features"
      className="flex flex-col  py-10 mt-10  px-10 justify-between items-start gap-7 font-inter"
    >
      {featuresData.map((item, index) => (
        <Feature index={index} key={item.header} {...item} />
      ))}
    </section>
  );
};

export default Features;
