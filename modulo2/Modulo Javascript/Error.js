function teste (arr , num) {
    try {
        if (!arr && !num) throw new ReferenceError('Envie os parâmetros')

        if (typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo Object')
    
        if (typeof num !== 'number') throw new TypeError('Num precisa ser do tipo number')
    
        if (arr.length !== num) throw new RangeError('Tamanho inválido')

        return arr
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError!')
            //console.log(e.name)
            console.log(e.message)
            //console.log(e.stack)
        } else if (e instanceof TypeError) {
            console.log('Este erro é um TypeError')
            //console.log(e.name)
            console.log(e.message)
            //console.log(e.stack)
        } else if (e instanceof RangeError) {
            console.log('Este erro é um RangeError')
            //console.log(e.name)
            console.log(e.message)
            //console.log(e.stack)
        } else {
            console.log('Erro não esperado: ' + e)
        }
    }
}

console.log(teste(['carro', 'moto', 'bicicleta', 'avião', 'navio'], 5))