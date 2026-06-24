// Tubelight Navbar - Navigation bar with animated glowing indicator
// Source: https://21st.dev/community/components/ayushmxxn/tubelight-navbar/default
// Author: Serenity UI (@ayushmxxn)
// Deps: lucide-react, framer-motion
// Tags: Navigation Menus, Landing Page
// Features: Animated tab indicator with glowing effect, responsive, dark/light mode,
// frosted glass effect for active state, smooth Framer Motion transitions

import { Home, User, Briefcase, FileText } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavBarDemo() {
    const navItems = [
      { name: 'Home', url: '#', icon: Home },
      { name: 'About', url: '#', icon: User },
      { name: 'Projects', url: '#', icon: Briefcase },
      { name: 'Resume', url: '#', icon: FileText }
        ];

  return <NavBar items={navItems} />;
}
