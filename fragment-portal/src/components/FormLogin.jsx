import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import MyInput from "./MyInput";
import MyLabel from "./MyLabel";

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});

export default function FormLogin() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (values) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        console.log(values);
      }, 2000);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-[10px] ">
          <MyLabel name="email">Email address</MyLabel>
          <MyInput
            type="text"
            name="email"
            id="email"
            control={control}
            placeholder="Enter your email"
          ></MyInput>
          {errors.email && (
            <p className="text-red-500 text-sm leading-[21px]">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-[10px] mt-5">
          <MyLabel name="password">Password</MyLabel>
          <MyInput
            type="password"
            name="password"
            id="password"
            control={control}
            placeholder="Enter your password"
          ></MyInput>
          {errors.password && (
            <p className="text-red-500 text-sm leading-[21px]">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex mt-3 justify-end">
          <a
            href="#"
            className="text-sm leading-[21px] font-medium text-[#316BFF]"
          >
            Forgot your password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full h-12 text-white text-xl leading-[26px] font-bold rounded-lg bg-[#316BFF] mt-5"
        >
          Sign in
        </button>
        <p className="text-sm leading-[21px] font-normal text-center mt-5 ">
          {" "}
          Don't have an account?{" "}
          <span className="font-medium text-[#316BFF]">Sign up</span>
        </p>
      </form>
    </>
  );
}
