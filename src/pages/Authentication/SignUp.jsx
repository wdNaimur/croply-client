import React, { useEffect } from "react";
import LeftHeading from "../shared/LeftHeading";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
  const { createUser } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const passwordValue = watch("password");
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mx-auto w-full lg:mt-0 lg:mb-0 mt-20 mb-10 lg:p-0 p-5">
      <AnimatePresence>
        <motion.form
          layout
          onSubmit={handleSubmit(onSubmit)}
          className="fieldset bg-base-200 border-primary/10 shadow-xl shadow-primary/10 rounded-box border px-5 py-8 xl:max-w-xl lg:max-w-[28.8rem] sm:max-w-[80vw] max-w-screen mx-auto"
        >
          {/* Heading  */}
          <div className="border-b-2 border-b-primary/40 border-dashed mb-4">
            <LeftHeading
              title={`Create an Account`}
              subtitle={`Register with Croply`}
            />
          </div>
          {/* Name input  */}
          <label className="label font-bold ps-1">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input border-0 focus:outline-primary/40 shadow-none focus:shadow-none w-full"
            placeholder="Name"
          />
          {/* Email input  */}
          <label className="label font-bold ps-1">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input border-0 focus:outline-primary/40 shadow-none focus:shadow-none w-full"
            placeholder="Email"
          />
          {/* Password input  */}
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
          {/* Password Error show  */}
          <motion.div layout>
            <AnimatePresence mode="sync">
              {errors?.password && (
                <motion.p
                  key="password-error"
                  initial={{ opacity: 0, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="text-red-400 text-sm mt-1 ps-1"
                >
                  {errors?.password?.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
          {/* Confirm Password */}
          <label className="label font-bold ps-1 mt-4">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: (value) =>
                value === passwordValue || "Passwords do not match",
            })}
            className="input w-full border-0 shadow-none focus:outline-primary/40"
            placeholder="Confirm Password"
          />
          {/* confirm password error show  */}
          <motion.div layout>
            <AnimatePresence mode="sync">
              {errors?.confirmPassword && (
                <motion.p
                  key="confirm-password-error"
                  initial={{ opacity: 0, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="text-red-400 text-sm mt-1 ps-1"
                >
                  {errors.confirmPassword.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
          {/* sign up button  */}
          <button
            type="submit"
            className="btn btn-secondary border-none shadow-primary/10 mt-4 text-base-100"
          >
            Sign Up
          </button>
          {/* Sign in link  */}
          <span className="flex gap-2 ps-1 opacity-90">
            <p>Already have an account?</p>
            <button>
              <Link to="/signin" className="link link-primary">
                Sign In
              </Link>
            </button>
          </span>
          {/* divider  */}
          <div className="divider text-secondary bg-transparent before:bg-transparent after:bg-transparent before:border-t-2 before:border-dashed before:border-primary/40 after:border-t-2 after:border-dashed after:border-primary/40 text-sm font-medium">
            OR
          </div>
          {/* Google Sign up */}
          <SocialLogin />
        </motion.form>
      </AnimatePresence>
    </div>
  );
};

export default SignUp;
