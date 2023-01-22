import headerStyles from './app-header.module.css'
import Link from '../link/link';
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';

export default function AppHeader() {
  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.menu}>
          <li className={headerStyles.box}>
            <Link
              icon={<BurgerIcon type="primary" />}
              name="Конструктор"
            />
            <Link
              icon={<ListIcon type="secondary" />}
              name="Лента заказов"
              color="text_color_inactive"
            />
          </li>
          <li>
            <Link
              icon={<ProfileIcon type="secondary" />}
              name="Личный кабинет"
              color="text_color_inactive"
            />
          </li>
        </ul>
      </nav>
      <div className={headerStyles.logo}><Logo /></div>

    </header>
  );
}
