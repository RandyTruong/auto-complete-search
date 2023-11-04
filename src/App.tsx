import { FC, SyntheticEvent, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./App.css";
import { DisplayUser } from "./types/user";
import { useQuery } from "react-query";
import { fetchUsers } from "./services/api/users";
import { formatName, sortByLabel } from "./utils/helpers";

const App: FC = () => {
  const { data, error } = useQuery("users", fetchUsers);
  const [users, setUsers] = useState<DisplayUser[]>([]);
  const [value, setValue] = useState<DisplayUser | null>(null);

  const handleOnClick = (
    _: SyntheticEvent<Element, Event>,
    newValue: DisplayUser | null
  ) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (data) {
      const formattedUsers: DisplayUser[] = data.map((e) => {
        return { ...e, label: formatName(e.name) };
      });
      setUsers(sortByLabel(formattedUsers));
    }
  }, [data]);

  return (
    <div id="app-container">
      {error ? (
        <div id="fetch-error-message">Unable to fetch users</div>
      ) : (
        <Autocomplete
          disablePortal
          id="user-combo-box"
          options={users}
          sx={{ width: 300 }}
          onChange={handleOnClick}
          renderInput={(params) => <TextField {...params} label="Users" />}
        />
      )}

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
    </div>
  );
};

export default App;
