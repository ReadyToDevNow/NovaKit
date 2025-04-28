export const ProductService = {
  getProductData() {
    return [
      {
        class: 'font-sans',
        style: 'font-family: var(--font-sans);',
      },
      {
        class: 'font-serif',
        style: 'font-family: var(--font-serif);',
      },
      {
        class: 'font-mono',
        style: 'font-family: var(--font-mono);',
      },
    ]
  },
  getProducts() {
    return Promise.resolve(this.getProductData())
  },
}
