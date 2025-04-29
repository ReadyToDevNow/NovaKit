export const ProductService = {
  getFontSize() {
    return [
      {
        class: 'text-xs',
        style: 'font-size: var(--text-xs);',
      },
      {
        class: 'text-sm',
        style: 'font-size: var(--text-sm);',
      },
      {
        class: 'text-base',
        style: 'font-size: var(--text-base);',
      },
      {
        class: 'text-lg',
        style: 'font-size: var(--text-lg);',
      },
      {
        class: 'text-xl',
        style: 'font-size: var(--text-xl);',
      },
      {
        class: 'text-2xl',
        style: 'font-size: var(--text-2xl);',
      },
    ]
  },
  getProductData() {
    return [
      {
        class: 'font-sans',
        style: 'font-family: var(--font-sans);',
        test: '100',
      },
      {
        class: 'font-serif',
        style: 'font-family: var(--font-serif);',
        test: '100',
      },
      {
        class: 'font-mono',
        style: 'font-family: var(--font-mono);',
        test: '100',
      },
    ]
  },
  getProducts() {
    return Promise.resolve(this.getProductData())
  },
  getSize() {
    return Promise.resolve(this.getFontSize())
  },
}
