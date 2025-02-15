import { useState } from "react";
import { useForm } from "react-hook-form";
import { auth, sendSignInLinkToEmail } from "../Firebase";

const actionCodeSettings = {
  url: "http://localhost:5173/verify", // Change this to your domain
  handleCodeInApp: true,
};

const MembershipForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [emailSent, setEmailSent] = useState(false);

  const onSubmit = async (data) => {
    try {
      await sendSignInLinkToEmail(auth, data.email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", data.email);
      setEmailSent(true);
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl border border-gray-200">
        <h2 className="text-center text-2xl font-extrabold text-purple-800">
          Join Valuable Women
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-3">
          Breaking Boundaries
        </p>

        {!emailSent ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                {...register("title")}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600"
                aria-label="Title"
              >
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
                <option value="Mrs">Mrs</option>
              </select>

              <input
                {...register("firstName", { required: true })}
                placeholder="First Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            <input
              {...register("lastName", { required: true })}
              placeholder="Last Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600"
              required
            />
            <input
              {...register("occupation")}
              placeholder="Occupation"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600"
            />
            <input
              {...register("status")}
              placeholder="Status (Single/Married)"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600"
            />
            <input
              {...register("dob")}
              type="date"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600"
            />
            <input
              {...register("nationality")}
              placeholder="Nationality"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600"
            />
            <input
              {...register("address")}
              placeholder="Address"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600"
            />
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600"
              required
            />
            <input
              {...register("phone")}
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600"
            />

            <button
              type="submit"
              className="w-full bg-purple-700 text-white p-3 rounded-lg transition hover:bg-purple-800 focus:ring-2 focus:ring-purple-600"
            >
              Sign Up
            </button>
          </form>
        ) : (
          <p className="text-center text-green-600 font-semibold mt-4">
            OTP has been sent to your email. Please check your inbox.
          </p>
        )}
      </div>
    </div>
  );
};

export default MembershipForm;
