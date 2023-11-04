import { FC } from "react";
import { DisplayUser } from "../types/user";

type AddressInfo = {
  value: DisplayUser | null;
};

const AddressInfo: FC<AddressInfo> = ({ value }) => (
  <div id="user-info-container" className="user-info">
    {value && (
      <>
        <p id="user-label">{value.label}</p>
        <p id="user-street">{value.address.street}</p>
        <p id="user-suite">{value.address.suite}</p>
        <p id="user-zipcode">{value.address.zipcode}</p>
      </>
    )}
  </div>
);

export default AddressInfo;
