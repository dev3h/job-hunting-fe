import { RouterProvider } from "react-router";
import router from "./config/route";


export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  );
}
