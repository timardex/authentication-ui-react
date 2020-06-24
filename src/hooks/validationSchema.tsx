export const validationSchema = {
  firstName: {
    required: true,
    validator: {
      func: (value: string) => value.length >= 2,
      error: 'Please enter your first name',
    },
  },
  lastName: {
    required: true,
    validator: {
      func: (value: string) => value.length >= 2,
      error: 'Please enter your last name',
    },
  },
  postCode: {
    required: true,
    validator: {
      func: (value: string) => value.length >= 3,
      error: 'Please enter your postcode',
    },
  },
  dobDay: {
    required: true,
    validator: {
      func: (value: number) => value >= 1 && value <= 31 && value.toString().length === 2,
      error: 'Please include 2 digits',
    },
  },
  dobMonth: {
    required: true,
    validator: {
      func: (value: number) => value >= 1 && value <= 12 && value.toString().length === 2,
      error: 'Please include 2 digits',
    },
  },
  dobYear: {
    required: true,
    validator: {
      func: (value: number) => value <= new Date().getFullYear() - 18 && value.toString().length === 4,
      error: 'Please include 4 digits',
    },
  },
  email: {
    required: true,
    validator: {
      func: (value: string) =>
        /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        ),
      error: 'Invalid email address format',
    },
  },
  password: {
    required: true,
    validator: {
      func: (value: string) => value.length >= 6,
      error: 'Password is too short',
    },
  },
};
