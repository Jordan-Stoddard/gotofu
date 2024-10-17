import { action, input } from "@prismatic-io/spectral";

export const createEmployee = action({
  display: {
    label: "Create Employee",
    description: "Make a request to the Create Employee API endpoint",
  },
  perform: async (context) => {
    return {
      data: {},
    };
  },
  inputs: {
    connection: { type: "connection", required: false, label: "Connection" },
    firstName: { label: "Firstname", type: "string", required: false },
    lastName: { label: "Lastname", type: "string", required: false },
    address: { label: "Address", type: "string", required: false },
    phone: { label: "Phone", type: "string", required: false },
  },
});

export const updateEmployee = action({
  display: {
    label: "Update Employee",
    description: "Make a request to the Update Employee API endpoint",
  },
  perform: async (context) => {
    return {
      data: {},
    };
  },
  inputs: {
    connection: { type: "connection", required: false, label: "Connection" },
    pk: { label: "Email", key: "email", type: "string", required: true },
    firstName: { label: "Firstname", type: "string", required: false },
    lastName: { label: "Lastname", type: "string", required: false },
    address: { label: "Address", type: "string", required: false },
    phone: { label: "Phone", type: "string", required: false },
  },
});

export const deleteEmployee = action({
  display: {
    label: "Delete Employee",
    description: "Make a request to the Delete Employee API endpoint",
  },
  perform: async (context) => {
    return {
      data: {},
    };
  },
  inputs: {
    connection: { type: "connection", required: false, label: "Connection" },
    pk: { label: "Email", key: "email", type: "string", required: true },
  },
});

export const getEmployee = action({
  display: {
    label: "Get Employee",
    description: "Make a request to the Get Employee API endpoint",
  },
  perform: async (context) => {
    return {
      data: {},
    };
  },
  inputs: {
    connection: { type: "connection", required: false, label: "Connection" },
    pk: { label: "Email", key: "email", type: "string", required: true },
  },
});

export const listEmployee = action({
  display: {
    label: "List Employee",
    description: "Make a request to the List Employee API endpoint",
  },
  perform: async (context) => {
    return {
      data: {},
    };
  },
  inputs: {
    connection: { type: "connection", required: false, label: "Connection" },
  },
});

export const searchEmployee = action({
  display: {
    label: "Search Employee",
    description: "Make a request to the Search Employee API endpoint",
  },
  perform: async (context) => {
    return {
      data: {},
    };
  },
  inputs: {
    connection: { type: "connection", required: false, label: "Connection" },
    pk: { label: "Email", key: "email", type: "string", required: true },
  },
});
