'use client';

import { ComponentType, SVGProps } from 'react';

type LucideIconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

type CustomIconProps = LucideIconProps & {
  icon: ComponentType<LucideIconProps>;
};

export const Icon: React.FC<CustomIconProps> = ({
  icon: IconComponent,
  size = 16,
  ...props
}) => {
  return (
    <IconComponent
      {...props}
      size={size}
      style={{
        minWidth: size,
        minHeight: size,
      }}
    />
  );
};
