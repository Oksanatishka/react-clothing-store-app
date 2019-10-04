import App, { Container } from 'next/app';
import Page from '../components/Page';
// we use {} brackets for named exports, e.g. export const myVar = 'test';
import { ApolloProvider } from 'react-apollo';
// we donlt use {} brackets for default exports, we can use any name
import withData from '../lib/withData';

class myApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        // this exposes the query to the user
        pageProps.query = ctx.query;
        return { pageProps };
    }
    render() {
        const { Component, apollo, pageProps } = this.props;

        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </ApolloProvider>
            </Container>
        );
    }
}

// import withApollo from 'next-with-apollo';

// function createClient({ headers }) {
//     return new ApolloClient({
//       uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
//       request: operation => {
//         operation.setContext({
//           fetchOptions: {
//             credentials: 'include',
//           },
//           headers,
//         });
//       },
//     });
//   }

// withData is a high-order component https://reactjs.org/docs/higher-order-components.html
export default withData(myApp);
// export default withApollo(createClient)(myApp);
