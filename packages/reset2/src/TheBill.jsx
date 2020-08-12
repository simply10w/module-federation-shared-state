import React from "react";
import { List, Avatar } from "antd";
import { useRecoilValue } from "recoil";

import { theBill } from "home/atoms";

const TheBill = () => {
  const bill = useRecoilValue(theBill);
  return (<div>
    <h3>Total: {bill.total}</h3>
    <List
      itemLayout="horizontal"
      dataSource={bill.items}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.image} />}
            title={item.name}
            description={item.price}
          />
        </List.Item>
      )} />
    </div>
  );
};

export default TheBill;
