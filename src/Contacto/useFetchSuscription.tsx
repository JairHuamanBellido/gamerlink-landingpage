import axios from "axios";
import { useState } from "react";

export const useFetchSuscription = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success,setSuccess] = useState<boolean>(false)
  const PostSuscription = async ({ name, email }): Promise<void> => {
    setLoading(true);
    try {
      await axios.post("https://api.gamerlink.xyz/", { name, email });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setSuccess(true)
    }
  };

  return { PostSuscription, loading,success };
};
