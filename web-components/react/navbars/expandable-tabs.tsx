// Expandable Tabs - Navigation tabs that expand to show label on selection
// Source: https://21st.dev/community/components/victorwelander/expandable-tabs/default
// Author: Victor Welander (@victorwelander)
// Deps: usehooks-ts, lucide-react, framer-motion
// Tags: Tab, Navigation Menus, Menu, Control
// Features: Animated expansion, space-efficient, click-outside collapse, dark mode

import { Bell, Home, HelpCircle, Settings, Shield, Mail, User, FileText, Lock } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

// Default navigation example
function DefaultDemo() {
    const tabs = [
      { title: "Dashboard", icon: Home },
      { title: "Notifications", icon: Bell },
      { type: "separator" },
      { title: "Settings", icon: Settings },
      { title: "Support", icon: HelpCircle },
      { title: "Security", icon: Shield },
        ];
    return (
          <div className="flex flex-col gap-4">
                <ExpandableTabs tabs={tabs} />
          </div>div>
        );
}

// Custom color variation
function CustomColorDemo() {
    const tabs = [
      { title: "Profile", icon: User },
      { title: "Messages", icon: Mail },
      { type: "separator" },
      { title: "Documents", icon: FileText },
      { title: "Privacy", icon: Lock },
        ];
    return (
          <div className="flex flex-col gap-4">
                <ExpandableTabs
                          tabs={tabs}
                          activeColor="text-blue-500"
                          className="border-blue-200 dark:border-blue-800"
                        />
          </div>div>
        );
}

export { DefaultDemo, CustomColorDemo };</div>
