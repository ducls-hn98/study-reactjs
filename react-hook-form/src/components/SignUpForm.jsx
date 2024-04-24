import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useEffect } from "react";

const schema = Yup.object({
  firstName: Yup.string()
    .required("This field is required")
    .max(10, "This field can not greater than 10 characters"),
  lastName: Yup.string()
    .required("This field is required")
    .max(10, "This field can not greater than 10 characters"),
  email: Yup.string().email().required(),
  job: Yup.string(),
  terms: Yup.boolean().oneOf([true]),
});

export default function SignUpForm() {
  const {
    register,
    handleSubmit,

    setFocus,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  const onSubmit = async (values) => {
    const data = await fetch("http://hn.algolia.com/api/v1/search?query=...");
    console.log(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto flex flex-col gap-3"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <MyInput
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
          control={control}
        ></MyInput>
        {errors.firstName && (
          <span className="text-red-500 text-sm">
            {errors.firstName.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="lastName">Last Name</label>
        <MyImproveInput
          type="text"
          control={control}
          name="lastName"
          id="lastName"
          placeholder="Enter your last name"
        ></MyImproveInput>
        {errors.lastName && (
          <span className="text-red-500 text-sm">
            {errors.lastName.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <MyInput
          control={control}
          name="email"
          id="email"
          placeholder="Enter your email"
        ></MyInput>
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="job">Job</label>
        <MySelectBox control={control} id="job" name="job">
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Fullstack Developer">Fullstack Developer</option>
        </MySelectBox>
        {errors.job && (
          <span className="text-red-500 text-sm">{errors.job.message}</span>
        )}
      </div>
      <div className="flex gap-2 items-center">
        <input type="checkbox" name="terms" id="terms" {...register("terms")} />
        <span>I agree the terms and conditions</span>
      </div>
      {errors.terms && (
        <span className="text-red-500 text-sm">{errors.terms.message}</span>
      )}
      <button
        type="submit"
        className="flex items-center justify-center gap-2 w-full p-4 bg-blue-600 text-white font-semibold rounded-lg mt-2 disabled:bg-gray-400"
        disabled={isSubmitting}
      >
        {isSubmitting && (
          <div className="w-5 h-5 border-2 border-white border-t-4 border-t-transparent rounded-full animate-spin"></div>
        )}
        Submit
      </button>
    </form>
  );
}

const MyInput = ({ control, ...props }) => {
  return (
    <Controller
      control={control}
      name={props.name}
      defaultValue=""
      render={({ field }) => (
        <input
          type="text"
          className="p-4 rounded-sm border border-gray-100"
          {...props}
          {...field}
        />
      )}
    ></Controller>
  );
};

const MyImproveInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });

  return (
    <input
      className="p-4 rounded-sm border border-gray-100"
      {...props}
      {...field}
    />
  );
};

const MySelectBox = ({ control, ...props }) => {
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field }) => (
        <select
          className="p-4 rounded-sm border border-gray-100"
          {...field}
          {...props}
        >
          {props.children}
        </select>
      )}
    ></Controller>
  );
};
