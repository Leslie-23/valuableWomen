import { useState } from "react";
import { useForm } from "react-hook-form";
import { auth1, auth2, sendSignInLinkToEmail } from "../Firebase";

const URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_URL_DEV
    : import.meta.env.VITE_URL_PROD;

const actionCodeSettings = {
  url: `${URL}/verify`, // Change this to your domain
  handleCodeInApp: true,
};

console.log("Current Mode:", import.meta.env.MODE);
console.log("Using URL:", URL);

const MembershipForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [emailSent, setEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // List of auth instances to try
  const authProviders = [auth1, auth2];

  const onSubmit = async (data) => {
    for (let i = 0; i < authProviders.length; i++) {
      try {
        console.log(`Attempting authentication with auth${i + 1}...`);
        await sendSignInLinkToEmail(
          authProviders[i],
          data.email,
          actionCodeSettings
        );
        window.localStorage.setItem("emailForSignIn", data.email);
        setEmailSent(true);
        reset();
        console.log(`✅ Success with auth${i + 1}`);
        return; // Exit loop on success
      } catch (error) {
        console.error(`❌ Error with auth${i + 1}:`, error);
        setErrorMessage(error.message);
      }
    }
    console.error("⚠️ All authentication methods failed.");
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white text-gray-700">
              <select
                {...register("title")}
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 
                focus:ring-2 focus:ring-purple-400 focus:border-purple-400 
                hover:bg-purple-100 transition duration-300 ease-in-out"
                aria-label="Title"
              >
                <option value="Mr">Mr.</option>
                <option value="Ms">Dr.</option>
                <option value="Mrs">Mrs.</option>
                <option value="Mrs">Ms.</option>
              </select>

              <input
                {...register("firstName", { required: true })}
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 
                focus:ring-2 focus:ring-purple-400 focus:border-purple-400 
                hover:bg-purple-100 transition duration-300 ease-in-out"
                // aria-label={placeholder}
                required
              />
            </div>

            <input
              {...register("lastName", { required: true })}
              placeholder="Last Name"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 
                focus:ring-2 focus:ring-purple-400 focus:border-purple-400 
                hover:bg-purple-100 transition duration-300 ease-in-out"
              required
            />
            <input
              {...register("occupation")}
              placeholder="Occupation"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 
                focus:ring-2 focus:ring-purple-400 focus:border-purple-400 
                hover:bg-purple-100 transition duration-300 ease-in-out"
            />
            {/* <input
              {...register("status")}
              placeholder="Status (Single/Married)"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 
                focus:ring-2 focus:ring-purple-400 focus:border-purple-400 
                hover:bg-purple-100 transition duration-300 ease-in-out"
            /> */}
            <select
              {...register("Status")}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 
                focus:ring-2 focus:ring-purple-400 focus:border-purple-400 
                hover:bg-purple-100 transition duration-300 ease-in-out"
              aria-label="Title"
            >
              <option value="Single">Single.</option>
              <option value="Married">Married.</option>
              <option value="Divorced">Divorced.</option>
              <option value="Separated">Separated.</option>
            </select>
            <div className="flex flex-col">
              <label
                htmlFor="dob"
                className="text-gray-700 font-medium text-xs"
              >
                Date of Birth
              </label>
              <input
                {...register("dob")}
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 
                focus:ring-2 focus:ring-purple-400 focus:border-purple-400 
                hover:bg-purple-100 transition duration-300 ease-in-out"
                required
                placeholder="Date Of Birth"
              />
            </div>
            <input
              {...register("nationality")}
              placeholder="Nationality"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 
                focus:ring-2 focus:ring-purple-400 focus:border-purple-400 
                hover:bg-purple-100 transition duration-300 ease-in-out"
            />
            <input
              {...register("address")}
              placeholder="Address"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 
                focus:ring-2 focus:ring-purple-400 focus:border-purple-400 
                hover:bg-purple-100 transition duration-300 ease-in-out"
            />
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 
                focus:ring-2 focus:ring-purple-400 focus:border-purple-400 
                hover:bg-purple-100 transition duration-300 ease-in-out"
              required
            />
            <input
              {...register("phone")}
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 
                focus:ring-2 focus:ring-purple-400 focus:border-purple-400 
                hover:bg-purple-100 transition duration-300 ease-in-out"
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
