import React, { useState, useEffect } from "react";
import Splash from "./screens/Splash";
import AppNavigator from "./Navigation";

export default function Main() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);

  return splash ? <Splash /> : <AppNavigator />;
}
