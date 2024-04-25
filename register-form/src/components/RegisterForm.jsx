import { useForm } from "react-hook-form";
import MyInput from "./MyInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import MyLabel from "./MyLabel";
import MyRadioButton from "./MyRadioButton";
import MySelectBox from "./MySelectBox";
import MyCheckBox from "./MyCheckbox";

const validationSchema = Yup.object({
  username: Yup.string().required("This field is required"),
  password: Yup.string()
    .required("This field is required")
    .min(8, "Password must be equal or greater than 8 characters"),
  email: Yup.string().email().required("This field is required"),
  gender: Yup.string().oneOf(["male", "female"], "Invalid value"),
  job: Yup.string().oneOf(
    ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
    "Invalid value"
  ),
  term: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),
});

export default function RegisterForm() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
      gender: "",
      job: "",
      term: false,
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(values);
        reset();
      }, 2000);
    });
  };

  return (
    <form
      className="w-full max-w-[500px] mx-auto p-10 flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <MyLabel for="username">Username</MyLabel>
        <MyInput
          type="text"
          id="username"
          name="username"
          className="w-[300px] h-[50px] rounded-[4px] border border-gray-300 focus:border-[#2979FF]  p-[15px] focus-visible:border-[#2979FF]"
          placeholder="Enter your username"
          control={control}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <MyLabel for="password">Password</MyLabel>
        <MyInput
          type="password"
          id="password"
          name="password"
          className="w-[300px] h-[50px] rounded-[4px] border border-gray-300 focus:border-[#2979FF]  p-[15px] focus-visible:border-[#2979FF]"
          placeholder="Enter your password"
          control={control}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <MyLabel for="email">Email address</MyLabel>
        <MyInput
          type="email"
          id="email"
          name="email"
          className="w-[300px] h-[50px] rounded-[4px] border border-gray-300 focus:border-[#2979FF]  p-[15px] focus-visible:border-[#2979FF]"
          placeholder="Enter your email address"
          control={control}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <MyLabel>Gender</MyLabel>
        <div className="flex gap-3">
          <MyRadioButton name="gender" id="male" value="male" control={control}>
            Male
          </MyRadioButton>
          <MyRadioButton
            name="gender"
            id="female"
            value="female"
            control={control}
          >
            Female
          </MyRadioButton>
        </div>
        {errors.gender && (
          <p className="text-red-500">{errors.gender.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <MyLabel>Are you</MyLabel>
        <MySelectBox control={control} name="job" id="job">
          <option value="" disabled>
            Select your job
          </option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Fullstack Developer">Fullstack Developer</option>
        </MySelectBox>
        {errors.job && <p className="text-red-500">{errors.job.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <MyCheckBox name="term" id="term" control={control}>
          I accept the terms and conditions
        </MyCheckBox>
        {errors.term && <p className="text-red-500">{errors.term.message}</p>}
      </div>
      <button
        type="submit"
        className="w-[300px] h-[50px] bg-[#2979FF] rounded text-base font-bold text-white flex items-center justify-center gap-2"
      >
        {isSubmitting && (
          <div className="w-5 h-5 border-2 border-white border-t-4 border-t-transparent rounded-full animate-spin"></div>
        )}
        Submit
      </button>
    </form>
  );
}
