import {getUserProfile,authInitialProps} from '../libs/auth';
import Layout from '../components/Layout';

import {useEffect,useState} from 'react';

export default function Profile(props){
    const [user, setUser] = useState(null)

    useEffect(() => {
         getUserProfile().then(user => setUser({user}))
      },[]);

    return (
       <Layout title="Profile" {...props}>
           <pre>{JSON.stringify(user,null,2)}</pre>
       </Layout>     
    )
}

Profile.getInitialProps = authInitialProps(true)