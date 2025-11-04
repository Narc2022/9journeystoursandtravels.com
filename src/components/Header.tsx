import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/9journeys-logo.jpg";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavLinks = () => (
    <>
      <a
        onClick={() => scrollToSection("services")}
        className="cursor-pointer hover:text-accent transition-colors"
      >
        Services
      </a>
      <a
        onClick={() => scrollToSection("cars")}
        className="cursor-pointer hover:text-accent transition-colors"
      >
        Our Fleet
      </a>
      <a
        onClick={() => scrollToSection("contact")}
        className="cursor-pointer hover:text-accent transition-colors"
      >
        Contact
      </a>
    </>
  );

  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="9Journeys Logo" className="w-12 h-12 rounded-full" />
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">9JOURNEYS</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          <NavLinks />
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-primary-foreground">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-6 mt-8 text-lg font-semibold">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
