import React, { useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  // onpage load.
  useEffect(() => {
    // localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your emial inbox for the reciept.</p>
        <p className="description">
          If you have any questions, please email
          <a href="mailto:order@example.com" className="email">
            oeder@ecample.com
          </a>
        </p>
        <Link href="/">
          <button className="btn" type="button" width="300px">
            {" "}
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
