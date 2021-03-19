import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Custom404() {
    return (
        <div>
            <Head>
                <title>404 Not Found</title>
                <link rel="shortcut icon" href="images/svg/virus.svg" type="image/svg+xml"/>
                <script src="https://kit.fontawesome.com/850b50a31b.js" rel="stylesheet"/>
            </Head>
            <div className="flex bg-three min-w-full min-h-screen justify-center items-center">
                <div className="container px-8 mx-auto">
                    <div className="max-w bg-white rounded-lg shadow-lg p-8 my-8">
                        <div className="container mx-auto">
                            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 mx-auto">
                                <div className="text-center md:text-left md:m-auto mt-8">
                                    <h1 className="font-bold text-one text-xl md:text-2xl lg:text-3xl text-black">Hi, </h1>
                                    <h1 className="text-2xl md:text-3xl lg:text-5xl text-one font-bold uppercase  mt-0">You Seem to be Lost!</h1>
                                    <div className="py-8">
                                        <p className="text-gray-500">
                                            The page you're looking for isn't available.
                                        </p>
                                        <p className="text-gray-500">
                                            Try searching again or use the Go Back button below.
                                        </p>
                                    </div>
                                    <Link href="/">
                                        <button className="text-one bg-transparent font-bold px-3 py-2 md:px-5 md:py-2 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                                            <i className="fas fa-arrow-left"></i> Go Back
                                        </button>
                                    </Link>
                                </div>
                                <div className="py-auto m-auto">
                                    <Image src="/images/svg/404.svg" alt="404 Not Found" width={500} height={500} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}