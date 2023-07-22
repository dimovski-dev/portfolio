import style from './styles.module.css'
import "../app/global.css"
import { useRouter } from 'next/navigation';

export default function Custom404() {
  const { push } = useRouter();
  const onGoBackHandler = () => {
    push('/')
  }
  return (
    <section className={style.errorWrapper}>
      <div>
        <h1 className={style.title}>404</h1>
        <p className={style.subtitle}>Page not found</p>
      </div>
      <div>
        <button onClick={onGoBackHandler} className={style.button}>Go back</button>
      </div>
    </section>
  )
}