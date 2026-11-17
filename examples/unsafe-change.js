export function calculateTotal(items, expression) {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  // Intentionally unsafe example so ProofGate has a concrete finding to report.
  return eval(`${total} + (${expression})`);
}
