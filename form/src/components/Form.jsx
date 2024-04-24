import Input from "@components/Input";
import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    fullname: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <p>Fullname: {form.fullname}</p>
      <p>Password: {form.password}</p>
      <Input
        name="fullname"
        placeholder="Enter your name"
        value={form.fullname}
        onChange={handleFormChange}
      ></Input>
      <Input
        name="password"
        placeholder="Enter your password"
        value={form.password}
        onChange={handleFormChange}
      ></Input>
    </form>
  );
}
