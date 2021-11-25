import React, { ComponentProps } from 'react';

import Radio from './Radio';

export default {
  title: 'forms/Radio',
  component: Radio,
};

export const Basic = args => <Radio {...args} />;
Basic.args = {
  id: 'example1',
  label: 'Example',  
};


export const All = () => (
  <>
    <Radio
      id="example2"
      label="Option 1"      
    />
    <Radio
      id="example3"
      label="Option 2"
     
    />
    <Radio 
      id="example4" 
      label="Option 3" 
    />
  </>
);
