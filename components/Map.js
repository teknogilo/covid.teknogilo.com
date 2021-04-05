import Link from 'next/link'
import { useState , useEffect } from "react"
import { fetchLocations } from "../lib/data"

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
const Mapped = () => {
    
        const token = "pk.eyJ1IjoiemVraG9pIiwiYSI6ImNrbWc5aGRwejBqZzUycHBrYXMyYTUxZDEifQ.h_RMJX6siNjMUI5z0FKCMg"
        mapboxgl.accessToken = token
    
        const [pageIsMounted, setPageIsMounted] = useState(false)
        const [countryData, setCountryData] = useState([])

        useEffect(() => {
            setPageIsMounted(true)

            const map = new mapboxgl.Map({
                container: "map",
                style: "mapbox://styles/mapbox/dark-v10",
                zoom : 1.5,
            });
            const fetchDataLocations = async () => {
                const data = await fetchLocations()
                
                data.forEach(countries => {
                    const { country, flag, cases, deaths, recovered, coordinate } = countries;
                    // create the popup
                    const popup = new mapboxgl.Popup().setHTML(`<div class="flex flex-row"><div class="flex-auto font-xl font-bold text-center"><img class="w-full border" src=${flag} alt=${country}> ${country}</div></div><div class="flex flex-row"><div class="flex-auto"> <a><i class="lni lni-heart-filled text-four mx-1 font-medium"></i>${cases.toLocaleString()}</a></div><div class="flex-auto"> <a><i class="lni lni-heart-filled text-blue mx-1 font-medium"></i>${deaths.toLocaleString()}</a></div><div class="flex-auto"> <a><i class="lni lni-heart-filled text-red mx-1 font-medium"></i>${recovered.toLocaleString()}</a></div></div><div class="flex flex-row"><div class="flex-auto text-center font-medium">Updated : ${(new Date(country.updated)).toDateString()}</div></div>`);
                    // create DOM element for the marker
                    const el = document.createElement("div");
                    el.id = "marker";
                    el.className = "lni lni-map-marker cursor-pointer text-blue font-black text-sm"
                    // create the marker
                    new mapboxgl.Marker(el)
                    .setLngLat(coordinate)
                    .setPopup(popup) // sets a popup on this marker
                    .addTo(map);
                })
            }    
            fetchDataLocations()

            
        },[])
        
    return (
        <div>
            <div>
                <Link href="/">
                    <button className="fixed bg-black bg-opacity-50 text-white p-3 flex left-5 top-5 z-50 focus:outline-none"><i className="lni lni-chevron-left"></i></button>
                </Link>
                <div className="min-w-full min-h-screen focus:outline-none" id="map"/>
            </div>
        </div>
    )
}
    
export default Mapped