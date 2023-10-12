"use client"
import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";

const Index: FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/auth");
  }, []);
  return (
    <></>
  );
};

export default Index;