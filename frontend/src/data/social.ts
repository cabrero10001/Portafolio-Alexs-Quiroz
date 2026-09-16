export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/cabrero10001',
    icon: 'github-icon',
    ariaLabel: 'GitHub',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alexs-quiroz-gonzalez-18755b275/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRCcmbTZLTNWtMeuLYWV3dw%3D%3D',
    icon: 'linkedin-icon',
    ariaLabel: 'LinkedIn',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/alexxs_quir_?stkn=cGtsaXY1bmdieDc0&utm_source=qr',
    icon: 'instagram-icon',
    ariaLabel: 'Instagram',
  },
];
