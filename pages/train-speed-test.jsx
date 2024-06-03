import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef, RefObject } from 'react';
import { FaStopwatch } from "react-icons/fa6";
import { AiFillStop } from "react-icons/ai";
const ReactSpeedometer = dynamic(() => import("react-d3-speedometer"), { ssr: false });
import Head from "next/head";
import { DOMAIN } from "@/config";
import Card from "@/components/Card";

const Home = ({ blogs }) => {


    const showAllBlogs = () => {
        return blogs && blogs.map((blog, i) => (
            <article key={i}><Card blog={blog} /></article>
        )).slice(0, 6);
    }


    const [speed, setSpeed] = useState(0);
    const [isGeolocationActive, setIsGeolocationActive] = useState(false);
    const [watchId, setWatchId] = useState(null);

    function calculate() {
        if (isGeolocationActive) {
            navigator.geolocation.clearWatch(watchId);
            setIsGeolocationActive(false);
        }

        else {
            const newWatchId = navigator.geolocation.watchPosition(
                (position) => { const newSpeed = position.coords.speed || 0; setSpeed(newSpeed); },
                (error) => { console.error('Error getting location:', error.message); },
                { enableHighAccuracy: true }
            );
            setIsGeolocationActive(true);
            setWatchId(newWatchId);
        }
    }


    const description = "Are youo travelling in a Train, Check your train speed now. Train Speed Test is a way to check how fast you are travelling in a train.";

    var currentDate = new Date();
    var formattedDate = currentDate.toISOString().slice(0, 10);



    const head = () => (
        <Head>
            <title>Train Speed Test: Check Your Train Speed Now</title>
            <meta name="description" content={description} />
            <meta name="robots" content="follow, index, noarchive, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
            <link rel="canonical" href={DOMAIN} />
            <meta property="og:title" content={`${DOMAIN}:  Check Your Train Speed Now`} />
            <meta property="og:description" content={description} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content={DOMAIN} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={DOMAIN} />
            <meta property="og:site_name" content={DOMAIN} />
            {/* <script src="https://www.googletagmanager.com/gtag/js?id=G-BN0814FKHT" /> */}

            {/* <script type='text/javascript'
                dangerouslySetInnerHTML={{
                    __html: `{window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-BN0814FKHT');}`
                }}
            /> */}
        </Head>
    );



    return (
        <>
            {head()}
            <Navbar />
            <div className="pt-5 pb-5 text-[black] ">
                <main>
                    <article>
                        <div className="max-w-[1200px] mx-auto p-3 rounded-lg  opacity-90" >

                            <h1 className="text-3xl font-extrabold text-center mt-5 ">Train Speed - Feel the Need for Speed</h1>

                            <div className='flex justify-center mt-[100px] h-[220px] '>
                                <ReactSpeedometer value={speed} needleColor="red" startColor="#09cb09" endColor="#ff1919" segments={10} maxSegmentLabels={10}
                                    minValue={0} maxValue={500} width={350} height={350} />
                            </div>

                            <div className="text-center font-bold text-2xl mt-5 ">{speed.toFixed(2)} km/hr</div>

                            <div className="flex justify-center items-center mt-8">
                                <a href="https://thampolsi.com/4/7457654" target="_blank" onClick={calculate} className="flex items-center border border-gray-300 bg-black text-white px-4 py-2 tracking-wider font-bold rounded-md transition duration-300 ease-in-out hover:bg-[#2b2a2b] hover:text-gray-300">
                                    {isGeolocationActive ? (<><AiFillStop className="mr-2" color="#ff3838" />STOP</>) : (<><FaStopwatch className="mr-2" color="#84fb66" />START</>)}
                                </a>
                            </div>

                            <p className="mt-10">Train speed testing is a critical aspect of railway operations, ensuring that trains operate safely and efficiently on the tracks. This process involves rigorous testing of trains under various conditions to measure their performance, safety, and reliability. The outcomes of these tests are essential for certifying new trains, improving existing models, and maintaining the overall safety of rail networks.</p>

                            <h2 className="mt-10 text-2xl font-extrabold text-center">The Importance of Train Speed Testing</h2>
                            <ol class="list-decimal list-inside">
                                <li className="my-3"><b>Safety Certification:</b> Before a new train can enter service, it must pass extensive speed tests to ensure it can operate safely at its designated maximum speed. These tests help identify any potential issues that could lead to accidents.</li>

                                <li className="my-3"><b>Performance Evaluation:</b> Speed tests evaluate how well a train performs at different speeds. This includes assessing acceleration, braking, stability, and the train’s ability to handle curves and gradients.</li>
                                <li className="my-3"><b>Regulatory Compliance:</b> Different countries have specific regulations governing train speeds. Speed tests ensure that trains comply with these national and international standards.</li>
                                <li className="my-3"><b>Technology Advancement:</b> As technology evolves, speed tests help integrate new technologies into trains, such as advanced braking systems and aerodynamic designs, which can enhance performance and safety.</li>
                            </ol>


                            <h2 className="mt-10 text-2xl font-extrabold text-center">Types of Speed Tests</h2>
                            <ol class="list-decimal list-inside">
                                <li className="my-3"><b>Maximum Speed Test:</b> This test determines the highest speed a train can safely achieve and sustain. It is usually conducted on specially designated test tracks to avoid interference with regular train operations.</li>

                                <li className="my-3"><b>Acceleration and Deceleration Tests:</b> These tests measure how quickly a train can accelerate to its top speed and how effectively it can decelerate and come to a complete stop. This is crucial for determining the train’s ability to maintain schedules and respond to emergency braking situations.</li>

                                <li className="my-3"><b>Curve Negotiation Test:</b> Trains must be able to navigate curves safely at high speeds. This test evaluates a train’s stability and performance when traveling through curves at various speeds. </li>

                                <li className="my-3"><b>Emergency Braking Test:</b> This involves testing the train’s braking system under emergency conditions to ensure it can stop within a safe distance to prevent collisions.</li>
                            </ol>



                            <h2 className="mt-10 text-2xl font-extrabold text-center">Conducting Train Speed Tests</h2>
                            <ol class="list-decimal list-inside">
                                <li className="my-3"><b>Preparation:</b> The train is equipped with sensors and monitoring equipment to measure speed, acceleration, deceleration, and other performance metrics. Engineers and technicians ensure all systems are operational and safe for testing.</li>

                                <li className="my-3"><b>Testing:</b> The train is driven at various speeds, starting from low speeds and gradually increasing to its maximum speed. Each run is carefully monitored, and data is collected in real-time.</li>

                                <li className="my-3"><b>Data Analysis:</b> After the tests, the collected data is analyzed to assess the train’s performance. Engineers look for any anomalies or areas where the train did not meet performance criteria. </li>

                                <li className="my-3"><b>Reporting:</b> A comprehensive report is generated detailing the results of the speed tests. This report is used to certify the train for operation and may also highlight areas for improvement.</li>
                            </ol>




                            <h2 className="mt-10 text-2xl font-extrabold text-center">Challenges and Future Directions</h2>

                            <p className="mt-5">Train speed testing is not without its challenges. Ensuring the accuracy of measurements, dealing with environmental variables, and maintaining safety during high-speed tests are all critical concerns. However, advancements in technology are continually improving the process. For instance, high-precision GPS systems and advanced simulation software allow for more accurate and efficient testing.</p>


                            <p className="my-3"> Looking to the future, the development of high-speed rail networks, such as those in Japan and Europe, is pushing the boundaries of what is possible with train speeds. Speed testing will continue to play a vital role in this development, ensuring that these new, faster trains are both safe and reliable.</p>

                        </div>







                    </article>
                </main>
            </div>
            <Footer />

        </>
    );
}


export default Home;