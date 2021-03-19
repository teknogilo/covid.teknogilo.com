import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <div className="container mx-auto px-6">
                <div className="mt-16 border-gray-300 flex flex-col items-center">
                    <div className="sm:w-2/3 text-center py-6">
                        <a className="text-sm text-black font-medium mb-2">
                            © 2021 Powered by <Link href="https://www.teknogilo.com"><a class="text-one">Teknogilo.</a></Link>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
