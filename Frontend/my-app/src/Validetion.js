export const validetionschema = {
  emailId: {
    required: {
      value: true,
      message: "Email is Required",
    },
    pattern: {
      value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
      message: "Please enter a valid email address",
    },
  },
  password: {
    required: {
      value: true,
      message: "Password is Required",
    },
    pattern: {
      value:
        /^(?!.*\s)(?=.*[A-Z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/,
      message:
        "Password must contain at least one Special Symbol and at least one Uppercase Character and No Whitespaces",
    },
    minLength: {
      value: 6,
      message: "Password should be minimum 6 characters",
    },
  },
  fname: {
    required: {
      value: true,
      message: "This field is required",
    },
  },
  lname: {
    required: {
      value: true,
      message: "Password field is required",
    },
  },
  confrimpass: {
    required: {
      value: true,
      message: "this Filed is required!",
    },
  },
  gender: {
    required: {
      value: true,
      message: "Please Select Gender, it's Required",
    },
  },
  role: {
    required: {
      value: true,
      message: "Pleace select Role ,it's Required Filed!!",
    },
  },
};