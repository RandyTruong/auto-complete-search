import { FC } from "react";
import { DisplayUser } from "../types/user";

type AddressInfo = {
  user: DisplayUser | null;
};

const AddressInfo: FC<AddressInfo> = ({ user }) =>
  user && (
    <div id="user-info-container" className="user-info">
      <p>{user.label}</p>
      <p>{user.address.street}</p>
      <p>{user.address.suite}</p>
      <p>{user.address.zipcode}</p>
    </div>
  );

export default AddressInfo;
