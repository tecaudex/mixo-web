import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { RiThumbUpLine } from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md";
import MixoAvatar from "../../ui/Avatar";

const IdeaSection = ({ idea }) => {
  return (
    <div>
      {idea && (
        <div className="sm:px-10 pt-10 pb-5 px-6 rounded-lg border-2 border-gray-50 shadow">
          <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-4">
            <p className="text-3xl font-bold">{idea?.title}</p>
            <Button
              title="Follow"
              icon={MdNotificationsActive}
              iconPosition="right"
              variant="primaryLight"
            />
          </div>
          <div className="mt-5 p-10 bg-gray-50 rounded-t-lg  border-b-2">
            <p className="text-xl text-gray-700 font-light max-w-7xl">
              {idea?.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between mt-5 gap-4">
            <div className="flex items-center gap-2">
              <MixoAvatar name={idea?.user?.name} src={idea?.user?.img} />

              <span className="text-gray-400">Created by</span>
              <span className="text-gray-700">{idea?.user?.name}</span>
              <span className="text-gray-400">on</span>
              <span className="text-gray-700">{idea?.createdAt}</span>
            </div>
            <Button
              title={`${idea?.user?.votes} Votes`}
              classNames="px-2 py-1 min-w-fit"
              icon={RiThumbUpLine}
              variant="gray"
            />
          </div>
        </div>
      )}
    </div>
  );
};

IdeaSection.propTypes = {
  idea: PropTypes.object,
};

export default IdeaSection;
