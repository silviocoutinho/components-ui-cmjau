import { Meta } from '@storybook/addon-docs/blocks';
import designSystem from './logo-components.png';

<Meta title="Intro" />

<img src={designSystem} height="200px" />

# Get started

The components-ui-cmjau are reusable components library that helps build React Pages faster. The goal is to make building durable UIs more productive and satisfying.

## Install

The components-ui-cmjau was written in React, and its stories are written in [Component Story Format](https://medium.com/storybookjs/component-story-format-66f4c32366df). It requires Storybook version 5.2-beta and up.

Add components-ui-cmjau to your project.

`npm install --save components-ui-cmjau`

### **Use**

Import components you want into your UI

`import { Input } from 'components-ui-cmjau';`

and use them like so

```
  const example = () => (
    <div>
       <Input
            fieldName="example1"
            label="Example"
            placeholder="Type a text"
          />
    </div>
  )
```
