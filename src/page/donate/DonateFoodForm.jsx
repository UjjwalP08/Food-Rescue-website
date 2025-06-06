import { useRef, useState } from "react";

const DonateFoodForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    category: "",
    quantity: "",
    prepTime: "",
    note: "",
    termsAccepted: false,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const dateRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.contact) newErrors.contact = "Contact number is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.category)
      newErrors.category = "Please select a food category.";
    if (!formData.quantity || parseFloat(formData.quantity) <= 0)
      newErrors.quantity = "Enter a positive quantity in kg.";
    if (!formData.prepTime)
      newErrors.prepTime = "Preparation time is required.";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the Terms & Conditions.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const donateFood = async (data) => {
    try {
      const response = await fetch(
        "https://notification-backend-a6eab-default-rtdb.firebaseio.com/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log("Donation submitted!", result);
      alert("Thank you for donating food!");
    } catch (error) {
      console.error("Error submitting donation:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true); // Show spinner
      try {
        await donateFood(formData);
        // Reset form
        setFormData({
          name: "",
          email: "",
          contact: "",
          address: "",
          category: "",
          quantity: "",
          prepTime: "",
          note: "",
          termsAccepted: false,
        });
        setErrors({});
      } catch (err) {
        console.error("Submission failed", err);
      } finally {
        setLoading(false); // Hide spinner
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto rounded-xl shadow-lg mt-10">
      <h2 className="text-6xl font-bold mb-6 text-center text-[#afc9b5]">
        Donate Food
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="tw-border tw-border-gray-300 tw-p-2 tw-w-full tw-rounded tw-bg-[#191919] tw-text-white"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="tw-border tw-border-gray-300 tw-p-2 tw-w-full tw-rounded tw-bg-[#191919] tw-text-white"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Contact */}
        <div>
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            className="tw-border tw-border-gray-300 tw-p-2 tw-w-full tw-rounded tw-bg-[#191919] tw-text-white"
          />
          {errors.contact && (
            <p className="text-red-500 text-sm">{errors.contact}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <input
            type="text"
            name="address"
            placeholder="Collection Address"
            value={formData.address}
            onChange={handleChange}
            className="tw-border tw-border-gray-300 tw-p-2 tw-w-full tw-rounded tw-bg-[#191919] tw-text-white"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <p className="font-medium mb-1 text-white">Category</p>
          <div className="flex gap-4 text-white">
            {["veg", "non-veg", "both"].map((type) => (
              <label key={type} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="category"
                  value={type}
                  checked={formData.category === type}
                  onChange={handleChange}
                />{" "}
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </label>
            ))}
          </div>
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category}</p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity (kg)"
            value={formData.quantity}
            onChange={handleChange}
            className="tw-border tw-border-gray-300 tw-p-2 tw-w-full tw-rounded tw-bg-[#191919] tw-text-white"
            min="0.1"
            step="0.1"
          />
          {errors.quantity && (
            <p className="text-red-500 text-sm">{errors.quantity}</p>
          )}
        </div>

        {/* Prep Time */}
        <div>
          <input
            ref={dateRef}
            type="datetime-local"
            name="prepTime"
            value={formData.prepTime}
            onClick={() => {
              dateRef.current.showPicker();
            }}
            onChange={handleChange}
            className="tw-border tw-border-gray-300 tw-p-2 tw-w-full tw-rounded tw-bg-[#191919] tw-text-white"
          />
          {errors.prepTime && (
            <p className="text-red-500 text-sm">{errors.prepTime}</p>
          )}
        </div>

        {/* Note */}
        <div>
          <textarea
            name="note"
            placeholder="Note"
            value={formData.note}
            onChange={handleChange}
            className="tw-border tw-border-gray-300 tw-p-2 tw-w-full tw-rounded tw-bg-[#191919] tw-text-white"
            rows={3}
          />
        </div>

        {/* Terms */}
        <div className="text-white flex gap-2 items-center">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label>I accept the Terms & Conditions</label>
        </div>
        {errors.termsAccepted && (
          <p className="text-red-500 text-sm">{errors.termsAccepted}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          )}
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default DonateFoodForm;
