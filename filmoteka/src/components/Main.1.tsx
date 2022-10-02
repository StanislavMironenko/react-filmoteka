import '../sass/utils/_visually-hidden.scss';
import '../sass/components/_home.scss';


interface MainProps{
children: React.ReactNode
}

export function Main({children }: MainProps): JSX.Element {
    return <section className="home">
        <div className="container">
            <h1 className="visually-hidden">Home</h1>
            <div id="home-gallery" className="gallery home__gallery"></div>
{children}
        </div>
    </section>;


}
