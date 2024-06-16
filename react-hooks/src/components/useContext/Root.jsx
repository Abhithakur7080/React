import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const Root = () => {
  return (
    <div>
      <UserContext.Provider value={"Abhijeet"}>
        <ChannelContext.Provider value={"AK studio"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default Root;
