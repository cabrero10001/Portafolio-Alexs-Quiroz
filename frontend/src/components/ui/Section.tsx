import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'alternate' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, variant = 'default', size = 'md', id, className = '', ...props }, ref) => {
    const variantStyles = {
      default: 'bg-white dark:bg-gray-900',
      alternate: 'bg-gray-50 dark:bg-gray-800/50',
      dark: 'bg-gray-900 text-white dark:bg-gray-950',
    };

    const sizeStyles = {
      sm: 'py-12 md:py-16',
      md: 'py-16 md:py-24',
      lg: 'py-20 md:py-28 lg:py-32',
      xl: 'py-24 md:py-32 lg:py-40',
    };

    return (
      <section
        ref={ref}
        id={id}
        className={`${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      </section>
    );
  }
);

Section.displayName = 'Section';
