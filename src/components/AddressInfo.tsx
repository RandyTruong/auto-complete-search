import { FC } from "react";
import { DisplayUser } from "../types/user";

type AddressInfo = {
  user: DisplayUser | null;
};

const AddressInfo: FC<AddressInfo> = ({ user }) => (
  <div id="user-info-container" className="user-info">
    {user && (
      <>
        <p id="user-label">{user.label}</p>
        <p id="user-street">{user.address.street}</p>
        <p id="user-suite">{user.address.suite}</p>
        <p id="user-zipcode">{user.address.zipcode}</p>
      </>
    )}
  </div>
);

export default AddressInfo;
