import React, { FC, useEffect, useState } from "react";

interface Step {
  id: number;
  name: string;
  active: boolean;
}

interface Step6 {
  step6: Step[];
}

const Index: FC = () => {
  const [array, setArray] = useState<Step6[]>([
    {
      step6: [
        {
          id: 1,
          name: "Leisure",
          active: false,
        },
        {
          id: 2,
          name: "Entertainment",
          active: false,
        },
        {
          id: 3,
          name: "Healthcare",
          active: false,
        },
        {
          id: 4,
          name: "Aerospace",
          active: false,
        },
        {
          id: 5,
          name: "Law",
          active: false,
        },
        {
          id: 6,
          name: "Agriculture",
          active: false,
        },
        {
          id: 7,
          name: "Healthcare",
          active: false,
        },
        {
          id: 8,
          name: "Energy",
          active: false,
        },
        {
          id: 9,
          name: "Fashion",
          active: false,
        },
        {
          id: 10,
          name: "Finance",
          active: false,
        },
        {
          id: 11,
          name: "Food/Beverages",
          active: false,
        },
        {
          id: 12,
          name: "Media/New",
          active: false,
        },
      ],
    },
  ]);

  useEffect(() => {
    if (!localStorage.getItem("InterestData")) {
      function checkUserData(): void {
        localStorage.setItem("InterestData", JSON.stringify(array));
      }
      checkUserData();
    }
  }, []);

  return <></>;
}

export default Index