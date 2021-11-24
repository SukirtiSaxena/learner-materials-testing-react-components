function SpeciesName({ speciesName, onChangeSpeciesName }) {

    return (
        <p>
            <label htmlFor="speciesName">Species Name : </label>
            <input type="text"
                id="speciesName"
                name="speciesName"
                size="50"
                placeholder="Species Name.."
                value={speciesName}
                onChange={onChangeSpeciesName}
            />
            <span id="warning"></span>
        </p>
    )
}

export default SpeciesName