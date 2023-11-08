// import React from "react";
import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { PiPlusBold } from "react-icons/pi";
import UserCard from "../UserCard";

const CommentsSection = ({ comments }) => {
  const renderComments = comments?.map((comment) => (
    <UserCard
      key={comment.id}
      // comment={comment.comment}
      // date={comment.createdAt}
      // commentLiked={comment.liked}
      // likedBy={comment.likedBy}
      {...comment}
    />
  ));

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between mt-5 gap-4">
        <p className="text-3xl font-bold">
          Comments
          <span className="font-normal">({comments?.length || 0})</span>
        </p>
        <Button title="New Comment" variant="primary" icon={PiPlusBold} />
      </div>

      <div className="border-b-[1px] border-primary min-w-full my-3"></div>
      <div className="grid grid-cols-1 gap-4 rounded md:grid-cols-2 lg:xl:grid-cols-3 ">
        {renderComments}
      </div>
    </div>
  );
};

CommentsSection.propTypes = {
  comments: PropTypes.arrayOf(Object),
};

export default CommentsSection;
