import styles from './app-header.module.css'
import Link from '../link/link';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.menu}>
          <Link
            icon={<BurgerIcon type="primary" />}
            name="Конструктор"
          />
          <Link
            icon={<ListIcon type="secondary" />}
            name="Лента заказов"
            color="text_color_inactive"
          />
          <Link
            icon={<ProfileIcon type="secondary" />}
            name="Личный кабинет"
            color="text_color_inactive"
          />
        </ul>
      </nav>

    </header>
  );
}
