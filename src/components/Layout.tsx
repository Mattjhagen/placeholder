import { Link, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';

const navItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/ai-prompt', label: 'Create Site' },
  { path: '/automations', label: 'Automations' },
  { path: '/profile', label: 'Profile' },
  { path: '/help', label: 'Help' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  // Hide nav on landing/signup flows
  const hideNav = ['/', '/signup', '/subdomain', '/tutorial'].includes(pathname);

  return (
    <div className={styles.appcontainer}>
      {!hideNav && (
        <nav className={styles.nav}>
          <ul>
            {navItems.map(item => (
              <li key={item.path}>
                <Link to={item.path} className={pathname.startsWith(item.path) ? styles.active : ''}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <main className={styles.main}>{children}</main>
    </div>
  );
}