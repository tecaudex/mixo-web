import Button from "../ui/Button";
import { MdNotificationsActive } from "react-icons/md";
import { RiThumbUpLine } from "react-icons/ri";
import ideasJsonMock from "../../mock/ideas.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const findIdeaById = (id) => {
  return ideasJsonMock.find((idea) => idea.id === id);
};

const Idea = () => {
  const { id } = useParams();
  const [idea, setIdea] = useState(null);

  useEffect(() => {
    setIdea(findIdeaById(Number(id)));
  }, [id]);

  return (
    <div>
      {idea && (
        <div className="md:lg:xl:px-10 pt-10 pb-5 rounded-lg border-2 border-gray-50 shadow">
          <div className="flex justify-between">
            <p className="text-3xl font-bold">{idea?.title}</p>
            <Button
              title="Follow"
              icon={MdNotificationsActive}
              iconPosition="right"
              classNames=" bg-primaryLight text-primary font-bold"
            />
          </div>
          <div className="mt-5 p-10 bg-gray-50 rounded-t-lg  border-b-2">
            <p className="text-xl text-gray-700 font-light max-w-7xl">
              {idea?.description}
            </p>
          </div>
          <div className="flex justify-between mt-5">
            <div>
              <span className="text-gray-400">Created by</span>
              <span className="text-gray-700"> {idea?.user?.name} </span>
              <span className="text-gray-400"> on </span>
              <span className="text-gray-700"> {idea?.createdAt} </span>
            </div>
            <Button
              title={`${idea?.user?.votes} Votes`}
              classNames="px-2 py-1 min-w-fit bg-gray-50 text-gray-400 font-semibold"
              icon={RiThumbUpLine}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Idea;
