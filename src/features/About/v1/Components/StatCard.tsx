import React from 'react';

const StatCard = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center space-x-4">
      <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
        {icon}
      </div>
      <div>
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          {value}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
      </div>
    </div>
  );
};

export default StatCard;
