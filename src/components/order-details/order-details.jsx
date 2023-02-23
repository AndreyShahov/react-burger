import styles from './order-details.module.css';

export function OrderDetails() {
  return (
    <div className={styles.container}>
      <p className="text text_type_digits-large mt-6 mb-8">034536</p>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <div className={styles.icon}></div>
      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mb-30">Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}
