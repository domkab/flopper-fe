import clsx from "clsx";

interface TextGridData {
  id: string;
  title: string;
  text: string;
}

interface TextGridOneSingleProps {
  data: TextGridData;
  spaceBottomClass?: string;
}

const TextGridOneSingle: React.FC<TextGridOneSingleProps> = ({ data, spaceBottomClass }) => {
  return (
    <div className={clsx("single-mission", spaceBottomClass)}>
      <h3>{data.title}</h3>
      <p>{data.text}</p>
    </div>
  );
};

export default TextGridOneSingle;