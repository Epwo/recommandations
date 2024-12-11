import { Post } from './types/Post';
import styles from './styles/App.module.css';
import { Navbar } from './components/Navbar';

const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with React',
    content: 'React is a fantastic library...',
    category: 'code',
    date: '2024-03-20',
    
  },
  {
    id: 2,
    title: 'TypeScript Basics',
    content: 'TypeScript adds static typing...',
    category: 'code',
    date: '2024-03-21'
  }
];

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <header>
        <h1 className={styles.title}>
          My Blog Posts
        </h1>
        <p className={styles.description}>
          Explore the latest articles and tutorials
        </p>
      </header>

      <main>
        <div className={styles.grid}>
          {mockPosts.map(post => (
            <article key={post.id} className={styles.card}>
              <h3>{post.title}</h3>
              <div>
                <p>{post.content}</p>
                <div>
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;