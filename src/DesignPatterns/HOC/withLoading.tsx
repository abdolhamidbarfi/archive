

const withLoading = (WrappedComponent: ({ isLoading }: { isLoading: boolean }) => React.ReactElement) => {

    class WithLoading extends React.Component {

        state = {
            isLoading: true
        }

        componentDidMount(): void {
            setTimeout(() => {
                this.setState({ isLoading: false })
            }, 2000)
        }

        render(): React.ReactNode {
            return <WrappedComponent isLoading={this.state.isLoading} />
        }

    }

    return WithLoading
}


export default withLoading