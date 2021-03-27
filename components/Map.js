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
            const fetchDataLocations = async () => {
                setCountryData(await fetchLocations())
            }
            fetchDataLocations()
            setPageIsMounted(true)
            let map = new mapboxgl.Map({
                container: "map",
                style: "mapbox://styles/mapbox/dark-v10",
                zoom : 1.5,
            });
            countryData.map(country => {
                // create the popup
                let popup = new mapboxgl.Popup().setHTML(`<div class="flex flex-row"><div class="flex-auto font-xl font-bold text-center"><img class="w-full border" src=${country.flag} alt=${country.country}> ${country.country}</div></div><div class="flex flex-row"><div class="flex-auto"> <a><i class="lni lni-heart-filled text-four mx-1 font-medium"></i>${country.cases.toLocaleString()}</a></div><div class="flex-auto"> <a><i class="lni lni-heart-filled text-blue mx-1 font-medium"></i>${country.deaths.toLocaleString()}</a></div><div class="flex-auto"> <a><i class="lni lni-heart-filled text-red mx-1 font-medium"></i>${country.recovered.toLocaleString()}</a></div></div><div class="flex flex-row"><div class="flex-auto text-center font-medium">Updated : ${(new Date(country.updated)).toDateString()}</div></div>`);
                // create DOM element for the marker
                let el = document.createElement("div");
                el.id = "marker";
                el.className = "lni lni-map-marker cursor-pointer text-blue font-black text-sm"
                
                // create the marker
                new mapboxgl.Marker(el)
                .setLngLat([country.longitude,country.latitude])
                .setPopup(popup) // sets a popup on this marker
                .addTo(map);
            })
        },[])
            
    return (
        <div>
            <div>
                <Link href="/">
                    <button className="fixed bg-black bg-opacity-50 text-white p-3 flex left-5 top-5 z-50 focus:outline-none"><i className="lni lni-chevron-left"></i></button>
                </Link>
                <div className="min-w-full min-h-screen focus:outline-none" id="map">
                </div>
            </div>
        </div>
    )
}
    
export default Mapped