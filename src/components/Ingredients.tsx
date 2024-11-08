import React from 'react';
import { Leaf, FlaskConical } from 'lucide-react';

type IngredientProps = {
  name: string;
  icon: React.ElementType;
};

const Ingredient: React.FC<IngredientProps> = ({ name, icon: Icon }) => (
  <div className="flex items-start p-6 bg-gray-50 rounded-xl">
    <Icon className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
    <div>
      <h3 className="font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">Naturally sourced and carefully selected for optimal effectiveness.</p>
    </div>
  </div>
);

const Ingredients: React.FC = () => {
  const ingredients = [
    { name: 'Epimedium Leaf Extract', icon: Leaf },
    { name: 'Asian Red Ginseng', icon: FlaskConical },
    { name: 'Muira Puama Bark Extract', icon: Leaf },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.name} {...ingredient} />
      ))}
    </div>
  );
};

export default Ingredients;