import * as yup from "yup";
 
export const schema = yup
  .object({
    username: yup
      .string()
      .required("お名前が入力されていません"),
		email: yup
      .string()
			// .email("Email address is wrong")
      .required("メールアドレスが入力されていません"),
    age: yup
      .number()
      .required("電話番号が入力されていません"),
    
  })
  .required();