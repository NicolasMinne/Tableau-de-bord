
interface ShortcutCardProps {
  title: string;
  description: string;
  url: string;
  icon: string;
}

export const ShortcutCard = ({ title, description, url, icon }: ShortcutCardProps) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 group"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl group-hover:scale-110 transition-transform duration-200">
            {icon}
          </div>
          <div className="w-3 h-3 bg-green-400 rounded-full opacity-70"></div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-xs text-blue-500 font-medium group-hover:text-blue-700 transition-colors">
            Cliquer pour ouvrir →
          </span>
        </div>
      </div>
    </div>
  );
};
