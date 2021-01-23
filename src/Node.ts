export = class Node {
    value: number
    left: Node
    right: Node

    constructor(value: number, left: Node, right: Node) {
        this.value = value
        this.left = left
        this.right = right
    }
}
