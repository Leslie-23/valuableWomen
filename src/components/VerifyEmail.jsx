import { useEffect, useState } from "react";
import { auth, signInWithEmailLink } from "../Firebase";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      if (window.location.href.includes("signIn")) {
        const email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          setMessage("Error: No email found.");
          return;
        }

        try {
          await signInWithEmailLink(auth, email, window.location.href);
          window.localStorage.removeItem("emailForSignIn");
          setMessage("Email verified successfully!");
          setTimeout(() => navigate("/dashboard"), 2000);
        } catch (error) {
          setMessage("Verification failed. Please try again.");
        }
      }
    };

    verifyEmail();
  }, [navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-center text-xl font-bold text-purple-700">
          Email Verification
        </h2>
        <p className="text-center mt-4">{message}</p>
      </div>
    </div>
  );
};

export default VerifyEmail;
