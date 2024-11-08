import React from 'react';
import { Heart, Leaf, Brain, Battery } from 'lucide-react';

type BenefitProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const Benefit: React.FC<BenefitProps> = ({ icon: Icon, title, description }) => (
  <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
    <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Benefits: React.FC = () => {
  const benefits = [
    { icon: Heart, title: 'Enhanced Vitality', description: 'Natural support for male wellness and vitality' },
    { icon: Leaf, title: 'All-Natural Formula', description: 'Premium botanical ingredients backed by research' },
    { icon: Brain, title: 'Mental Clarity', description: 'Supports focus and cognitive function' },
    { icon: Battery, title: 'Sustained Energy', description: 'Natural energy support throughout the day' },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {benefits.map((benefit) => (
        <Benefit key={benefit.title} {...benefit} />
      ))}
    </div>
  );
};

export default Benefits;