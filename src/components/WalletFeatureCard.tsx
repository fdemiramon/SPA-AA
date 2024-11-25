import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface WalletFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  type: 'primary' | 'secondary';
}

export const WalletFeatureCard: React.FC<WalletFeatureCardProps> = ({
  icon,
  title,
  description,
  features,
  type,
}) => {
  return (
    <div className="card w-96 bg-base-100/50 backdrop-blur-sm border border-base-200">
      <div className="card-body">
        <div className={`text-${type}`}>{icon}</div>
        <h2 className="card-title">{title}</h2>
        <p className="text-base-content/70 text-sm">{description}</p>
        <div className="divider my-2"></div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <CheckCircle2 className={`w-4 h-4 text-${type}`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};