import {useState} from "react";

export const PrzykladParagrafu = () => {
  const [scale, setScale] = useState<number>(200)
  const [fontStyle, setFontStyle] = useState<string>("italic")
  const [color, setColor] = useState<string>("#cba6f7")

  return <section>
    <p>Podaj rozmiar tekstu w %: <input type={'number'} value={scale} onChange={event => {
      setScale(parseInt(event.currentTarget.value))
    }} /></p>
    <select style={{width: '150px'}} value={fontStyle} onChange={event => {
      setFontStyle(event.currentTarget.value)
    }}>
      <option value={'normal'}>Normalny</option>
      <option value={'italic'}>Kursywa</option>
    </select>
    <p>Jakim kolorem sformatować tekst?</p>
    <input type={'color'} value={color} onChange={event => {
      setColor(event.currentTarget.value)
    }} />
    <p style={{fontSize: `${scale}%`, fontStyle, color}} className={'sample-text'}>To jest przykład paragrafu, który może być dowolnie formatowany przez JavaScript oraz React</p>
  </section>
}