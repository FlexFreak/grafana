import React, { FC } from 'react';


export interface FooterLink {
  text: string;
  id?: string;
  url?: string;
  target?: string;
}

export let getFooterLinks = (): FooterLink[] => {
  return [
    {
      text: 'Documentation',
      url: 'https://grafana.com/docs/grafana/latest/?utm_source=grafana_footer',
      target: '_blank',
    },
    {
      text: 'Support',
      url: 'https://grafana.com/products/enterprise/?utm_source=grafana_footer',
      target: '_blank',
    },
    {
      text: 'Community',
      url: 'https://community.grafana.com/?utm_source=grafana_footer',
      target: '_blank',
    },
  ];
};

export const Footer: FC = React.memo(() => {

  return (
    <footer className="footer">
    </footer>
  );
});

Footer.displayName = 'Footer';
