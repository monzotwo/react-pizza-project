import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export const FullPizza = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
    rating: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://646f373209ff19b12086cb62.mockapi.io/pizzas/${id}`,
        );
        setPizza(data);
      } catch (error) {
        alert('ошибка при получении пиццы - возвращаемся на главную' + error);
        navigate('/');
      }
    }
    fetchPizza();
  }, []);
  console.log(pizza);

  if (!pizza) {
    return <h1>Загрузка...</h1>;
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={`пицца ${id}`} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price}R </span>
      <span>{pizza.rating}*</span>

      <Link to={'/'}>
        <button className="button">back</button>
      </Link>
    </div>
  );
};
