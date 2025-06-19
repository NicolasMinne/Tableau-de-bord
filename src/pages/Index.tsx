
import { useState } from "react";
import { TabNavigation } from "@/components/TabNavigation";
import { ShortcutCard } from "@/components/ShortcutCard";

const Index = () => {
  const [activeTab, setActiveTab] = useState("travail");

  const shortcuts = {
    travail: [
      {
        title: "JIRA",
        description: "Jira shortcut",
        url: "https://carrier.atlassian.net/jira/software/c/projects/GOLD/boards/1517",
        icon: ""
      },
      {
        title: "Carrier test base",
        description: "Carrier test environment shortcut",
        url: "https://carrier.oktapreview.com/app/UserHome?session_hint=AUTHENTICATED",
        icon: ""
      },
      {
        title: "SAP test base DF1/200",
        description: "SAP test base DF1/200 fiori",
        url: "https://ascsdf1.apps.carrier.com:44300/sap/bc/ui2/flp?sap-client=200&sap-language=EN#Shell-home",
        icon: ""
      },
      {
        title: "SAP test base DS1/200",
        description: "SAP test base DS1/200 sap gui",
        url: "https://ascsds1.apps.carrier.com:44300/sap/bc/gui/sap/its/webgui?sap-client=200&sap-language=EN#",
        icon: ""
      }
    ],
    personnel: [
      {
        title: "JIRA data base",
        description: "Shortcut to JIRA Excel file data base",
        url: "https://carcgl.sharepoint.com/:x:/r/sites/CTIS4HANA/Shared Documents/General/002 - Rouen All processes/All_User_Stories_Rouen_BDD.xlsx?d=wa0d95e432859433cba17bc4756aab371&csf=1&web=1&e=vzkz4N",
        icon: ""
      },
      {
        title: "Operational reportings list",
        description: "Operational reportings shortcut",
        url: "https://carcgl.sharepoint.com/:x:/s/CTIS4HANA/ETyE9h63P8pGid8p4tuQF0sB5iM4fb4etW60AnUEzqnDzQ",
        icon: ""
      },
      {
        title: "CM template",
        description: "Change management template shortcut",
        url: "https://carcgl.sharepoint.com/:x:/r/sites/CTIS4HANA/Shared%20Documents/General/0094%20Rouen%20Change%20Management/CM%20tempate.xlsx?d=w7df7cc424a7e4a60a616ff11430210b6&csf=1&web=1&e=5CdpTL",
        icon: ""
      },
      {
        title: "WIP",
        description: "WIP",
        url: "",
        icon: "📸"
      }
    ],
    outils: [
      {
        title: "Absence plan",
        description: "Absence plan shortcut",
        url: "https://carcgl.sharepoint.com/:x:/r/sites/CTIS4HANA/Shared Documents/General/0 - Rouen PMO/12_Project team/Goldfish - Absence plan 2025.xlsx?d=wf350ff2e52354d34b1e5666a9e3ea0c5&csf=1&web=1&e=0A6M5r",
        icon: ""
      },
      {
        title: "Part-time Key Users",
        description: "Part-time Key Users Timesheet shortcut",
        url: "https://carcgl.sharepoint.com/:x:/r/sites/CTIS4HANA/Shared Documents/General/0 - Rouen PMO/12_Project team/Goldfish part-time KU Timesheet.xlsx?d=w6558683957894547b0c2c7bfa7ea0d04&csf=1&web=1&e=9OoPvc",
        icon: ""
      },
      {
        title: "WIP",
        description: "WIP",
        url: "",
        icon: "🎨"
      },
      {
        title: "WIP",
        description: "WIP",
        url: "",
        icon: "🤖"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Mes Raccourcis
          </h1>
          <p className="text-lg text-gray-600">
            Organisez et accédez rapidement à vos sites favoris
          </p>
        </header>

        <TabNavigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
        />

        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {shortcuts[activeTab as keyof typeof shortcuts].map((shortcut, index) => (
              <ShortcutCard
                key={index}
                title={shortcut.title}
                description={shortcut.description}
                url={shortcut.url}
                icon={shortcut.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
