const importAll = r => {
    let images = {}
    r.keys().map((item, index) => { images[item.replace('./', '/assets/images/')] = r(item) })
    return images
}

const images = importAll(require.context('./', false, /\.(gif|jpe?g|svg)$/))

export default images