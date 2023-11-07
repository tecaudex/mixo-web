import Button from "../ui/Button";
import { MdNotificationsActive } from "react-icons/md";

const Idea = () => {
  return (
    <div className="md:lg:xl:px-10 pt-10 pb-5 rounded-lg border-2 border-gray-50 shadow">
      <div className="flex justify-between">
        <p className="text-3xl font-bold">Title of idea</p>
        <Button
          title="Follow"
          icon={MdNotificationsActive}
          iconPosition="right"
          classNames="bg-primaryLight text-primary font-bold"
        />
      </div>
      <div className="mt-5 p-10 bg-gray-50 rounded-t-lg  border-b-2">
        <p className="text-xl text-gray-700 font-light max-w-7xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="p-3 rounded-full bg-green-400 w-15"> T </div>
    </div>
  );
};

export default Idea;
