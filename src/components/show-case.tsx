import ShowcaseItem from './show-case-item';

import DambaCafe from '../assets/showcase/damba-cafe.png';
import GoLaundry from '../assets/showcase/go-laundry.png';
import BimAkad from '../assets/showcase/bim-akad.png';

const items = [
    {
        title: 'Damba Cafe',
        image: DambaCafe,
    },
    {
        title: 'Go Laundry',
        image: GoLaundry,
    },
    {
        title: 'BIM Akad',
        image: BimAkad,
    },
];

function ShowCase() {
    return (
        <>
            {items.map((item, index) => {
                return (
                    <ShowcaseItem
                        key={index}
                        title={item.title}
                        image={item.image}
                    />
                );
            })}
        </>
    );
}

export default ShowCase;
