export default class Cliente {
    #id: string
    #nome: string
    #curso: string

    constructor(nome: string, curso: string, id: string = null) {
        this.#nome = nome
        this.#curso = curso
        this.#id = id
    }

    static vazio() {
        return new Cliente('', '')
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get curso() {
        return this.#curso
    }
}