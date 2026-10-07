import { User, Store, Leaf, Tractor, Dog, BookOpen } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar";

const siteLinks = [
  { title: "Plant Help", url: "/site/plant-help", icon: Leaf, externalUrl: "https://planthelp.netlify.app/" },
  { title: "NML Ani", url: "/site/nml-ani", icon: Dog, externalUrl: "https://nmlani.netlify.app/" },
  { title: "Farm Tracker", url: "/site/farm-tracker", icon: Tractor, externalUrl: "https://nmlfarmtracker.netlify.app/" },
  { title: "NML Store", url: "/site/nml-store", icon: Store, externalUrl: "https://nmlstore.netlify.app/" },
  { title: "NML Blog", url: "/site/nml-blog", icon: BookOpen, externalUrl: "https://nmlblog.netlify.app/" },
];

export function AppSidebar() {
  const { open, setOpen, setOpenMobile } = useSidebar();
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const handleNavClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    } else {
      setOpen(false);
    }
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t.sidebar.sites}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {siteLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} onClick={handleNavClick} className={({ isActive }) => isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}>
                      <item.icon className="h-4 w-4" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>{t.sidebar.account}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/" onClick={handleNavClick} className={({ isActive }) => isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}>
                    <User className="h-4 w-4" />
                    {open && <span>{t.sidebar.dashboard}</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  );
}
