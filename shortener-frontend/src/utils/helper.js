import { subDomainList } from "./constant";

export const getApps = () => {
    const subdomain = getSubDomain(window.location.hostname); // get hostname of web.

    const mainApp = subDomainList.find((app) => app.main) // Find router

    if (subdomain === "") return mainApp.app // no subdomain -> return main app

    const apps = subDomainList.find((app) => subdomain === app.subdomain)

    return apps ? apps.app : mainApp.app // return matching router or default to map app
}

// url.localhost
// url.urlbestshort.com
export const getSubDomain = (location) => {
    const locationParts = location.split(".")
    const isLocalHost = locationParts.slice(-1)[0] === "localhost";
    const sliceIdx = isLocalHost ? -1 : -2
    return locationParts.slice(0, sliceIdx).join("")
}