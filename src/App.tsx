import { FC, SyntheticEvent, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./App.css";
import { DisplayUser } from "./types/user";
import { useQuery } from "react-query";
import { fetchUsers } from "./services/api/users";
import { addLabelProperty, sortByLabel } from "./utils/helpers";
import AddressInfo from "./components/AddressInfo";

const App: FC = () => {
  const { data, error } = useQuery("users", fetchUsers);
  const [users, setUsers] = useState<DisplayUser[]>([]);
  const [value, setValue] = useState<DisplayUser | null>(null);

  const handleOnChange = (
    _: SyntheticEvent<Element, Event>,
    newValue: DisplayUser | null
  ) => setValue(newValue);

  useEffect(() => {
    if (data) {
      const formattedUsers = addLabelProperty(data);
      setUsers(sortByLabel(formattedUsers));
    }
  }, [data]);

  return (
    <div id="app-container">
      {error ? (
        <div id="fetch-error-message">Unable to fetch users</div>
      ) : (
        <>
          <Autocomplete
            disablePortal
            id="user-combo-box"
            options={users}
            sx={{ width: 300 }}
            onChange={handleOnChange}
            renderInput={(params) => <TextField {...params} label="Users" />}
          />
          <AddressInfo value={value} />
        </>
      )}
    </div>
  );
};

export default App;
