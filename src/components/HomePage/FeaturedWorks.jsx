import React, { useEffect, useState } from 'react'
import css from '../HomePage/HomePage.module.css'
import images from './categorisImg'
const FeaturedWorks = () => {
    const [filter, setFilter] = useState('all');
    const [filterImg, setfilterImg] = useState([])

    const handleFilterChange = (category) => {
        setFilter(category)
    };
    useEffect(() => {
        const filterImages = filter === 'all' ? images : images.filter(img => img.category === filter);
        setfilterImg(filterImages)
    }, [filter])

    return (
        <>
            <div className={css.featuredWorksContainer}>
                <div className={css.featuredWorksWidthContainer}>
                    <div className={css.featuredWorksTitleBlock}>
                        <div><p className={css.featuredWorksText}><span className={css.linefeaturedWorks}></span>PROJECTS</p>
                        </div>
                        <h2 className={css.featuredWorksTitle}>Featured Works</h2>
                    </div>
                    <div className={css.listFeaturedWorks} >
                        <li onClick={() => handleFilterChange('all')} className={css.itemFeaturedWorks}>All</li>
                        <li onClick={() => handleFilterChange('3dModeling')} className={css.itemFeaturedWorks}>3d Modeling</li>
                        <li onClick={() => handleFilterChange('Architecture')} className={css.itemFeaturedWorks}>Architecture</li>
                        <li onClick={() => handleFilterChange('Buildings')} className={css.itemFeaturedWorks}>Buildings</li>
                        <li onClick={() => handleFilterChange('LivinRoom')} className={css.itemFeaturedWorks}>Living Room</li>
                    </div>
                </div>
            </div>
            <div className={css.containerApartaments}>
                {filterImg.map(image => (<img key={image.id} src={image.img} alt={image.title} className={css.apartamentsImg} />))}
            </div>
        </>
    )
}

export default FeaturedWorks
