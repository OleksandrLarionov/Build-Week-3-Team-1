import React, { useEffect } from "react";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataAction } from "../../../redux/action";

const ShowProfile = () => {
  const personalUserID = useSelector(state => state.access.id)
  const personalkey = useSelector(state => state.access.key)
  const mainUser = useSelector(
    (state) => state.user.userData && state.user.userData[0]
  )

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataAction(personalUserID, personalkey));
  }, []); 

  

  return (
  <> {mainUser && <User user={mainUser} />}</>
   
  );
};

export default ShowProfile
