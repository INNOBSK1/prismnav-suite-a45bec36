import { User, Store, Leaf, Tractor, Dog, BookOpen } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar";

const siteLinks = [
  { title: "Plant Help", url: "https://planthelp.netlify.app/", icon: Leaf },
  { title: "NML Ani", url: "https://nmlani.netlify.app/", icon: Dog },
  { title: "Farm Tracker", url: "https://nmlfarmtracker.netlify.app/", icon: Tractor },
  { title: "NML Store", url: "https://nmlstore.netlify.app/", icon: Store },
  { title: "NML Blog", url: "https://nmlblog.netlify.app/", icon: BookOpen },
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
