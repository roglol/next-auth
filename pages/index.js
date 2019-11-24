import Layout from '../components/Layout';
import Link from 'next/Link';
import {authInitialProps} from '../libs/auth';

export default function Index(props){
    return (
        <Layout title="Home" {...props}>
        <Link href="/profile">
        <a> Profile</a>
        </Link>
        </Layout> 
    )
}


Index.getInitialProps = authInitialProps()