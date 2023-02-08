import * as yup from "yup";
 
export const schema = yup
  .object({
    onamae: yup
      .string()
      .required("お名前正しくないです"),
    phone: yup
      .string()
      .required("もう一度確認して下さい"),
    username: yup
      .string()
      .required("Username is required")
      .min(4, "Username must be at least 4 letters long")
      .max(10, "Username must not be 10 letters long"),
		email: yup
      .string()
			.email("Email address is wrong")
      .required("Email is required"),
    oteavase: yup
      .number()
      .required("入力されてません")
      .max(70, "")
      .min(18, "入力されてません"),  
  })
  .required();