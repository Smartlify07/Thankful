type FeatureProps = {
  header: string;
  description: string;
  index: number;
  highlightableTexts: string[];
};
const Feature = ({
  header,
  description,
  index,
  highlightableTexts,
}: FeatureProps) => {
  return (
    <div className="grid-cols-1   border h-[500px]  w-full  rounded-2xl border-warmorange py-10 px-5  flex  gap-7 font-rubikk">
      <div
        className={`flex flex-col self-end pb-5 lg:w-1/2 gap-3 ${
          index % 2 !== 0 ? 'order-2' : 'order-1'
        }`}
      >
        <h1 className="text-4xl font-semibold font-raleway text-[#111]">
          {header}
        </h1>
        <p className="text-base">
          {description.split(' ').map((word, idx) => {
            const isHighlighted = highlightableTexts.includes(word);
            console.log(word);
            return isHighlighted ? (
              <span key={idx} className="text-warmorange">
                {word}{' '}
              </span>
            ) : (
              <span key={idx}>{word} </span>
            );
          })}
        </p>
      </div>
      <div
        className={`border-2 h-full rounded-2xl w-1/2 ${
          index % 2 !== 0 ? 'order-1' : 'order-2'
        }`}
      ></div>
    </div>
  );
};

export default Feature;
