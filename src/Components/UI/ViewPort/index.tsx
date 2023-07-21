import WelcomeScreen from "./WelcomeScreen";
import { Route, Routes } from "react-router-dom";
import ContactCard from "./ContactCard";

export default function ViewPort(contactData: any) {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route
        path="users/:userId"
        element={<ContactCard contactData={contactData} />}
      />
    </Routes>
  );
}
