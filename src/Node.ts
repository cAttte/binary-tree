export = class Node {
    value: number
    left: Node
    right: Node

    constructor(value: number, left: Node = null, right: Node = null) {
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

    find(value: number): Node {
        if (value === this.value) return this
        else if (value < this.value && this.left) return this.left.find(value)
        else if (value > this.value && this.right) return this.right.find(value)
        return null
    }

    insert(value: number): this {
        const node = new Node(value)
        const insert = (a: Node, b: Node) => (b ? b.insert(a.value) : a)

        if (value < this.value) this.left = insert(node, this.left)
        else if (value > this.value) this.right = insert(node, this.right)
        return this
    }
}
