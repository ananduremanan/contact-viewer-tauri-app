import SearchBar from "./SearchBar";
import Contacts from "./Contacts";
import Menu from "./Menu";

export default function Sidebar(contactData: any) {
  console.log(contactData.contactData)
  return (
    <div>
      <SearchBar />
      <Contacts contactData={contactData} />
      <Menu />
    </div>
  );
}
