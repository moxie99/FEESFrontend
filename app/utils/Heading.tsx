import React, { FC, useState } from 'react';

interface HeaderProps {
  title: string;
  description: string;
  keywords: string;
}

const Heading: FC<HeaderProps> = ({ title, description, keywords }) => {
  return (
    <>
      <title>{title}</title>
      <meta name='viewport' content='width=deevice-width initial-scale=1' />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </>
  );
};

export default Heading;
