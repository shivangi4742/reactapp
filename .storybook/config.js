import { configure } from "@storybook/react";
import JSXAddon from 'storybook-addon-jsx';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/components/', true, /.stories.tsx$/);

function loadStories() {
    require('./welcomeStory');
    return req.keys().forEach(req);
    
}

configure(loadStories, module)