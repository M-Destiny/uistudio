import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Input, Card, CardHeader, CardContent, Badge, Avatar } from './index';

const App = () => (
  <div className="p-8 space-y-4">
    <h1 className="text-2xl font-bold">UIStudio Components</h1>
    <div className="flex gap-2"><Button variant="primary">Primary</Button><Button variant="secondary">Secondary</Button><Button variant="outline">Outline</Button></div>
    <Card><CardHeader><h2 className="font-semibold">Card Title</h2></CardHeader><CardContent><p>Card content goes here.</p></CardContent></Card>
    <Input label="Email" placeholder="you@example.com" />
    <div className="flex gap-2"><Badge variant="blue">Active</Badge><Badge variant="green">Success</Badge><Badge variant="red">Error</Badge></div>
    <div className="flex gap-2"><Avatar name="Alice Johnson" /><Avatar name="Bob Smith" /></div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
