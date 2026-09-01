import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  showDivider?: boolean;
}

export const SectionTitle = forwardRef<HTMLDivElement, SectionTitleProps>(
  ({ title, subtitle, align = 'center', showDivider = true, className = '', ...props }, ref) => {
    const alignStyles = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    };

    const marginStyles = {
      left: 'mx-0',
      center: 'mx-auto',
      right: 'ml-auto mr-0',
    };

    return (
      <div
        ref={ref}
        className={`${alignStyles[align]} ${marginStyles[align]} max-w-3xl mb-12 ${className}`}
        {...props}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {subtitle}
          </p>
        )}
        {showDivider && (
          <div className="mt-6 flex items-center justify-center gap-4">
            <div
              className="h-0.5 w-16 bg-gradient-to-r from-indigo-500 to-purple-500"
              aria-hidden="true"
            />
            <span
              className="h-0.5 w-16 bg-gradient-to-l from-indigo-500 to-purple-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    );
  }
);

SectionTitle.displayName = 'SectionTitle';
