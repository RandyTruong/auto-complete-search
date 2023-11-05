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
  const { data, error, isLoading } = useQuery("users", fetchUsers);
  const [users, setUsers] = useState<DisplayUser[]>([]);
  const [displayValue, setDisplayValue] = useState<DisplayUser | null>(null);

  const handleOnChange = (
    _: SyntheticEvent<Element, Event>,
    newValue: DisplayUser | null
  ) => setDisplayValue(newValue);

  useEffect(() => {
    if (data) {
      const formattedUsers = addLabelProperty(data);
      setUsers(sortByLabel(formattedUsers));
    }
  }, [data]);

  if (error) {
    return <div id="fetch-error-message">Unable to fetch users.</div>;
  }

  if (isLoading) {
    return <div id="loading-message">Loading...</div>;
  }

  return (
    <div className="app-container">
      <Autocomplete
        id="user-combo-box"
        data-testid="autocomplete"
        disablePortal
        options={users}
        sx={{ width: 300 }}
        onChange={handleOnChange}
        renderInput={(params) => <TextField {...params} label="Name" />}
      />
      <AddressInfo user={displayValue} />
    </div>
  );
};

export default App;
