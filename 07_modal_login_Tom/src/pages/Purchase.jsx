import React, { useState } from "react";
import { useCookies } from "react-cookie";

import { useDispatch, useSelector } from "react-redux";

import {
  selectCurrentUser,
  selectCurrentToken,
} from "../features/auth/authSlice";

import { useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useUpdateStockMutation,
} from "../features/products/productsSlice";
import style from "./Purchase.module.scss";

import { openModal } from "../features/modal/modalSlice";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import * as yup from "yup";
const schema = yup
  .object({
    email: yup
      .string()
      .email("Email address is wrong")
      .required("Email is required"),
  })
  .required();

import { useAddPurchaseHistoryMutation } from "../features/product_purchase_history/productPurchaseHistorySlice";

export const Purchase = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

  console.log("user, tokenを調べています");

  const user = cookies.user;
  const token = cookies.token;

  if (!user || !token) {
    return <div>ログインしてください</div>;
  }

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const params = useParams();
  const [productId, setProductId] = useState(params.productId);

  //在庫を1減らす
  const [updateStock] = useUpdateStockMutation();

  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductByIdQuery(productId);

  const [addPurchase] = useAddPurchaseHistoryMutation();

  if (isLoading) return <div>Loading...</div>;
  if (!product) return <div>取得できませんでした</div>;

  const clickPurchase = async (data) => {
    const response = await updateStock({ id: productId });
    console.log("response=", response);

    // data?はレスポンスにerrorが含まれていなくても評価してくれます optional
    //成功時にはresponse={}
    //失敗時には、responseに値が設定されている
    if (response.data) {
      console.log("response.status=", response.data.status);
      console.log("response.message=", response.data.message);
      dispatch(
        openModal({
          name: "thanks",
          title: response.data.message,
          open: true,
        })
      );
      return;
    }

    dispatch(
      openModal({
        name: "thanks",
        title: `${product.data.attributes.name}\nお買い上げありがとうございます。`,
        open: true,
      })
    );

    //購入履歴作成APIを呼び出す
    let body = {
      data: {
        user: user.id,
        product: product.data.id,
        price: product.data.attributes.price,
        quantity: 1,
      },
    };
    addPurchase({ body });
  };

  return (
    <div className={style.container}>
      <div className={style.box}>
        <div>商品ID:{productId}</div>
        <div>商品名：{product.data.attributes.name}</div>
        <div>
          価格：¥{Number(product.data.attributes.price).toLocaleString()}
          円(税込)
        </div>
        <div>在庫数：{product.data.attributes.stock}</div>
        <div>ユーザーID：{user.id}</div>
        <div>メールアドレス：{user.email}</div>
        <button onClick={clickPurchase} type="button">
          購入
        </button>
      </div>
    </div>
  );
};
