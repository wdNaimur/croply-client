import React from "react";
import CroplyLogo from "../shared/CroplyLogo";
import LeftHeading from "../shared/LeftHeading";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="relative flex lg:justify-center w-screen lg:w-auto lg:items-center bg-base-200">
      <div className="absolute top-5 left-5">
        <CroplyLogo />
      </div>

      <div className="mx-auto lg:mt-0 lg:mb-0 mt-20 mb-10 lg:p-0 p-5">
        <AnimatePresence>
          <motion.form
            layout
            onSubmit={handleSubmit(onSubmit)}
            className="fieldset bg-base-200 border-primary/10 shadow-xl shadow-primary/10 rounded-box  border px-5 py-8 max-w-xl sm:min-w-sm w-[90vw] mx-auto"
          >
            <div className="border-b-2 border-b-primary/40 border-dashed mb-4">
              <LeftHeading
                title={`Welcome Back`}
                subtitle={`Login with Croply`}
              />
            </div>
            <label className="label font-bold ps-1">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input border-0 focus:outline-primary/40 shadow-none focus:shadow-none w-full"
              placeholder="Email"
            />
            <label className="label font-bold ps-1">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                validate: {
                  hasUppercase: (value) =>
                    /[A-Z]/.test(value) ||
                    "Must include at least one uppercase letter",
                  hasLowercase: (value) =>
                    /[a-z]/.test(value) ||
                    "Must include at least one lowercase letter",
                  hasNumber: (value) =>
                    /[0-9]/.test(value) || "Must include at least one number",
                  hasSpecialChar: (value) =>
                    /[@$!%*?&]/.test(value) ||
                    "Must include at least one special character (@$!%*?&)",
                },
              })}
              className="input border-0 focus:outline-primary/40 shadow-none focus:shadow-none w-full"
              placeholder="Password"
            />

            <motion.div layout>
              <AnimatePresence mode="sync">
                {errors?.password && (
                  <motion.p
                    key="password-error"
                    initial={{ opacity: 0, y: -2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {errors?.password?.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <Link
              to="/reset-password"
              className="ps-1 opacity-90 link link-primary"
            >
              Forgot Password?
            </Link>
            <button
              type="submit"
              className="btn btn-secondary border-none shadow-primary/10 mt-4 text-base-100"
            >
              Login
            </button>
            <span className="flex gap-2 ps-1 opacity-90">
              <p>Don't have any account?</p>
              <Link to="/signup" className="link link-primary">
                Register
              </Link>
            </span>
            <div className="divider text-secondary bg-transparent before:bg-transparent after:bg-transparent before:border-t-2 before:border-dashed before:border-primary/40 after:border-t-2 after:border-dashed after:border-primary/40 text-sm font-medium">
              OR
            </div>
            {/* Google */}
            <button className="btn bg-base-100 text-secondary border-primary/15 hover:shadow-primary/5 hover:shadow-md">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </motion.form>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SignIn;
