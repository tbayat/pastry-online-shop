import React from "react";

const CakesMenu = ({ cakes }) => {
  return (
    <section
      style={{
        padding: "50px 50px 50px 50px",
        width: "100vw",
        textAlign: "center",
        textJustify: "inter-word",
        fontFamily: "serif",
      }}
    >
      {Object.values(cakes).map((cake) => {
        const { url, name, price, description } = cake;
        return (
          <article>
            <img src={url} alt={name} width={100} height={100} />
            <h3>{name}</h3>
            <strong>${price}</strong>
            <p>{description}</p>
          </article>
        );
      })}
    </section>
  );
};

export default CakesMenu;
