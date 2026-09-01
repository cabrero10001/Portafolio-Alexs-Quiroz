export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: 'github-icon',
    ariaLabel: 'GitHub',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: 'discord-icon',
    ariaLabel: 'LinkedIn',
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com',
    icon: 'x-icon',
    ariaLabel: 'X (Twitter)',
  },
  {
    name: 'Email',
    href: 'mailto:example@email.com',
    icon: 'social-icon',
    ariaLabel: 'Email',
  },
];
