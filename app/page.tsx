'use client';
import React, { FC, useState } from 'react';
import Heading from './utils/Heading';

interface Props {}

const Page: FC<Props> = (props) => {
  return (
    <div>
      <Heading
        title='FEES to the world'
        description='Entrepreneurship and Empowerment'
        keywords='Software Engineering, Graphics, Data Science, Product management, Venture Capital, Skill Acquisition, Mentorship, Leadership, Fashion Designing'
      />
    </div>
  );
};

export default Page;
