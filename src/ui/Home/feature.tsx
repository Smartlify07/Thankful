type FeatureProps = {
  header: string;
  description: string;
  index: number;
  icon: string;
  highlightableTexts: string[];
};
const Feature = ({
  header,
  description,
  index,
  icon,
  highlightableTexts,
}: FeatureProps) => {
  return (
    <section className="grid-cols-1 min-h-[500px] w-full rounded-2xl border-warmorange py-10 px-5 flex gap-7 font-inter">
      <div
        className={`flex flex-col self-end pb-5 lg:w-1/2 gap-3 ${
          index % 2 !== 0 ? 'order-2' : 'order-1'
        }`}
      >
        <h1 className="text-4xl font-normal  text-black">{header}</h1>
        <p className="text-base">
          {description.split(' ').map((word, idx) => {
            const isHighlighted = highlightableTexts.includes(word);
            console.log(word);
            return isHighlighted ? (
              <span
                key={idx}
                className="italic font-playfair-display tracking-tight font-medium text-black px-2 py-0.5 rounded-sm text-center  bg-lime bg-opacity-40"
              >
                {word}{' '}
              </span>
            ) : (
              <span key={idx}>{word} </span>
            );
          })}
        </p>
      </div>
      <div
        className={`border-2  relative border-gray-100  min-h-full hidden  items-center justify-center md:flex rounded-2xl w-1/2 ${
          index % 2 !== 0 ? 'order-1' : 'order-2'
        }`}
      >
        <span className="text-7xl">{icon}</span>
      </div>
    </section>
  );
};

export default Feature;
