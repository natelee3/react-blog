import React from "react";
import { useHistory } from "react-router-dom";

export default (props) => {
  const history = useHistory();

  if (!props.isLoggedIn) {
    history.push("/");
    return null;
  } else {
    return <>{props.children}</>;
  }
};
