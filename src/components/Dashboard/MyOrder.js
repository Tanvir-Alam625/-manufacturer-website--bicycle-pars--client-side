import React, { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../Spinner/Spinner";
import Order from "./Order";

const MyOrder = () => {
  //   const [orders, setOrders] = useState([]);
  //   fetch("http://localhost:5000/orders", {
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("access-token")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setOrders(data);
  //     });
  const {
    isLoading,
    error,
    data: orders,
    refetch,
  } = useQuery("orders", () =>
    fetch("http://localhost:5000/orders").then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="px-2">
      <h2 className="text-2xl font-semibold text-accent my-8 ml-4">My Order</h2>

      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Order Cancel</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {orders.map((order, index) => (
              <Order
                key={order._id}
                data={order}
                index={index}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
