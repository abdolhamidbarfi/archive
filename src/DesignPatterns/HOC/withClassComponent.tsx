
import React, { Component } from "react";

function withClassComponent(Component: React.ComponentType) {
    // HOC returns a class component
    return class EnhancedComponent extends React.Component<any, { condition: boolean }> {

        timeoutId: any

        constructor(props: any) {
            super(props);
            this.state = { condition: false };
        }

        componentDidMount() {
            this.timeoutId = setTimeout(() => {
                this.setState({ condition: true });
            }, 5000);
        }

        componentWillUnmount() {
            clearTimeout(this.timeoutId);
        }

        render() {
            const { condition } = this.state;

            if (condition) {
                // Add extra props if needed
                const extraProps = {};
                return <Component {...this.props} {...extraProps} />;
            }

            // Show fallback content if condition is not met
            return (
                <div>
                    <span>Condition to return function not pass ...</span>
                </div>
            );
        }
    };
}

export default withClassComponent