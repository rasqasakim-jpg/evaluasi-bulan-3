// src/pages/Login.tsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

type FormData = {
  firstName: string;
  lastName: string;
  role: "user" | "admin" | null;
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
    setValue,
  } = useForm<FormData>({ defaultValues: { role: null } });
  const [loginError, setLoginError] = useState<string>("");
  const [step, setStep] = useState(1);

  const selectedRole = watch("role");

  const handleFinalSubmit = (data: FormData) => {
    // Simulasi login dengan role
    if (data.email === "admin@gmail.com" && data.password === "admin") {
      login("admin");
      navigate("/dashboard");
    } else if (data.email === "user@gmail.com" && data.password === "user") {
      login("user");
      navigate("/products");
    } else {
      setLoginError("Email atau password salah");
    }
  };

  const handleNextStep = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await trigger(["firstName", "lastName"]);
    }
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const handleSelectRole = (role: "user" | "admin") => {
    setValue("role", role);
    setStep(3);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm transition-colors duration-300">
        <h2 className="text-2xl font-bold text-center mb-4 dark:text-gray-100">Selamat Datang!</h2>
        {/* Progress Bar */}
        <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-6">
          <div
            className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        <form onSubmit={handleSubmit(handleFinalSubmit)} className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${(step - 1) * 100}%)` }}
          >
            {/* Step 1: Nama */}
            <div className="w-full flex-shrink-0 px-1">
              <h3 className="font-semibold text-lg mb-4 dark:text-gray-200">Siapa namamu?</h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nama Depan</label>
                  <input
                    {...register("firstName", { required: "Nama depan wajib diisi" })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Masukkan nama..."
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nama Belakang</label>
                  <input
                    {...register("lastName", { required: "Nama belakang wajib diisi" })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Masukkan nama..."
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                </div>
                <button type="button" onClick={handleNextStep} className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                  Lanjut
                </button>
              </div>
            </div>

            {/* Step 2: Pilih Role */}
            <div className="w-full flex-shrink-0 px-1">
              <h3 className="font-semibold text-lg mb-4 dark:text-gray-200">Kamu adalah...</h3>
              <div className="flex flex-col gap-4">
                <button type="button" onClick={() => handleSelectRole("user")} className="w-full py-3 text-lg border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:text-blue-400 dark:border-blue-400 transition">
                  👤 User
                </button>
                <button type="button" onClick={() => handleSelectRole("admin")} className="w-full py-3 text-lg border-2 border-purple-500 text-purple-500 rounded hover:bg-purple-500 hover:text-white dark:hover:bg-purple-500 dark:text-purple-400 dark:border-purple-400 transition">
                  👑 Admin
                </button>
                <button type="button" onClick={() => setStep(1)} className="text-sm text-gray-600 dark:text-gray-400 hover:underline mt-2">
                  Kembali
                </button>
              </div>
            </div>

            {/* Step 3: Email & Password */}
            <div className="w-full flex-shrink-0 px-1">
              <h3 className="font-semibold text-lg mb-4 dark:text-gray-200">Detail Akun</h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    {...register("email", { required: "Email wajib diisi" })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                    placeholder="masukkan email..."
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                  <input
                    type="password"
                    {...register("password", { required: "Password wajib diisi" })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                    placeholder="masukkan password..."
                  />
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                </div>

                {loginError && <p className="text-red-500 text-sm text-center">{loginError}</p>}

                <button type="submit" className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                  Login
                </button>

                <button type="button" onClick={() => setStep(2)} className="text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Kembali
                </button>

                {/* Petunjuk Login Dinamis */}
                {selectedRole === "user" && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                    <span className="font-bold">Hint User:</span> user@gmail.com / user
                  </p>
                )}
                {selectedRole === "admin" && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                    <span className="font-bold">Hint Admin:</span> admin@gmail.com / admin
                  </p>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
