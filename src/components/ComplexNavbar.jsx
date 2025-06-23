import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  MobileNav,
} from "@material-tailwind/react";
import { Bars2Icon } from "@heroicons/react/24/solid";

export function SimpleNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    });
  }, []);

  const navItems = [
    { label: "Accueil", href: "#home" },
    { label: "Fonctionnement", href: "#fonctionnement" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 shadow-md rounded-none lg:rounded-full">
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          className="mr-4 text-xl font-bold text-blue-600 cursor-pointer"
        >
          DM-GP Express
        </Typography>

        <div className="hidden lg:flex gap-6">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outlined" size="sm">
            Connexion
          </Button>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-black lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
        </div>
      </div>

      <MobileNav open={openNav} className="lg:hidden">
        <div className="flex flex-col gap-4 mt-4">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="block text-gray-800 hover:text-blue-600 font-medium"
              onClick={() => setOpenNav(false)}
            >
              {label}
            </a>
          ))}
          <Button variant="outlined" size="sm" fullWidth>
            Connexion
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
