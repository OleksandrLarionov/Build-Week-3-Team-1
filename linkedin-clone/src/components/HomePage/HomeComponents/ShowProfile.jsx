import React, { useEffect } from "react";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataAction } from "../../../redux/action";

const ShowProfile = () => {
  const mainUser = useSelector(
    (state) => state.user.userData && state.user.userData[0]
  )

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataAction());
  }, []); 

  

  return (
  <> {mainUser && <User user={mainUser} />}</>
   
  );
};

export default ShowProfile
