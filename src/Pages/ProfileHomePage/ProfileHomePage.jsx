import React from "react";
import { useParams } from "react-router-dom";

function ProfileHomePage() {
  const { Id } = useParams();
  console.log(Id);
  return <div>ProfileHomePage</div>;
}

export default ProfileHomePage;
