import React, { useState, useContext, ChangeEvent } from "react";
import AuthContext from "@/Components/context";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const datas = useContext(AuthContext);
  const [username, setUsername] = useState<string>("");

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="w-full flex justify-center">
      <div className="mt-48 flex justify-center w-2/3">
        <div className="w-full">
          <label htmlFor="" className="text-left text-lg mb-5">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
              datas.setUsern(e.target.value);
            }}
            className="w-full rounded py-2.5 border pl-2 mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default App;