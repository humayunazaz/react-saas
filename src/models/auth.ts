export interface ILoginSignupForm {
  email?: string;
  password?: string;
  resetPassword?: string;
}

export interface IAuthFormProps {
  submitFormValueHandler: (formData: ILoginSignupForm) => void;
  isLogin: boolean;
  isForgotPassword: boolean;
  isResetPassword: boolean;
}
