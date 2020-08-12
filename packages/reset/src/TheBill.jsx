import React from "react";
import { useRecoilValue } from "recoil";

import { theBill } from "home/atoms";

const TheBill = () => {
  const bill = useRecoilValue(theBill);
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {bill.items.map((item) => (
          <tr key={item.name}>
            <th>{item.name}</th>
            <th>${item.price}</th>
            <th>{item.quantity}</th>
            <th>${item.total}</th>
          </tr>
        ))}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>${bill.total}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TheBill;
