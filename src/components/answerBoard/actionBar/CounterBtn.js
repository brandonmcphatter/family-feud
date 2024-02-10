export default function CounterBtn({symbol, onClick}) {
    return (
        <button onClick={onClick}>{symbol}</button>
    )
}