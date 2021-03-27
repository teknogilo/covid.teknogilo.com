import Head from "next/head"
import Mapped from '../components/Map'

export default function Map() {
    return (
        <div>
            <Head>
                <title>Map - Corona Tracker</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href="images/svg/virus.svg" type="image/svg+xml"/>

                <link href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css" rel="stylesheet" />
                <link href="https://cdn.lineicons.com/2.0/LineIcons.css" rel="stylesheet"/>
                
                <meta name="twitter:card" content="summary" key="twcard" />
                <meta name="twitter:creator" content="@teknogilocom" key="twhandle" />

                {/* Open Graph */}
                {/* <meta property="og:url" content={currentURL} key="ogurl" />
                <meta property="og:image" content={previewImage} key="ogimage" /> */}
                <meta property="og:site_name" content="Khoironi Kurnia Syah" key="ogsitename" />
                <meta property="og:title" content="Map" key="ogtitle" />
                <meta property="og:description" content="Map" key="ogdesc" />
            </Head>
            <Mapped/>
        </div>
    )
}