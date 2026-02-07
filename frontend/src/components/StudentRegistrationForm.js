import React, { useState } from "react";

export default function StudentRegister() {
  const [step, setStep] = useState(1); // Step 1: Name & Email, Step 2: Password
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false); // For popup

  const handleNext = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please enter both name and email!");
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      alert("Please create a password!");
      return;
    }
    // Simulate API registration
    setRegistered(true);
    setStep(1);
    setName("");
    setEmail("");
    setPassword("");

    // Hide popup after 3 seconds
    setTimeout(() => {
      setRegistered(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Student Registration</h2>

        {step === 1 && (
          <form onSubmit={handleNext} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border rounded-md"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800"
            >
              Next
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 border rounded-md"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
            >
              Submit
            </button>
          </form>
        )}

        {/* Popup Notification */}
        {registered && (
          <div className="fixed top-10 right-10 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
            You have registered successfully!
          </div>
        )}
      </div>
    </div>
  );
}
