import ideasJsonMock from "../../mock/ideas.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import IdeaSection from "../components/Idea/IdeaSection";
import CommentsSection from "../components/Idea/CommentsSection";

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
    <div className="flex flex-col gap-10 md:gap-14">
      <IdeaSection idea={idea} />
      <CommentsSection comments={idea?.comments} />
    </div>
  );
};

export default Idea;
