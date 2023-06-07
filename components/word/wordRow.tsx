const WordRow = ({ word }: Props) => {
  const { title, description, author, relatedLinks, relatedTopics } = word;

  return (
    <div>
      <h1 className="text-grey-800 text-lg font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default WordRow;
