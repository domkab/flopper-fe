import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  titleTemplate?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "FlipFlopper",
  titleTemplate = "Product Page",
  description = "Product page of FlipFlopper Shop commerce store.",
}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title} | {titleTemplate}</title>
        <meta name="description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
};

export default SEO;
