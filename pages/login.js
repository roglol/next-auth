import Layout from '../components/Layout';
import {authInitialProps} from '../libs/auth';
import LoginForm from '../components/LoginForm';

export default function Login(){
    return(
        <Layout>
        <LoginForm />
        </Layout>
    )
}

Login.getInitialProps = authInitialProps()