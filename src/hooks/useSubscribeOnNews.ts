import { ChangeEvent, useState, FormEvent } from "react";
import { postNewsSubscription } from "../api/productsApi";

export const useSubscribeOnNews = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [resolve, setResolve] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = {
      email: inputValue,
    };
    const result = await postNewsSubscription(email);
    setResolve(result.resolve);
  };

  return { resolve, handleChange, handleSubmit };
};
