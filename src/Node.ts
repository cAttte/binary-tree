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

    equals(node: Node): boolean {
        let equals: boolean = true
        if (this.left && node.left) equals = equals && node.left.equals(this.left)
        if (this.right && node.right) equals = equals && node.right.equals(this.right)
        return equals
    }
}
