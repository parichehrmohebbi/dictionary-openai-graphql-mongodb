import WordContext from "@src/context/wordContext";
import { Word } from "@src/dao/types";
import Link from "next/link";
import router from "next/router";
import { useContext } from "react";

interface WordDetailProps {
  word: Word;
}
const WordDetail: React.FC<WordDetailProps> = ({ word }: WordDetailProps) => {
  const { setWord } = useContext(WordContext);

  return (
    <>
      <div>
        {word && (
          <div className="text-grey-800 dark:text-grey-200">
            <h1 className="font-bold text-3xl  pt-10">{word?.title}</h1>
            <hr className="dark:text-grey-800 text-grey-200 mt-10"></hr>
            <p className="text-grey-400 mt-5">Definition:</p>
            <p className="pl-5">{word?.definition}</p>
            {word?.relatedLinks && word?.relatedLinks?.length > 0 && (
              <>
                <hr className="dark:text-grey-800 text-grey-200 mt-10"></hr>
                <p className="text-grey-400 mt-5">Related Links:</p>
                <ul>
                  {word?.relatedLinks?.map((link, i) => {
                    if (link?.url)
                      return (
                        <li className="pl-5" key={i}>
                          <Link
                            className=" dark:text-grey-200 text-grey-800 hover:text-purple-400 dark:hover:text-purple-400"
                            target="_blank"
                            href={link.url.toString()}
                          >
                            {link.title}
                          </Link>
                        </li>
                      );
                  })}
                </ul>
              </>
            )}

            {word?.relatedTopics && word?.relatedTopics?.length > 0 && (
              <>
                <hr className="dark:text-grey-800 text-grey-200 mt-10"></hr>
                <p className="text-grey-400 mt-5">Related Topics:</p>

                <div className="pl-5 pt-5 flex flex-wrap">
                  {word?.relatedTopics?.map((topic, i) => {
                    return (
                      <div
                        key={i}
                        className="whitespace-nowrap flex-wrap dark:text-grey-200 text-grey-800 hover:text-purple-400 dark:hover:text-purple-400 border border-grey-400 px-3 mr-3 rounded-xl"
                        onClick={() => {
                          router.push(
                            `/${encodeURI(topic.toString())}`,
                            undefined,
                            {
                              shallow: false,
                            }
                          );
                          setWord(null);
                        }}
                      >
                        {topic}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default WordDetail;
