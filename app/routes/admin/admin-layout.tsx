import {Outlet} from "react-router";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      Mobilny Pasek Boczny
      <aside className="w-full max-w-[270px] hidden lg:block">Pasek Boczny</aside>
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  )
}

export default AdminLayout