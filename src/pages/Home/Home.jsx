
import high from './bck-1920-1272.png';
import low from './bck-100-60.png';

import './home.css';
import BlurredUpImage from "../../shared/component/BlurredUpImage/BlurredUpImage";

const Home = () => {
    return (
        <div className='content home'>
            <section className='welcome-section'>

                <BlurredUpImage id='background-drone-image' lowQualitySrc={low} highQualitySrc={high}/>
                <div id='page-description'>
                    <h1>use<span className='colorful'>Drone</span></h1>
                    <p>
                        Witaj na platformie ułatwiającej kontakt pomiędzy operatorami dronów, a klientami.
                    </p>
                    <h3>Dla <span className='colorful'>klientów</span></h3>
                    <p>
                        Szukasz profesjonalnego operatora, który uwieczni ważne w twoim życiu wydarzenie?
                        Na naszej stronie możesz takiego znaleźć, możesz również utworzyć zlecenie,
                        które będzie dostępne dla pilotów. W tym celu skorzystaj z naszej wyszukiwarki,
                        znajdź odpowiedniego wykonawce i dogadaj z nim szczegóły korzystając z naszego komunikatora.
                    </p>
                    <h3>dla <span className='colorful'>pilotów</span></h3>
                    <p>
                        Jeśli sam jesteś w stanie świadczyć usługi dotyczące upamiętniania chwil z pomocą drona,
                        załóż konto i otwórz się na klientów. Nasza witryna pozwoli Ci zareklamować swoje usługi i dojść
                        do porozumienia z usługobiorcą w sprawie lokalizacji, zakresu usługi i ceny.
                    </p>
                    <h3>dla <span className='colorful'>wszystkich</span></h3>
                    <p>
                        Dołącz do naszej społeczności i odkryj nowe możliwości w świecie usług dronowych!
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home;