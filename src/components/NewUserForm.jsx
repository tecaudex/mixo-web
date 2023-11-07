import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TextField from "./TextField";

const initialState = {
  img: "",
  job_title: "",
  name: "",
  id: 0,
  sex: "",
};

function NewUserForm({ onSubmit, data, viewOnly = false }) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData(initialState);
  };

  return (
    <div>
      <TextField
        label="Full Name"
        value={formData.name}
        name="node_id"
        placeholder="Enter your node id"
        onChange={handleChange}
        disabled={viewOnly}
      />
      <TextField
        label="Job Title"
        value={formData.job_title}
        onChange={handleChange}
        name="type"
        placeholder="Enter your type"
        disabled={viewOnly}
      />
      {!viewOnly && (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-center w-full"
          onClick={handleSubmit}
        >
          Save
        </button>
      )}
    </div>
  );
}

NewUserForm.propTypes = {
  onSubmit: PropTypes.func,
  data: PropTypes.any,
  viewOnly: PropTypes.Boolean,
};

export default NewUserForm;
