import Avatar from "react-avatar";
import PropTypes from "prop-types";

const MixoAvatar = ({ name, img }) => {
  return (
    <Avatar
      name={name}
      maxInitials={1}
      src={img}
      size="40"
      round="50%"
      color={"bg-green-400"}
      className="bg-green-400 mr-3 text-black"
      fgColor="black"
    />
  );
};

MixoAvatar.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

MixoAvatar.defaultProps = {
  name: "Abc",
};

export default MixoAvatar;
