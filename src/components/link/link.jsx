import linkStyles from './link.module.css';

export default function Link({ icon, name, color}) {
  return (
    <div className={`${linkStyles.box} pl-5 pr-5`}>
      <div className="mr-2">{icon}</div>
      <a href="#" className={`${linkStyles.link} text text_type_main-default ${color}`}>{name}</a>
    </div>
  )
}



