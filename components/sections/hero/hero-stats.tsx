'use client';

interface StatItemProps {
  value: string;
  label: string;
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-blue-600">{value}</div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
  );
}

export function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-8 mt-12 p-6 bg-gray-50 rounded-xl">
      <StatItem value="3+ Years" label="Experience" />
      <StatItem value="20+ Projects" label="Completed" />
    </div>
  );
}
