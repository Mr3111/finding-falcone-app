import {HelmetProvider} from "react-helmet-async";
import Main from "~/components/root/Main";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {Provider} from "react-redux";
import {store} from "~/store";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <HelmetProvider>
        <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <Main />
             <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
        </Provider>
    </HelmetProvider>
  )
};
