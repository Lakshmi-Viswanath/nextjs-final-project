import { AuthProvider } from '@/pages/context/AuthContext';
import { Provider } from 'react-redux';
import store from '@/store/store'; // Ensure the path is correct
import Navigation from '@/components/Navigation';
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return ( 
    <Provider store={store}>
     <AuthProvider>
  <Component {...pageProps} />
</AuthProvider> 
</Provider>);
}
