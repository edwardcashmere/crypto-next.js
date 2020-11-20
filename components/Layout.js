import NavBar from './NavBar'

import Head from 'next/head'


const Layout =(props)=>(
    <div>
        <Head>
            <title> BitzApp</title>  
            <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css'></link>
        </Head>
        <NavBar/>
        {props.children}
    </div>

)

export default Layout