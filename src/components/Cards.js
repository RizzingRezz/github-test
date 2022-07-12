import React from 'react';
import '../styles/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Title of the first Article'
              label='News'
              path='/presentation'
              id='1'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Title of the second Article'
              label='Explanation'
              path='/'
              id='2'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Title of the third Article'
              label='Explanation'
              path='/'
              id='3'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Title of the fourth Article'
              label='News'
              path='/'
              id='4'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Title of the fifth Article'
              label='News'
              path='/'
              id='5'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
