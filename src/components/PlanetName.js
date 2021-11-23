function PlanetName() {

    return (
        <p>
            <label htmlFor="planetName">Planet Name : </label>
            <input type="text" id="planetName" name="planetName" size="50" placeholder="Planet Name.." />
            <span id="warning"></span>
        </p>
    )
}

export default PlanetName