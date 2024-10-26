import { useState } from 'react';
import { useAuth } from '@/pages/context/AuthContext';
import { useRouter } from 'next/router';
import styles from '@/styles/auth/Register.module.css'; 
import Link from 'next/link';

export default function RegisterPage() {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await register(name,email, password);
      router.push('/auth/login');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className={styles.wrapper}>
    <div className={styles.formContainer}>
      <h2>Create Your Account</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="**************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="**************"
            required
          />
        </div>
        <button type="submit" className={styles.btn}>Register</button>
      </form>
      <div className={styles.loginLink}>
        <p>Already have an account? <Link href="/">Login Here</Link></p>
      </div>
    </div>
    </div>
  );
}
