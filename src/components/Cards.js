const Cards = (props) => {
  const { id, img, title, desc, price } = props.card;
  return (
    <article className="main-item">
      <img src={img} alt={title} />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span>{price}</span>
        </header>
        <p>{desc}</p>
      </div>
    </article>
  );
};

export default Cards;
