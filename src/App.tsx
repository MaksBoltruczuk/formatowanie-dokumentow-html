import './styles/app.less'
import {RozkladDnia} from "./components/RozkladDnia.tsx";
import {PrzykladParagrafu} from "./components/PrzykladParagrafu.tsx";

function App() {
  return (
    <>
      <header>
        <h1>Formatowanie dokumentów HTML</h1>
      </header>
      <section className={'secondary'}>
        <div>
          <h2>Przykład listy</h2>
          <ul>
            <li>muzyka</li>
            <li>turystyka</li>
            <ol>
              <li>góry</li>
              <li>jeziora</li>
              <li>na rowerze</li>
            </ol>
            <li>książki</li>
          </ul>
        </div>
        <RozkladDnia />
        <img className={'ctp'} src={`https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png`} alt={'Catppuccin'} />
      </section>
      <PrzykladParagrafu />
      <footer>
        <p>Formatowaniem tekstu zajmował się: 0000000000000000</p>
      </footer>
    </>
  )
}

export default App
