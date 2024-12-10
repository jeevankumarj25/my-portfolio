import React, { ReactNode } from "react";

interface CardProps {
  title: ReactNode; // Allow ReactNode to be passed as title (string or JSX element)
  description: string;
  descriptionClass?: string; // Add this optional prop to customize the class for description
  className?: string; // Add this line to accept className
}

const Card: React.FC<CardProps> = ({ title, description, descriptionClass, className }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${className}`}> {/* Apply className here */}
      <h3 className="font-poppins text-2xl mb-4">{title}</h3>
      <p className={descriptionClass ? descriptionClass : "text-base"}>{description}</p>
    </div>
  );
};

export default Card;
