export default function GameLayout(props) {
    return <div id="gameslayout">
        {/* Game Page */}
        {props.children}
        {/* Teams layout and page */}
        {props.team}
        {/* Players Page */}
        {props.player}
    </div>
}
