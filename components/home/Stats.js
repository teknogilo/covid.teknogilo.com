import Chart from '../home/Chart'
import { useState , useEffect } from 'react'

import { fetchAllData } from '../../lib/data'

export default function Stats() {

    const [data, setData] = useState({
        cases: 0,
        deaths: 0,
        recovered: 0,
        updated: 0
    })

    useEffect(() => {
        const fetchData = async () => {
            setData(await fetchAllData())
        }
        fetchData()
        
    },[])
    return (
        <div>
            <div id="home">
                <div className="bg-white pt-8">
                    <div className="container px-4 mx-auto md:flex md:items-center md:w-4/5 w-auto">
                        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-2 mx-auto mb-18 text-white w-full">
                            <div className="bg-four overflow-hidden rounded shadow m-2">
                                <div className="p-6">
                                    <h4 className="font-medium">Confirmed</h4>
                                    <h4 className="font-bold text-2xl">{data.cases.toLocaleString()}</h4>
                                </div>
                            </div>
                            <div className="bg-blue overflow-hidden rounded shadow m-2">
                                <div className="p-6">
                                    <h4 className="font-medium">Deaths</h4>
                                    <h4 className="font-bold text-2xl">{data.deaths.toLocaleString()}</h4>
                                </div>
                            </div>
                            <div className="bg-red overflow-hidden rounded shadow m-2">
                                <div className="p-6">
                                    <h4 className="font-medium">Recovered</h4>
                                    <h4 className="font-bold text-2xl">{data.recovered.toLocaleString()}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}