import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'art',
                  imageUrl: 'https://i.ibb.co/mtS93Nd/art.jpg',
                  id: 1,
                  linkUrl: 'shop/art'
                },
                {
                  title: 'baking',
                  imageUrl: 'https://i.ibb.co/b3FB589/baking.jpg',
                  id: 2,
                  linkUrl: 'shop/baking'
                },
                {
                  title: 'crafts',
                  imageUrl: 'https://i.ibb.co/Y3CdrsT/crafts.jpg',
                  id: 3,
                  linkUrl: 'shop/crafts'
                },
                {
                  title: 'office',
                  imageUrl: 'https://i.ibb.co/VvhpFZP/office.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/office'
                },
                {
                  title: 'decor',
                  imageUrl: 'https://i.ibb.co/DrzLtRL/decor.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/decor'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;