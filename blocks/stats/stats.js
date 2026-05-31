export default function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    row.classList.add('stats-row');
    [...row.children].forEach((col) => {
      col.classList.add('stats-item');
    });
  });
}
