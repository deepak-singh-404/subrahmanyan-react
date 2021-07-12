import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const { profile, isAuthenticated } = useSelector((state) => state.userRoot);
  return (
    <div>
      {isAuthenticated && (
        <div>
          <h3>{profile.email}</h3>
          <h3>{profile.name}</h3>
          <img src={profile.imageUrl} />
        </div>
      )}
    </div>
  );
};

export default Profile;
