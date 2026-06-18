import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
import type { MenuItem } from "primereact/menuitem";

const Navbar = () => {
  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
      url: "/",
    },
    {
      label: "Students",
      icon: "pi pi-users",
      url: "/student",
    },
    {
      label: "Teachers",
      icon: "pi pi-user",
    },
    {
      label: "Batch",
      icon: "pi pi-book",
    },
    {
      label: "Admin",
      icon: "pi pi-key",
    },
  ];

  const start = (
    <img
      alt="logo"
      src="/images/logo-search-grid-2x.png"
      height="40"
      className="mr-2 hidden md:block"
    ></img>
  );

  const end = (
    <div className="flex align-items-center gap-2">
      <InputText
        placeholder="Search"
        type="text"
        className="w-8rem sm:w-auto"
      />
      <Avatar image="/images/avatar.jpg" shape="circle" />
    </div>
  );
  return (
    <div>
      <Menubar model={items} start={start} end={end} />
    </div>
  );
};

export default Navbar;
