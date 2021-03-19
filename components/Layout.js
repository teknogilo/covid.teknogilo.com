import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout (props) {
    return (
        <div>
            <Head>
                <title>{props.title} - Corona Tracker</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />

                <link href="https://cdn.lineicons.com/2.0/LineIcons.css" rel="stylesheet"/>
                <link rel="shortcut icon" href="images/svg/virus.svg" type="image/svg+xml"/>

                {/* Twitter */}
                <meta name="twitter:card" content="summary" key="twcard" />
                <meta name="twitter:creator" content="@teknogilocom" key="twhandle" />

                {/* Open Graph */}
                {/* <meta property="og:url" content={currentURL} key="ogurl" />
                <meta property="og:image" content={previewImage} key="ogimage" /> */}
                <meta property="og:site_name" content="Khoironi Kurnia Syah" key="ogsitename" />
                <meta property="og:title" content={props.title} key="ogtitle" />
                <meta property="og:description" content={props.title} key="ogdesc" />
            </Head>
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    )
}