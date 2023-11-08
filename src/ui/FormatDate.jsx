import moment from "moment";
import PropTypes from "prop-types";
import { BsDot } from "react-icons/bs";

const FormatDate = ({ date }) => {
  function getTimeAgo(createdAt) {
    const currentDate = moment();
    const createdDate = moment(createdAt, "M/D/YY");

    const daysAgo = currentDate.diff(createdDate, "days");

    if (daysAgo === 0) {
      return "Today";
    } else if (daysAgo === 1) {
      return "1 day ago";
    } else {
      return `${daysAgo} days ago`;
    }
  }
  return (
    <p className="flex items-center text-gray-400">
      <BsDot size={25} /> {getTimeAgo(date)}
    </p>
  );
};

FormatDate.propTypes = {
  date: PropTypes.date,
};

FormatDate.defaultProps = {
  date: new Date(),
};

export default FormatDate;
