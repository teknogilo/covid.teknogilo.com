import Image from 'next/image'
import Link from 'next/link'

export default function Main() {
    return (
        <div>
            <div id="home">
                <div className="bg-three py-24">
                    <div className="container px-4 mx-auto md:flex md:items-center md:w-4/5 w-auto mt-8">
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 mx-auto">
                            <div className="text-center md:text-left my-auto">
                                <h1 className="text-6xl font-medium text-four">Stay <span class="text-one font-bold">Home</span></h1>
                                <h1 className="text-6xl font-medium text-one font-bold">Stay <span class="text-four">Safe</span></h1>
                                <p className="text-md font-medium py-10">
                                    Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
                                </p>
                                <Link href="/contact">
                                    <button className="text-white border border-solid hover:border-one bg-one hover:bg-white hover:text-one active:bg-white font-bold uppercase px-3 py-2 md:px-5 md:py-2 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                            <div className="text-center md:text-right">
                                <Image src="/images/svg/doctor-man.svg" alt="Corona Tracker" width={500} height={500} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}