import React from 'react';
import Category from './category';

function Categories(props) {
	return (
		props.categories.map((item) => {
			return <Category key={item.id} {...item} />
		})
	)
}

export default Categories;