function Keyboard() {
    return (
        <input
        type="password"
        onChange= {() => console.log("Entering password...")}
        />
    )
}

export default Keyboard;