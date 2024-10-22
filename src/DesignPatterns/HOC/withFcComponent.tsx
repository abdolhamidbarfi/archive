"use client"
import { useEffect, useState } from "react";

//with functional component
function withFcComponent(Component: React.ComponentType) {
    // HOC returns a functional component
    return function EnhancedComponent(props: any) {
        const [condition, setCondition] = useState<boolean>(false);

        useEffect(() => {
            const timeout = setTimeout(() => {
                setCondition(true);
            }, 5000);

            return () => clearTimeout(timeout); // Cleanup timeout
        }, []);

        if (condition) {
            // Pass extraProps if the condition is met
            const extraProps = {}; // You can add extra props if needed
            return <Component {...props} {...extraProps} />;
        }

        // Render fallback while condition is false
        return <div className="flex items-center justify-center h-lvh">
            <span>Condition to return function not pass ...</span>
        </div>;
    };
}

export default withFcComponent;
