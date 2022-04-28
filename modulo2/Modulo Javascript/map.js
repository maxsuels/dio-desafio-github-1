function getAdmins(map) {
    let admins = []
    for([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key)
        }
    } 
    return admins
}

const usuarios = new Map()

usuarios.set('Luiz', 'Admin')
usuarios.set('julia', 'Admin')
usuarios.set('Pedro', 'User')
usuarios.set('Marcos', 'Admin')

console.log(getAdmins(usuarios))