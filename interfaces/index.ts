export interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}
