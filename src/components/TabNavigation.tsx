
interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  const tabs = [
    { id: "travail", label: "Raccourcis liens internet", icon: "🌐" },
    { id: "personnel", label: "Raccourcis fichiers", icon: "📁" },
    { id: "outils", label: "Administratif : Absences / Heures", icon: "🏛️" }
  ];

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-xl shadow-lg p-2 inline-flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200
              ${activeTab === tab.id 
                ? 'bg-blue-500 text-white shadow-md transform scale-105' 
                : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
              }
            `}
          >
            <span className="text-lg">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
