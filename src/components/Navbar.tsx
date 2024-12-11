import styles from '../styles/Navbar.module.css';

const navItems = [
  { emoji: '🏠', label: 'Home' },
  { emoji: '📝', label: 'Music' },
  { emoji: '📚', label: 'Tech' },
  { emoji: '👤', label: 'Code' },
  { emoji: '⚙️', label: 'Settings' }
];

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      {navItems.map((item, index) => (
        <button key={index} className={styles.navButton}>
          <span className={styles.emoji}>{item.emoji}</span>
          <span className={styles.tooltip}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}