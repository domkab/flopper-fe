import clsx from "clsx";

interface SectionTitleTwoProps {
  titleText: string;
  subTitleText: string;
  positionClass?: string;
  spaceClass?: string;
}

const SectionTitleTwo: React.FC<SectionTitleTwoProps> = ({
  titleText,
  subTitleText,
  positionClass,
  spaceClass
}) => {
  return (
    <div className={clsx("section-title-2", positionClass, spaceClass)}>
      <h2>{titleText}</h2>
      <p>{subTitleText}</p>
    </div>
  );
};

export default SectionTitleTwo;