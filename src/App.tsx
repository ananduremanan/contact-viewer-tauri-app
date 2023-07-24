import { invoke } from "@tauri-apps/api";
import Layout from "./Components/Layout";

export default function App() {
  invoke("greet", { name: "World" }).then((response) => console.log(response));
  return <Layout />;
}
