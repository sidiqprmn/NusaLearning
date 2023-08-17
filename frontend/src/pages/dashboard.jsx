import React, { useState, useEffect } from "react";
import SidebarProfile from "../components/layout/sidebar/sidebar";
import NavigationBar from "../components/layout/navigationBar/navigationBar";
import axios from "axios";

function DashboardProfile() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [userData, setUserData] = useState({ username: "", email: "" });

  useEffect(() => {
    axios
      .get(`http://localhost:3100/user/2`)
      .then((response) => {
        console.log("User Data:", response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <NavigationBar />

      <div className="flex-row flex">
        <SidebarProfile
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          userData={userData}
        />
        <main className="flex-1 p-8">
          <h1>Hai Gaes, ini halaman Dashboard</h1>
        </main>
      </div>
    </>
  );
}

export default DashboardProfile;
