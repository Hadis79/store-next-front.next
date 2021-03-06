import { createContext } from "react";

export const InitContext = createContext({
  firstName: "",
  setFirstName: () => {},
  lastName: "",
  setLastName: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  confirmPassword: "",
  setConfirmPassword: () => {},
  userName: "",
  setUserName: () => {},
  address: "",
  setAddress: () => {},
  number: "",
  setNumber: () => {},
  city: "",
  setCity: () => {},
  street: "",
  setStreet: () => {},
  registerHandler: () => {},
  loginHandler: () => {},
  validator: null,
 
});
