/*
Defining dedicated (or custom) hooks in React is useful for several reasons,
particularly in enhancing code reusability, organization, and readability.
Here's why it's worth creating your own hooks:

1. Code Reusability
Custom hooks allow you to extract and reuse logic across multiple components.
This helps reduce repetition and ensures consistent behavior.

Example: If several components need to fetch data from an API,
instead of duplicating the fetch logic in each component,
you can create a custom hook like useFetchData() and reuse it wherever needed.
*/

import { useEffect, useState } from "react";

const useFetchData = (url : string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setData(data);
          setLoading(false);
        });
    }, [url]);

    return { data, loading };
  };

  //Then, use it in any component:

  const Component = () => {
    const { data, loading } = useFetchData('https://api.example.com');
    return loading ? <p>Loading...</p> : <div>{JSON.stringify(data)}</div>;
  };

/*
2. Separation of Concerns
_Custom hooks allow you to separate business logic from UI logic.
This makes your code cleaner and easier to maintain.

_Rather than putting everything into a single component,
you can move logic into dedicated hooks and focus on keeping components purely for rendering UI.

3. Simplifying Components
_Without custom hooks, complex components can become cluttered with side effects,
state management, and other logic, making them hard to read and maintain.
_Hooks make components simpler and more focused by moving reusable logic elsewhere.

4. Abstracting Complex Logic
_If a component needs to perform multiple tasks (e.g., handling timers, fetching data, managing subscriptions),
custom hooks can encapsulate this complex logic, making the component itself more readable and less error-prone.

Example: A useTimer hook to manage timers:
*/
const useTimer = (initialValue : any) => {
    const [time, setTime] = useState(initialValue);
    useEffect(() => {
      const intervalId = setInterval(() => setTime((prev: number) => prev + 1), 1000);
      return () => clearInterval(intervalId);
    }, []);
    return time;
  };

/*
5. Encapsulation
_Custom hooks allow encapsulating logic in a way that ensures it’s only accessible where needed,
keeping components less coupled and reducing side effects or unintended interactions between components.

6. Sharing Logic Between Components
_Custom hooks help you share logic between unrelated components (components that don’t have a parent-child relationship).
Unlike HOCs or render props, custom hooks are simpler and more natural to use.

7. Following the DRY Principle
_"Don't Repeat Yourself" (DRY) is a core programming principle.
Custom hooks help follow this by ensuring logic is written once and used many times.

8. Cleaner Testing
_Hooks are functions, so they can be easily tested in isolation.
You can test your logic (like data fetching or state transitions) without having to test the entire component.

In Summary
_Reusable hooks avoid repetition and keep your logic centralized.
_Cleaner components are easier to read and maintain.
_Separation of concerns keeps business logic out of UI rendering logic.
*/
