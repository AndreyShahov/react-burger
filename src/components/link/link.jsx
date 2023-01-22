import linkStyles from './link.module.css';

export default function Link({ icon, name, color}) {
  return (
    <li className={linkStyles.box}>
      <div className="mr-2">{icon}</div>
      <a href="#" className={`${linkStyles.link} text text_type_main-default ${color}`}>{name}</a>
    </li>
  )
}
