export default function PanelLayout(props) {
    const isAdmin = false
    return <div id="panelLayout">
        {props.children}
        {isAdmin ? props.AdminPanel : props.UserPanel}
    </div>
}
