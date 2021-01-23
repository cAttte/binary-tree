export = class Node {
    value: number
    left: Node
    right: Node

    constructor(value: number, left: Node, right: Node) {
        this.value = value
        this.left = left
        this.right = right
    }

    clone(): Node {
        const left = this.left ? this.left.clone() : null
        const right = this.right ? this.right.clone() : null
        return new Node(this.value, left, right)
    }

    invert(): this {
        const { left, right } = this
        this.left = right ? right.invert() : null
        this.right = left ? left.invert() : null
        return this
    }

    equals(that: Node): boolean {
        if (!that) return false
        const equals = (a: Node, b: Node) => (a && b && a.equals(b)) || (!a && !b)
        return equals(this.left, that.left) && equals(this.right, that.right)
    }
}
