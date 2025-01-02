export const RozkladDnia = () => {
  return <div>
    <h2>Przykład tabeli - rozkład dnia</h2>
    <table>
      <thead>
      <tr>
        <th>Pora dnia</th>
        <th>Obowiązki</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>rano</td>
        <td>nauka</td>
      </tr>
      <tr>
      <td>południe</td>
      <td>zajęcia dodatkowe</td>
      </tr>
      <tr>
        <td>popołudnie</td>
        <td rowSpan={2}>moje hobby</td>
      </tr>
      <tr>
        <td>wieczór</td>
      </tr>
      </tbody>
    </table>
  </div>
}