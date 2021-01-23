export = class Node {
    value: number
    left: Node
    right: Node

    constructor(value: number, left: Node, right: Node) {
        this.value = value
        this.left = left
        this.right = right
    }

    invert(): this {
        const { left, right } = this
        this.left = right ? right.invert() : null
        this.right = left ? left.invert() : null
        return this
    }
}
