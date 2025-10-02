import React, { useState, useMemo } from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';
import {
  FaGithub,
  FaCode,
  FaFire,
  FaTrophy,
  FaCalendarAlt,
  FaChartLine,
} from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import { BsGraphUp, BsCalendarCheck, BsBarChartLine } from 'react-icons/bs';
import { Platform, PlatformFilter } from '../type/Calender.type';
import { contributionData } from '../constant/Calender.constant';

const platforms: Platform[] = ['github', 'leetcode', 'codeforces', 'other'];

const colorSchemes: Record<Platform, string[]> = {
  github: ['#1b1b1b', '#0e4429', '#006d32', '#26a641', '#39d353'],
  leetcode: ['#1b1b1b', '#473c0a', '#7e5f12', '#bb8a13', '#ffc01e'],
  codeforces: ['#1b1b1b', '#132340', '#1d3461', '#2563eb', '#60a5fa'],
  other: ['#1b1b1b', '#2e1065', '#4c1d95', '#7e22ce', '#a855f7'],
};

const platformIcons = {
  github: <FaGithub className="text-lg" />,
  leetcode: <SiLeetcode className="text-lg" />,
  codeforces: <SiCodeforces className="text-lg" />,
  other: <FaCode className="text-lg" />,
};

const Achievement_Calendar = () => {
  const [selectedPlatform, setSelectedPlatform] =
    useState<PlatformFilter>('all');
  let data: any = [];

  const currentYear = new Date().getFullYear();
  const previousYear = currentYear - 1;

  const fromDate = `${previousYear}-01-01`;
  const toDate = `${currentYear}-12-31`;

  const filteredData = useMemo(() => {
    return selectedPlatform === 'all'
      ? contributionData
      : contributionData.filter((item) => item.platform === selectedPlatform);
  }, [selectedPlatform]);

  const colors = useMemo(() => {
    return selectedPlatform !== 'all'
      ? colorSchemes[selectedPlatform]
      : colorSchemes.github;
  }, [selectedPlatform]);

  const platformStats = useMemo(() => {
    return platforms.map((platform) => ({
      platform,
      count: contributionData.filter((d) => d.platform === platform).length,
      totalValue: contributionData
        .filter((d) => d.platform === platform)
        .reduce((sum, item) => sum + item.value, 0),
    }));
  }, []);

  const totalContributions = contributionData.length;
  const totalValue = contributionData.reduce(
    (sum, item) => sum + item.value,
    0
  );

  // Calculate additional statistics
  const getMonthName = (monthIndex: number): string => {
    return new Date(0, monthIndex).toLocaleString('default', { month: 'long' });
  };

  // Find busiest month
  const monthlyContributions = useMemo(() => {
    const months: Record<number, { count: number; value: number }> = {};

    contributionData.forEach((item) => {
      const month = new Date(item.day).getMonth();
      if (!months[month]) months[month] = { count: 0, value: 0 };
      months[month].count += 1;
      months[month].value += item.value;
    });

    return Object.entries(months).map(([month, data]) => ({
      month: parseInt(month),
      monthName: getMonthName(parseInt(month)),
      ...data,
    }));
  }, []);

  const busiestMonth = useMemo(() => {
    if (monthlyContributions.length === 0) return null;
    return monthlyContributions.reduce(
      (max, month) => (month.count > max.count ? month : max),
      monthlyContributions[0]
    );
  }, [monthlyContributions]);

  // Calculate longest streak
  const longestStreak = useMemo(() => {
    const sortedDays = contributionData
      .map((item) => new Date(item.day).getTime())
      .sort((a, b) => a - b);

    let currentStreak = 1;
    let maxStreak = 1;

    for (let i = 1; i < sortedDays.length; i++) {
      const dayDiff =
        (sortedDays[i] - sortedDays[i - 1]) / (1000 * 60 * 60 * 24);

      if (dayDiff === 1) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else if (dayDiff > 1) {
        currentStreak = 1;
      }
    }

    return maxStreak;
  }, [contributionData]);

  return (
    <div className="full text-white flex flex-col items-center py-12 px-4 md:px-10 bg-[#131311]">
      <div className="w-full max-w-7xl bg-[#252525] rounded-2xl shadow-xl border border-[#3a3a3a] p-6 md:p-10">
        {/* Title Section */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              Achievement Calendar
            </span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A visual representation of my coding journey across multiple
            platforms. Track my progress and milestones achieved over time.
          </p>

          {/* Summary Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 bg-[#2a2a2a] py-2 px-4 rounded-full">
              <FaCalendarAlt className="text-emerald-400" />
              <span className="text-sm">
                <span className="font-semibold">{totalContributions}</span> days
              </span>
            </div>
            <div className="flex items-center gap-2 bg-[#2a2a2a] py-2 px-4 rounded-full">
              <BsGraphUp className="text-blue-400" />
              <span className="text-sm">
                <span className="font-semibold">{totalValue}</span> total value
              </span>
            </div>
            <div className="flex items-center gap-2 bg-[#2a2a2a] py-2 px-4 rounded-full">
              <FaFire className="text-orange-400" />
              <span className="text-sm">
                <span className="font-semibold">{longestStreak}</span> day
                streak
              </span>
            </div>
            {busiestMonth && (
              <div className="flex items-center gap-2 bg-[#2a2a2a] py-2 px-4 rounded-full">
                <FaTrophy className="text-yellow-400" />
                <span className="text-sm">
                  <span className="font-semibold">
                    {busiestMonth.monthName}
                  </span>{' '}
                  is top month
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-[3rem]">
          <PlatformButton
            active={selectedPlatform === 'all'}
            onClick={() => setSelectedPlatform('all')}
            icon={<FaCode />}
            label="All Platforms"
            count={totalContributions}
            colorClass="ring-blue-500"
          />
          {platformStats.map((stat) => (
            <PlatformButton
              key={stat.platform}
              active={selectedPlatform === stat.platform}
              onClick={() =>
                setSelectedPlatform(stat.platform as PlatformFilter)
              }
              icon={platformIcons[stat.platform]}
              label={
                stat.platform.charAt(0).toUpperCase() + stat.platform.slice(1)
              }
              count={stat.count}
              colorClass={`ring-${
                stat.platform === 'github'
                  ? 'green-400'
                  : stat.platform === 'leetcode'
                    ? 'yellow-400'
                    : stat.platform === 'codeforces'
                      ? 'blue-400'
                      : 'purple-400'
              }`}
              bgColor={
                stat.platform === 'github'
                  ? '#006d32'
                  : stat.platform === 'leetcode'
                    ? '#bb8a13'
                    : stat.platform === 'codeforces'
                      ? '#2563eb'
                      : '#7e22ce'
              }
            />
          ))}
        </div>

        <div className="relative mt-2.5 ">
          <div className="absolute -top-6 left-0 flex items-center text-sm text-gray-400 ">
            <BsCalendarCheck className="mr-2" />
            <span>
              Activity from {previousYear} to {currentYear}
            </span>
          </div>

          <div className="w-full h-[50vh] md:h-[60vh] rounded-xl overflow-hidden border border-[#3a3a3a] bg-[#202020] relative">
            <ResponsiveCalendar
              data={filteredData}
              from={fromDate}
              to={toDate}
              emptyColor="#131311"
              colors={colors}
              margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
              yearSpacing={90}
              monthBorderColor="#2C2C2C"
              dayBorderWidth={2}
              dayBorderColor="#1C1C1C"
              legends={[
                {
                  anchor: 'bottom',
                  direction: 'row',
                  translateY: 36,
                  itemCount: 5,
                  itemWidth: 30,
                  itemHeight: 12,
                  itemsSpacing: 10,
                  itemDirection: 'right-to-left',
                  symbolShape: 'square',
                },
              ]}
              tooltip={({
                day,
                value,
                data,
              }: {
                day: string;
                value: string;
                data?: { platform?: string; details?: string };
              }) => (
                <div
                  className="bg-gradient-to-b from-[#1a1a1a] to-[#151515] border border-[#3a3a3a] p-4 min-w-[250px] max-w-[350px] rounded-lg shadow-xl animate-fadeIn"
                  style={{
                    position: 'relative',
                    zIndex: 9999,
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  <div className="flex flex-col space-y-3">
                    {/* Date and Platform Badge */}
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-100 text-sm">
                        {new Date(day).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      {data?.platform && (
                        <span
                          className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full shadow-inner"
                          style={{
                            background: `linear-gradient(to right, ${
                              data.platform === 'github'
                                ? 'rgba(56, 211, 79, 0.15), rgba(56, 211, 79, 0.25)'
                                : data.platform === 'leetcode'
                                  ? 'rgba(255, 192, 30, 0.15), rgba(255, 192, 30, 0.25)'
                                  : data.platform === 'codeforces'
                                    ? 'rgba(96, 165, 250, 0.15), rgba(96, 165, 250, 0.25)'
                                    : 'rgba(168, 85, 247, 0.15), rgba(168, 85, 247, 0.25)'
                            })`,
                            border: `1px solid ${
                              data.platform === 'github'
                                ? 'rgba(56, 211, 79, 0.3)'
                                : data.platform === 'leetcode'
                                  ? 'rgba(255, 192, 30, 0.3)'
                                  : data.platform === 'codeforces'
                                    ? 'rgba(96, 165, 250, 0.3)'
                                    : 'rgba(168, 85, 247, 0.3)'
                            }`,
                            color:
                              data.platform === 'github'
                                ? '#39d353'
                                : data.platform === 'leetcode'
                                  ? '#ffc01e'
                                  : data.platform === 'codeforces'
                                    ? '#60a5fa'
                                    : '#a855f7',
                          }}
                        >
                          <span className="mr-0.5">
                            {platformIcons[data.platform as Platform]}
                          </span>
                          <span className="font-medium">{data.platform}</span>
                        </span>
                      )}
                    </div>

                    {/* Contribution Value */}
                    <div className="bg-[#222] rounded-md px-4 py-2.5 flex items-center">
                      <div className="flex-1">
                        <div
                          className="text-2xl font-bold"
                          style={{
                            color:
                              data?.platform === 'github'
                                ? '#39d353'
                                : data?.platform === 'leetcode'
                                  ? '#ffc01e'
                                  : data?.platform === 'codeforces'
                                    ? '#60a5fa'
                                    : data?.platform
                                      ? '#a855f7'
                                      : '#4ade80',
                          }}
                        >
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          contribution{parseInt(value) !== 1 ? 's' : ''}
                        </div>
                      </div>

                      <div
                        className="text-3xl opacity-25"
                        style={{
                          color:
                            data?.platform === 'github'
                              ? '#39d353'
                              : data?.platform === 'leetcode'
                                ? '#ffc01e'
                                : data?.platform === 'codeforces'
                                  ? '#60a5fa'
                                  : data?.platform
                                    ? '#a855f7'
                                    : '#4ade80',
                        }}
                      >
                        {data?.platform === 'github'
                          ? '●●●'
                          : data?.platform === 'leetcode'
                            ? '●●●'
                            : data?.platform === 'codeforces'
                              ? '●●●'
                              : '●●●'}
                      </div>
                    </div>

                    {/* Details */}
                    {data?.details && (
                      <div
                        className="bg-black/30 rounded-md p-3 text-gray-300 text-sm border-l-2"
                        style={{
                          borderColor:
                            data?.platform === 'github'
                              ? '#39d353'
                              : data?.platform === 'leetcode'
                                ? '#ffc01e'
                                : data?.platform === 'codeforces'
                                  ? '#60a5fa'
                                  : data?.platform
                                    ? '#a855f7'
                                    : '#4ade80',
                        }}
                      >
                        <p>{data.details}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              theme={{
                background: '#1C1C1C',

                axis: {
                  domain: {
                    line: {
                      stroke: '#3d3d3d',
                      strokeWidth: 2,
                    },
                  },
                  ticks: {
                    line: {
                      stroke: '#3d3d3d',
                      strokeWidth: 2,
                    },
                    text: {
                      fill: '#a0a0a0',
                    },
                  },
                },
                labels: {
                  text: {
                    fontSize: 12,
                    fill: '#a0a0a0',
                  },
                },
                tooltip: {
                  container: {
                    background: '#1a1a1a',
                    color: '#ffffff',
                    fontSize: 12,
                    borderRadius: 4,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                  },
                },
                crosshair: {
                  line: {
                    stroke: '#505050',
                    strokeWidth: 2,
                    strokeOpacity: 1,
                  },
                },
              }}
            />
          </div>

          <div className="flex justify-between items-center mt-2 px-4 text-xs text-gray-400">
            <span>Less</span>
            <div className="flex">
              {colors.map((color, i) => (
                <div
                  key={i}
                  className="w-6 h-3"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#3a3a3a]">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BsBarChartLine className="mr-2 text-blue-400" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Contribution Statistics
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Contributions"
              value={totalContributions}
              icon={<FaCalendarAlt />}
              color="emerald"
            />
            <StatsCard
              title="Total Value"
              value={totalValue}
              icon={<FaChartLine />}
              color="blue"
            />

            {platformStats.map((stat) => (
              <StatsCard
                key={stat.platform}
                title={`${stat.platform.charAt(0).toUpperCase() + stat.platform.slice(1)}`}
                subtitle={`${stat.count} days`}
                value={stat.totalValue}
                icon={platformIcons[stat.platform]}
                color={
                  stat.platform === 'github'
                    ? 'green'
                    : stat.platform === 'leetcode'
                      ? 'yellow'
                      : stat.platform === 'codeforces'
                        ? 'blue'
                        : 'purple'
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PlatformButton = ({
  active,
  onClick,
  icon,
  label,
  count,
  colorClass,
  bgColor,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  count: number;
  colorClass: string;
  bgColor?: string;
}) => {
  const baseStyles =
    'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-md';
  const activeStyles = `text-white ring-2 ${colorClass} ${bgColor ? '' : 'bg-gray-700'}`;
  const inactiveStyles = 'bg-gray-800 text-gray-300 hover:bg-gray-700';

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${active ? activeStyles : inactiveStyles}`}
      style={active && bgColor ? { backgroundColor: bgColor } : {}}
    >
      {icon}
      <span>{label}</span>
      <span className="bg-[#1a1a1a] px-2 py-0.5 rounded-full text-xs ml-1">
        {count}
      </span>
    </button>
  );
};

const StatsCard = ({
  title,
  subtitle,
  value,
  icon,
  color = 'gray',
}: {
  title: string;
  subtitle?: string;
  value: number;
  icon?: React.ReactNode;
  color?: 'blue' | 'green' | 'yellow' | 'purple' | 'gray' | 'emerald';
}) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-700 border-blue-700 text-blue-400',
    green: 'from-green-500 to-green-700 border-green-700 text-green-400',
    yellow: 'from-yellow-500 to-yellow-700 border-yellow-700 text-yellow-400',
    purple: 'from-purple-500 to-purple-700 border-purple-700 text-purple-400',
    emerald:
      'from-emerald-500 to-emerald-700 border-emerald-700 text-emerald-400',
    gray: 'from-gray-500 to-gray-700 border-gray-700 text-gray-400',
  };

  return (
    <div
      className={`bg-[#2f2f2f] rounded-xl p-5 shadow-md border border-[#3c3c3c] hover:scale-105 transition-transform duration-200 bg-gradient-to-br ${colorClasses[color]} bg-opacity-10`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
          <h4 className="text-white text-2xl font-bold mt-1">{value}</h4>
        </div>
        {icon && (
          <div className={`text-xl ${colorClasses[color].split(' ').pop()}`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievement_Calendar;
