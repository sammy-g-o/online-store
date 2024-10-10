/* eslint-disable react/prop-types */
function Categories({onToggleAll, onToggleLappy, onTogglePhone, onToggleAccessory}) {
    return(
        <ul>
          <li onClick={onToggleAll}>All Devices</li>
          <li onClick={onToggleLappy}>laptop</li>
          <li onClick={onTogglePhone}>Phone</li>
          <li onClick={onToggleAccessory}>Accessories</li>
        </ul>
    )
}
export default Categories