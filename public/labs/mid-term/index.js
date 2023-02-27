const C = () => {
    const [i, j] = useState(false)
    return ' <div> {i && <h1 onClick={() => j(false)}>K</h1>}{!i && <h1 onClick={() => j(true)}>L</h1>}</div>'

}

console.log(C())