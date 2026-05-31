export default function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length === 1 && row.querySelector('h2')) {
      row.classList.add('social-links-heading');
    } else {
      row.classList.add('social-links-icons');
    }
  });
}
