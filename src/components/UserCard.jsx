import Avatar, { genConfig } from "react-nice-avatar";
import PropTypes from "prop-types";
import FormatDate from "../ui/FormatDate";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
function UserCard({
  id,
  name,
  job_title,
  sex,
  onView,
  comment,
  createdAt: date,
  commentLiked,
  likedBy,
}) {
  const config = genConfig({
    // @ts-ignore
    sex: sex,
    seed: name,
  });

  return (
    <div
      className="p-7 group relative rounded-lg border border-gray-50 hover:bg-slate-50 shadow cursor-pointer transition-all ease-in-out delay-50"
      onClick={() => onView(id)}
    >
      <div className="flex gap-3 items-center">
        <div className="flex justify-center">
          <Avatar
            {...config}
            className="
          w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300
          "
          />
        </div>
        <div className="w-full">
          <h2 className="text-2xl capitalize font-semibold ">{name}</h2>
          <p className="text-sm text-gray-600">{job_title}</p>
          {date && (
            <div className="min-w-full flex flex-row justify-between items-center">
              <FormatDate date={date} />
              {commentLiked ? (
                <div className="">
                  <AiTwotoneHeart color="#e04270" size={20} />
                  {likedBy}
                </div>
              ) : (
                <div className="flex justify-start gap-2 items-center">
                  <AiOutlineHeart color="#e04270" size={20} />
                  {likedBy}
                </div>
              )}
            </div>
          )}
          <p className="font-bold ml-2">{comment}</p>
        </div>
        {/* <div className="">
          <AiOutlineHeart />
        </div> */}
      </div>
    </div>
  );
}

UserCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  job_title: PropTypes.string,
  sex: PropTypes.string,
  comment: PropTypes.string,
  createdAt: PropTypes.string,
  commentLiked: PropTypes.bool,
  likedBy: PropTypes.number,
  onView: PropTypes.func,
};

export default UserCard;
