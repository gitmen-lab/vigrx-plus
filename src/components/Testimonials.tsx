import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

type TestimonialProps = {
  name: string;
  rating: number;
  text: string;
  verified: boolean;
};

const Testimonial: React.FC<TestimonialProps> = ({ name, rating, text, verified }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="flex items-center mb-4">
      <div className="flex">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      {verified && (
        <span className="ml-2 text-sm text-green-600 flex items-center">
          <ShieldCheck className="w-4 h-4 mr-1" />
          Verified
        </span>
      )}
    </div>
    <p className="text-gray-600 mb-4">"{text}"</p>
    <p className="font-semibold">{name}</p>
  </div>
);

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Michael R.",
      rating: 5,
      text: "I've noticed a significant improvement in my overall wellness since starting VigRx Plus.",
      verified: true
    },
    {
      name: "David S.",
      rating: 5,
      text: "The natural ingredients really make a difference. Highly recommend!",
      verified: true
    },
    {
      name: "Robert K.",
      rating: 4,
      text: "Great product with noticeable results. Customer service is excellent too.",
      verified: true
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {reviews.map((review, index) => (
        <Testimonial key={index} {...review} />
      ))}
    </div>
  );
};

export default Testimonials;