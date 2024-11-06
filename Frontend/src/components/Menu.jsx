import React from 'react'
import  { data } from "../restApi.json";

export default function Menu() {
  return (
    <section className='menu' id='menu'>
      <div className="container">
        <div className="heading_section">
            <h1 className="heading">Popular Dishes</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum necessitatibus similique ipsa voluptatum quas officiis dolores quod doloribus. Saepe, illum?</p>
        </div>
        <div className="dishes_container">
            {
                data[0].dishes.map(element =>(
                    <div className="card" key={element.id}>
                        <img src={element.image} alt={element.title} />
                        <h3>{element.title}</h3>
                        <button>{element.category}</button>
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  )
}
