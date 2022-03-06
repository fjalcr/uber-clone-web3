import LocationSelector from "../components/LocationSelector";
import Map from "../components/Map";
import Navbar from "../components/Navbar";

const styles = {
    wrapper: `h-screen w-screen flex flex-col`,
    main: `h-full w-screen flex-1 z-10`,
    mapContainer: `flex-1 w-full h-full`,
    rideRequestContainer: `h-full w-[400px] ml-[1rem] p-[3rem] absolute top-0 left-0 flex flex-col`,
    rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll z-20`,

}
export default function Home() {
  return (
      <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.main}>
            <div className={styles.mapContainer}>
                <Map />
            </div>
        </div>
        <div className={styles.rideRequestContainer}>
            <div className={styles.rideRequest}>
                <LocationSelector />
                {/*Confirm Ride*/}
            </div>
        </div>
      </div>
  )
}
