import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <div className="flex flex-col gap-2 text-left">
        <label htmlFor={props.id}>{label}</label>
        <input
          type={props.type || "text"}
          className="p-4 rounded-sm border-gray-100"
          {...props}
          {...field}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <div className="flex flex-col gap-2 text-left">
        <label htmlFor={props.id}>{label}</label>
        <input
          type="textarea"
          className="p-4 rounded-sm border-gray-100 h-[150px]"
          {...props}
          {...field}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <div className="flex flex-col gap-2 text-left">
        <label htmlFor={props.id}>{label}</label>
        <select
          className="p-4 rounded-sm border-gray-100"
          {...props}
          {...field}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <div className="flex gap-2 items-center ">
        <input
          type="checkbox"
          checked={field.value}
          {...field}
          {...props}
        ></input>
        <label htmlFor={props.id} className="text-left">
          {label}
        </label>
      </div>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default function SignUpForm() {
  // const form = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     lastName: "",
  //   },
  //   validationSchema: Yup.object({
  //     firstName: Yup.string()
  //       .max(20, "Must be 20 characters or less")
  //       .required("Required"),
  //     lastName: Yup.string()
  //       .max(10, "Must be 10 characters or less")
  //       .required("Required"),
  //   }),
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        intro: Yup.string(),
        job: Yup.string(),
        terms: Yup.boolean().oneOf(
          [true],
          "Please read the terms and conditions"
        ),
      })}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.setSubmitting(false);
          actions.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            terms: false,
          });
        }, 5000);
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="p-10 w-full max-w-[500px] mx-auto">
          <Input
            label="First Name"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
          ></Input>
          <Input
            label="Last Name"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
          ></Input>
          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
          ></Input>
          <MyTextArea
            label="Intro"
            id="intro"
            name="intro"
            type="textarea"
            placeholder="Enter your intro"
          ></MyTextArea>
          <MySelectBox label="Job" id="job" name="job">
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Fullstack Developer</option>
          </MySelectBox>
          <MyCheckBox
            label="I accept the terms and conditions"
            name="terms"
            id="terms"
          ></MyCheckBox>
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg mt-2 disabled:bg-gray-400"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
