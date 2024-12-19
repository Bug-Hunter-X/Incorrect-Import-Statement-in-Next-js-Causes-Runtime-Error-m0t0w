```javascript
// pages/about.js
import { useRouter } from 'next/navigation';

function About() {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}

export default About;
```