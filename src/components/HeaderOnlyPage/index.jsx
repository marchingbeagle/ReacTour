import Header from "components/Header";
import { Outlet } from "react-router-dom";

function HeaderOnlyPage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default HeaderOnlyPage;
