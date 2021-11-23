function SpeciesName() {

    return (
        <p>
            <label htmlFor="speciesName">Species Name : </label>
            <input type="text" id="speciesName" name="speciesName" size="50" placeholder="Species Name.." />
            <span id="warning"></span>
        </p>
    )
}

export default SpeciesName