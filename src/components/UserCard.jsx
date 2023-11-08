import Avatar, { genConfig } from "react-nice-avatar";
import PropTypes from "prop-types";
import FormatDate from "../ui/FormatDate";

function UserCard({ id, name, job_title, sex, comment, date, onView }) {
  const config = genConfig({
    // @ts-ignore
    sex: sex,
    seed: name,
  });

  return (
    <div
      className="p-7 flex justify-between group relative rounded-lg border border-gray-50 hover:bg-slate-50 shadow cursor-pointer transition-all ease-in-out delay-50"
      onClick={() => onView(id)}
    >
      <div className="flex gap-3 items-center justify-start">
        <div className="flex justify-center">
          <Avatar
            {...config}
            className="
          w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300
          "
          />
        </div>
        <div className="">
          <h2 className="text-2xl capitalize font-semibold ">{name}</h2>
          <p className="text-sm text-gray-600">{job_title}</p>
          {date && <FormatDate date={date} />}
          <p className="font-bold ml-2">{comment}</p>
        </div>
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
  date: PropTypes.string,
  onView: PropTypes.func,
};

export default UserCard;
